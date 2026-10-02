import { describe, expect, it } from "vitest";

import { buildDocument } from "../lib/playground";

describe("playground preview document", () => {
  it("wraps a fragment in a page with its CSS", () => {
    const page = buildDocument("<h1>Hola</h1>", "h1 { color: red; }");
    expect(page).toMatch(/^<!DOCTYPE html>/);
    expect(page).toContain('<meta charset="UTF-8">');
    expect(page).toContain("<style>\nh1 { color: red; }\n</style>");
    expect(page).toContain("<body>\n<h1>Hola</h1>\n");
  });

  it("keeps a full document as written and adds the CSS to its head", () => {
    const html = '<!DOCTYPE html>\n<html lang="es">\n<head>\n<title>Yo</title>\n</head>\n<body><p>Hola</p></body>\n</html>';
    const page = buildDocument(html, "p { margin: 0; }");
    expect(page.match(/<html/g)).toHaveLength(1);
    expect(page).toContain("<title>Yo</title>\n<base target=\"_blank\">\n<style>\np { margin: 0; }\n</style>\n</head>");
  });

  it("opens links in a new tab but keeps jumps within the page in the frame", () => {
    const page = buildDocument('<a href="#precios">Precios</a> <a href="https://example.com">Fuera</a> <a href="#x" target="_blank">Ya tiene</a>', "");
    expect(page).toContain('<a target="_self" href="#precios">');
    expect(page).toContain('<a href="https://example.com">');
    expect(page).toContain('<a href="#x" target="_blank">');
    expect(page).toContain('<base target="_blank">');
  });

  it("adds the form helper to the preview, also in a full document", () => {
    expect(buildDocument("<form></form>", "")).toContain('addEventListener("submit"');
    const page = buildDocument("<!DOCTYPE html><html><body><p>Hola</p></body></html>", "");
    expect(page).toMatch(/<p>Hola<\/p><script>[\s\S]*<\/script>\n<\/body><\/html>$/);
  });

  it("downloads a clean file without the preview helpers", () => {
    const page = buildDocument('<a href="#arriba">Subir</a>', "");
    const file = buildDocument('<a href="#arriba">Subir</a>', "", { standalone: true });
    expect(page).toContain("<base");
    expect(file).not.toContain("<base");
    expect(file).not.toContain("<script");
    expect(file).toContain('<a href="#arriba">');
  });
});
