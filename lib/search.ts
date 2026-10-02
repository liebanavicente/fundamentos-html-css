import { buildGlossary } from "./glossary";
import type { Lesson } from "./lessons";

export type SearchKind = "leccion" | "apartado" | "glosario";

export type SearchDoc = {
  kind: SearchKind;
  title: string;
  /** Where the hit lives, e.g. the lesson title for a section. */
  context: string;
  url: string;
  text: string;
};

export type SnippetPart = { text: string; hit: boolean };
export type SearchResult = Omit<SearchDoc, "text"> & { score: number; snippet: SnippetPart[] };

const STOPWORDS = new Set(
  "a al algo como con cual cuando de del donde el en entre era es esa ese eso esta este esto ha hay la las le lo los mas me mi mas muy no o para pero por que se si sin sobre su sus te tu un una uno unos y ya yo qué cómo cuál dónde cuándo explica explicame explícame dime sirve hacer hago leccion lecciones".split(
    " ",
  ),
);

/** Lowercase without accents, keeping one character per input character so positions still line up. */
function fold(value: string) {
  return [...value]
    .map((char) => {
      const base = char.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      return base.length === char.length ? base : char;
    })
    .join("");
}

export function queryTerms(query: string) {
  return [...new Set(fold(query).split(/[^a-z0-9ñ]+/).filter((term) => term.length > 1 && !STOPWORDS.has(term)))];
}

/** Markdown noise out, so snippets read as plain sentences. */
function plain(markdown: string) {
  return markdown
    .replace(/```[\s\S]*?```/g, (block) => block.replace(/```\w*/g, " ").replace(/<!--\s*css\s*-->/gi, " "))
    .replace(/\[!(note|tip|important|warning|caution|hint)\]/gi, " ")
    .replace(/[#>*_`|]/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/-{3,}/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function buildSearchDocs(lessons: Lesson[]) {
  const docs: SearchDoc[] = [];
  for (const lesson of lessons) {
    docs.push({
      kind: "leccion",
      title: `${lesson.number}. ${lesson.title}`,
      context: lesson.part,
      url: `/lecciones/${lesson.slug}`,
      text: lesson.summary,
    });
    for (const section of lesson.sections) {
      if (!section.heading) continue;
      docs.push({
        kind: "apartado",
        title: section.heading,
        context: `${lesson.number}. ${lesson.title}`,
        url: `/lecciones/${lesson.slug}#${section.id}`,
        text: plain(section.text),
      });
    }
  }
  for (const entry of buildGlossary(lessons)) {
    docs.push({
      kind: "glosario",
      title: entry.term.replace(/`/g, ""),
      context: "Glosario",
      url: `/glosario#letra-${entry.letter}`,
      text: plain(entry.definitions.map((item) => item.text).join(" ")),
    });
  }
  return docs;
}

function countMatches(haystack: string, term: string, prefix: boolean) {
  if (!haystack) return 0;
  const pattern = new RegExp(`(?:^|[^a-z0-9ñ])${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}${prefix ? "" : "(?![a-z0-9ñ])"}`, "g");
  return haystack.match(pattern)?.length ?? 0;
}

function snippetOf(text: string, terms: string[], length = 180): SnippetPart[] {
  if (!text) return [];
  const folded = fold(text);
  const first = Math.min(...terms.map((term) => folded.indexOf(term)).filter((index) => index >= 0), Infinity);
  const start = first === Infinity ? 0 : Math.max(0, first - 60);
  const end = Math.min(text.length, start + length);
  const window = text.slice(start, end);
  const foldedWindow = folded.slice(start, end);

  // Mark every term occurrence inside the window.
  const marks = new Array<boolean>(window.length).fill(false);
  for (const term of terms) {
    let index = foldedWindow.indexOf(term);
    while (index >= 0) {
      marks.fill(true, index, index + term.length);
      index = foldedWindow.indexOf(term, index + term.length);
    }
  }
  const parts: SnippetPart[] = [];
  for (let i = 0; i < window.length; i += 1) {
    const last = parts.at(-1);
    if (last && last.hit === marks[i]) last.text += window[i];
    else parts.push({ text: window[i], hit: marks[i] });
  }
  if (start > 0) parts.unshift({ text: "…", hit: false });
  if (end < text.length) parts.push({ text: "…", hit: false });
  return parts;
}

const KIND_WEIGHT: Record<SearchKind, number> = { leccion: 3, glosario: 2, apartado: 1 };

/**
 * Ranks documents by how many query words they contain (all of them first), then by where they appear:
 * a word in a heading counts more than one in the body. The last word also matches as a prefix,
 * so results appear while it is still being typed.
 */
export function search(
  docs: SearchDoc[],
  query: string,
  limit = 20,
  /** Keep partial matches (ranked after full ones), e.g. to give the chat more context. */
  { partial = false } = {},
): SearchResult[] {
  const terms = queryTerms(query);
  if (!terms.length) return [];

  const results: Array<SearchResult & { matched: number }> = [];
  for (const doc of docs) {
    const title = fold(doc.title);
    const text = fold(doc.text);
    let matched = 0;
    let weight = 0;
    terms.forEach((term, index) => {
      const prefix = index === terms.length - 1;
      const inTitle = countMatches(title, term, prefix);
      const inText = Math.min(countMatches(text, term, prefix), 5);
      if (inTitle || inText) matched += 1;
      weight += inTitle * 6 + inText;
    });
    if (!matched) continue;
    const { text: _text, ...rest } = doc;
    results.push({ ...rest, matched, score: weight * KIND_WEIGHT[doc.kind], snippet: snippetOf(doc.text, terms) });
  }
  const best = Math.max(...results.map((result) => result.matched), 0);
  // With several words, hits that contain all of them are what the reader wants; partial ones only if nothing else.
  return results
    .filter((result) => partial || result.matched === best)
    .sort((a, b) => b.matched - a.matched || b.score - a.score)
    .slice(0, limit)
    .map(({ matched: _matched, ...result }) => result);
}
