import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

import { MarkdownRenderer } from "../lib/markdown";
import { extractToc, splitPlayground } from "../lib/markdown-plugins";

vi.mock("next/navigation", () => ({ useRouter: () => ({ push: () => {} }) }));

const render = (content: string) => renderToStaticMarkup(MarkdownRenderer({ content }));

describe("lesson rendering", () => {
  it("turns GitHub alerts into labelled callouts", () => {
    const html = render("> [!WARNING]\n> **Error:** olvidar cerrar `</p>`.\n\n> cita normal");
    expect(html).toContain('<aside class="callout callout-warning" data-callout="Atención">');
    expect(html).not.toContain("[!WARNING]");
    expect(html).toContain("<blockquote>");
  });

  it("folds hints so each one opens on its own", () => {
    const html = render("> [!HINT] Pista 1\n> Piensa en `<ul>`.\n\n> [!HINT]\n> Sin título.");
    expect(html).toMatch(/<details class="callout callout-hint">\s*<summary>Pista 1<\/summary>/);
    expect(html).toContain("<summary>Pista</summary>");
  });

  it("gives headings ids that match the table of contents", () => {
    const markdown = "## Qué es HTML\n\n### La etiqueta `<p>`\n\n```md\n## no es un título\n```";
    const toc = extractToc(markdown);
    expect(toc.map((entry) => entry.text)).toEqual(["Qué es HTML", "La etiqueta <p>"]);
    const html = render(markdown);
    for (const entry of toc) expect(html).toContain(`id="${entry.id}"`);
  });

  it("splits a playground into HTML and CSS", () => {
    expect(splitPlayground("<h1>Hola</h1>\n<!-- css -->\nh1 { color: red; }")).toEqual({
      html: "<h1>Hola</h1>",
      css: "h1 { color: red; }",
    });
    expect(splitPlayground("<p>Solo HTML</p>")).toEqual({ html: "<p>Solo HTML</p>", css: "" });
  });

  it("renders playground blocks as a live editor and keeps other code as code", () => {
    const html = render("```playground Mi título\n<h1>Hola</h1>\n<!-- css -->\nh1 { color: red; }\n```\n\n```html\n<p>hola</p>\n```");
    expect(html).toContain('class="playground"');
    expect(html).toContain("Mi título");
    expect(html).toContain("&lt;h1&gt;Hola&lt;/h1&gt;</textarea>");
    expect(html).toContain("<iframe");
    expect(html).toContain('class="code-block"');
    expect(html).not.toContain("playground-mount");
  });
});
