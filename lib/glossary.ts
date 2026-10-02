import type { Lesson } from "./lessons";

export type GlossaryDefinition = { text: string; slug: string; number: string; title: string; anchor: string | null };
export type GlossaryTerm = { term: string; key: string; letter: string; definitions: GlossaryDefinition[] };

const SOURCES = [
  { heading: /^glosario$/i, format: (cells: string[]) => cells[1] },
  // Key concepts: | Concepto | Qué es | Para qué sirve |
  {
    heading: /^conceptos clave$/i,
    format: (cells: string[]) => {
      const what = (cells[1] ?? "").trim();
      const use = (cells[2] ?? "").trim();
      if (!use) return what;
      return `${/[.!?]$/.test(what) ? what : `${what}.`} Sirve para: ${use}`;
    },
  },
];

/** Accent-, case- and markup-insensitive form used to merge the same term across lessons and to search. */
export const normalizeTerm = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[*_`]/g, "")
    .toLowerCase()
    .trim();

const clean = (value: string) => value.replace(/\*\*/g, "").trim();

function tableRows(text: string) {
  return text
    .split("\n")
    .filter((line) => line.trim().startsWith("|"))
    .map((line) =>
      line
        .trim()
        .replace(/^\||\|$/g, "")
        .split(/(?<!\\)\|/)
        .map((cell) => cell.replace(/\\\|/g, "|").trim()),
    )
    // Drop the header row and the |---| separator.
    .filter((cells, index) => index > 0 && !cells.every((cell) => /^:?-{2,}:?$/.test(cell)));
}

export function buildGlossary(lessons: Lesson[]): GlossaryTerm[] {
  const terms = new Map<string, GlossaryTerm>();

  for (const item of lessons) {
    for (const section of item.sections) {
      const source = SOURCES.find((candidate) => section.heading && candidate.heading.test(section.heading));
      if (!source) continue;
      for (const cells of tableRows(section.text)) {
        const term = clean(cells[0] ?? "");
        const definition = clean(source.format(cells) ?? "");
        if (!term || !definition) continue;

        const key = normalizeTerm(term);
        // `<head>` and `:hover` are filed under their first letter, not under the symbol.
        const initial = key.replace(/^[^a-z0-9ñ]+/, "")[0] ?? "";
        const entry = terms.get(key) ?? {
          term,
          key,
          letter: /[a-zñ]/.test(initial) ? initial.toUpperCase() : "#",
          definitions: [],
        };
        // The same lesson may list a term both as key concept and in the glossary: keep one.
        if (!entry.definitions.some((existing) => existing.slug === item.slug)) {
          entry.definitions.push({ text: definition, slug: item.slug, number: item.number, title: item.title, anchor: section.id });
        }
        terms.set(key, entry);
      }
    }
  }

  return [...terms.values()]
    .map((entry) => ({ ...entry, definitions: entry.definitions.sort((a, b) => a.number.localeCompare(b.number)) }))
    .sort((a, b) => a.key.replace(/^[^a-z0-9ñ]+/, "").localeCompare(b.key.replace(/^[^a-z0-9ñ]+/, ""), "es"));
}
