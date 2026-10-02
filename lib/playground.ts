/** Where the free practice area keeps its code; lessons write here to continue an example there. */
export const PRACTICE_KEY = "practica:codigo";

/**
 * Preview only: a form that passes the browser's validation shows the data it would send instead of
 * leaving the example, which is how a beginner sees what `name` and `value` are for.
 */
const FORM_HELPER = `<script>
document.addEventListener("submit", (event) => {
  event.preventDefault();
  const rows = [...new FormData(event.target)].map(([name, value]) => name + " = " + (value || "(vacío)"));
  let box = document.getElementById("__envio");
  if (!box) {
    box = document.createElement("div");
    box.id = "__envio";
    box.style.cssText = "position:fixed;left:8px;right:8px;bottom:8px;padding:10px 12px;border:2px solid #111;border-radius:10px;background:#d7ff00;color:#111;font:14px/1.4 system-ui,sans-serif;white-space:pre-wrap;z-index:2147483647";
    box.onclick = () => box.remove();
    document.body.append(box);
  }
  box.textContent = "✅ Formulario válido. Se enviaría:\\n" + (rows.join("\\n") || "(ningún dato: ¿falta algún name?)") + "\\n(Toca para cerrar)";
});
</script>`;

/**
 * Whole HTML document for the preview frame. A fragment is wrapped in a page; a full document
 * (with `<html>` or a doctype) is kept as written and only gets the CSS added to its head.
 */
export function buildDocument(source: string, css: string, { standalone = false } = {}) {
  // Jumps within the page (href="#…") stay in the frame; every other link opens a new tab (see <base>).
  const html = standalone ? source : source.replace(/<a\b(?![^>]*\btarget\s*=)([^>]*\bhref\s*=\s*["']#)/gi, '<a target="_self"$1');
  const style = css.trim() ? `<style>\n${css.trim()}\n</style>` : "";
  // No default styles of our own: the preview looks exactly like the file opened in a browser.
  // Links open in a new tab, since inside the small frame they would replace the example.
  const head = standalone ? "" : `<base target="_blank">`;
  const tail = standalone ? "" : FORM_HELPER;

  if (/<html[\s>]|<!doctype/i.test(html)) {
    const extra = [head, style].filter(Boolean).join("\n");
    let page = html;
    if (extra) {
      page = /<\/head>/i.test(page)
        ? page.replace(/<\/head>/i, `${extra}\n</head>`)
        : page.replace(/<html[^>]*>/i, (tag) => `${tag}\n<head>${extra}</head>`);
    }
    if (!tail) return page;
    return /<\/body>/i.test(page) ? page.replace(/<\/body>(?![\s\S]*<\/body>)/i, `${tail}\n</body>`) : `${page}\n${tail}`;
  }

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Mi página</title>
${[head, style].filter(Boolean).join("\n")}
</head>
<body>
${html}
${tail}
</body>
</html>`;
}
