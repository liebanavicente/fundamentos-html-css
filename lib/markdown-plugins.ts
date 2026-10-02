import GithubSlugger from "github-slugger";
import type { Blockquote, Code, Root } from "mdast";
import { visit } from "unist-util-visit";

const CALLOUTS = {
  note: "Nota",
  tip: "Consejo",
  important: "Idea clave",
  warning: "Atención",
  caution: "Cuidado",
} as const;

/**
 * Turns GitHub-style alerts (`> [!TIP]`) into labelled callout boxes. `> [!HINT] Pista 1` becomes a
 * folded box that only shows its title, so a reader can ask for one hint at a time.
 */
export function remarkCallouts() {
  return (tree: Root) => {
    visit(tree, "blockquote", (node: Blockquote) => {
      const paragraph = node.children[0];
      const first = paragraph?.type === "paragraph" ? paragraph.children[0] : undefined;
      if (first?.type !== "text") return;

      // Only a hint takes a title on the marker line; elsewhere that text is part of the body.
      const hint = first.value.match(/^\[!hint\][ \t]*([^\n]*)\n?/i);
      const match = hint ?? first.value.match(/^\[!(note|tip|important|warning|caution)\][ \t]*\n?/i);
      if (!match) return;
      const type = hint ? "hint" : (match[1].toLowerCase() as keyof typeof CALLOUTS);
      const title = hint?.[1].trim() || "Pista";

      first.value = first.value.slice(match[0].length);
      if (paragraph.type === "paragraph") {
        if (!first.value) paragraph.children.shift();
        if (paragraph.children[0]?.type === "break") paragraph.children.shift();
        if (!paragraph.children.length) node.children.shift();
      }

      if (type === "hint") {
        node.children.unshift({
          type: "paragraph",
          children: [{ type: "text", value: title }],
          data: { hName: "summary" },
        });
        node.data = { ...node.data, hName: "details", hProperties: { className: ["callout", "callout-hint"] } };
        return;
      }

      node.data = {
        ...node.data,
        hName: "aside",
        hProperties: { className: ["callout", `callout-${type}`], "data-callout": CALLOUTS[type] },
      };
    });
  };
}

export type TocEntry = { id: string; text: string; level: 2 | 3 };

const plainText = (value: string) =>
  value
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[`*_~]/g, "")
    .replace(/\s+#+\s*$/, "")
    .trim();

/** Lists h2/h3 headings with the same ids rehype-slug gives them (it numbers duplicates across every level). */
export function extractToc(markdown: string): TocEntry[] {
  const slugger = new GithubSlugger();
  const entries: TocEntry[] = [];
  let fence: string | null = null;

  for (const line of markdown.split("\n")) {
    const fenceMatch = line.match(/^\s*(```|~~~)/);
    if (fenceMatch) {
      fence = fence === fenceMatch[1] ? null : (fence ?? fenceMatch[1]);
      continue;
    }
    if (fence) continue;

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (!heading) continue;
    const text = plainText(heading[2]);
    const id = slugger.slug(text);
    const level = heading[1].length;
    if (level === 2 || level === 3) entries.push({ id, text, level });
  }
  return entries;
}

export type NoteSection = { id: string | null; heading: string | null; level: number; text: string };

/**
 * Splits notes at their headings, with the same ids rehype-slug gives them, so a search hit or an AI
 * citation can link straight to the right part of the page. Text before the first heading has no id.
 */
export function splitSections(markdown: string): NoteSection[] {
  const slugger = new GithubSlugger();
  const sections: NoteSection[] = [{ id: null, heading: null, level: 0, text: "" }];
  let fence: string | null = null;

  for (const line of markdown.split("\n")) {
    const fenceMatch = line.match(/^\s*(```|~~~)/);
    if (fenceMatch) fence = fence === fenceMatch[1] ? null : (fence ?? fenceMatch[1]);
    const heading = fence || fenceMatch ? null : line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const text = plainText(heading[2]);
      sections.push({ id: slugger.slug(text), heading: text, level: heading[1].length, text: "" });
    } else {
      sections[sections.length - 1].text += `${line}\n`;
    }
  }
  return sections
    .map((section) => ({ ...section, text: section.text.trim() }))
    .filter((section) => section.heading || section.text);
}

/** In a ```playground block, this line separates the HTML (above) from the CSS (below). */
const CSS_MARKER = /^[ \t]*<!--[ \t]*css[ \t]*-->[ \t]*$/im;

export function splitPlayground(source: string) {
  const match = source.match(CSS_MARKER);
  if (match?.index === undefined) return { html: source.trim(), css: "" };
  return { html: source.slice(0, match.index).trim(), css: source.slice(match.index + match[0].length).trim() };
}

/**
 * Turns ```playground blocks into a live editor: the text before `<!-- css -->` is the HTML and the
 * text after it the CSS. The page renders them in a `div` the Markdown renderer swaps for the editor.
 */
export function remarkPlayground() {
  return (tree: Root) => {
    visit(tree, "code", (node: Code) => {
      if (node.lang !== "playground") return;
      const { html, css } = splitPlayground(node.value);
      node.data = {
        ...node.data,
        hName: "div",
        hProperties: { className: ["playground-mount"], dataHtml: html, dataCss: css, dataTitle: node.meta ?? "" },
        hChildren: [],
      };
    });
  };
}
