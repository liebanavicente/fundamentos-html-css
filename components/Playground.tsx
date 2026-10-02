"use client";

import { ArrowCounterClockwise, ArrowSquareOut, Code, DownloadSimple, PaintBrush } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { type KeyboardEvent, useEffect, useId, useRef, useState } from "react";

import { buildDocument, PRACTICE_KEY } from "../lib/playground";

type Tab = "html" | "css";

const INDENT = "  ";

/** Code editor for beginners: a plain textarea with line numbers, where Tab indents instead of leaving. */
function Editor({ label, value, onChange, hint }: { label: string; value: string; onChange: (value: string) => void; hint: string }) {
  const gutterRef = useRef<HTMLPreElement>(null);
  // After Escape, Tab leaves the editor as usual so keyboard users are never trapped inside.
  const releaseTab = useRef(false);
  const lines = value.split("\n").length;

  function onKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Escape") {
      releaseTab.current = true;
      return;
    }
    if (event.key !== "Tab" || releaseTab.current) return;
    event.preventDefault();
    const area = event.currentTarget;
    const { selectionStart: start, selectionEnd: end } = area;
    if (event.shiftKey) {
      const lineStart = value.lastIndexOf("\n", start - 1) + 1;
      if (value.startsWith(INDENT, lineStart)) {
        onChange(value.slice(0, lineStart) + value.slice(lineStart + INDENT.length));
        requestAnimationFrame(() => area.setSelectionRange(Math.max(lineStart, start - 2), Math.max(lineStart, end - 2)));
      }
      return;
    }
    onChange(value.slice(0, start) + INDENT + value.slice(end));
    requestAnimationFrame(() => area.setSelectionRange(start + INDENT.length, start + INDENT.length));
  }

  return (
    <div className="editor">
      <pre aria-hidden className="editor-gutter" ref={gutterRef}>
        {Array.from({ length: lines }, (_, index) => index + 1).join("\n")}
      </pre>
      <textarea
        aria-describedby={hint}
        aria-label={label}
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        onBlur={() => (releaseTab.current = false)}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={onKeyDown}
        onScroll={(event) => {
          if (gutterRef.current) gutterRef.current.scrollTop = event.currentTarget.scrollTop;
        }}
        spellCheck={false}
        value={value}
        wrap="off"
      />
    </div>
  );
}

export type PlaygroundProps = {
  html: string;
  css?: string;
  title?: string;
  /** Show the CSS tab even when the example starts without CSS. */
  withCss?: boolean;
  /** The free practice area keeps its code and offers a download instead of "open in practice". */
  practice?: boolean;
  onChange?: (code: { html: string; css: string }) => void;
};

/** Edit HTML and CSS on one side and see the page on the other, updated as you type. */
export function Playground({ html: initialHtml, css: initialCss = "", title, withCss, practice, onChange }: PlaygroundProps) {
  const router = useRouter();
  const id = useId();
  const [html, setHtml] = useState(initialHtml);
  const [css, setCss] = useState(initialCss);
  const [tab, setTab] = useState<Tab>("html");
  const [preview, setPreview] = useState(() => buildDocument(initialHtml, initialCss));
  const hasCss = withCss || Boolean(initialCss);
  const changed = html !== initialHtml || css !== initialCss;

  // The preview waits for a short pause in the typing so the frame does not flash on every key.
  useEffect(() => {
    const timer = setTimeout(() => setPreview(buildDocument(html, css)), 250);
    return () => clearTimeout(timer);
  }, [html, css]);

  useEffect(() => {
    onChange?.({ html, css });
  }, [html, css, onChange]);

  function reset() {
    setHtml(initialHtml);
    setCss(initialCss);
  }

  function openInPractice() {
    try {
      localStorage.setItem(PRACTICE_KEY, JSON.stringify({ html, css }));
    } catch {}
    router.push("/practica");
  }

  function download() {
    const file = new Blob([buildDocument(html, css, { standalone: true })], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = "index.html";
    link.click();
    URL.revokeObjectURL(link.href);
  }

  const hint = `${id}-hint`;

  return (
    <section aria-label={title || "Zona de pruebas"} className={`playground${practice ? " is-practice" : ""}`}>
      <div className="playground-bar">
        <strong>{title || "Pruébalo tú"}</strong>
        <div className="playground-tabs" role="tablist" aria-label="Archivo">
          <button aria-controls={`${id}-editor`} aria-selected={tab === "html"} onClick={() => setTab("html")} role="tab" type="button">
            <Code aria-hidden size={16} weight="bold" /> HTML
          </button>
          {hasCss ? (
            <button aria-controls={`${id}-editor`} aria-selected={tab === "css"} onClick={() => setTab("css")} role="tab" type="button">
              <PaintBrush aria-hidden size={16} weight="bold" /> CSS
            </button>
          ) : null}
        </div>
        <div className="playground-actions">
          <button disabled={!changed} onClick={reset} title="Volver al código del ejemplo" type="button">
            <ArrowCounterClockwise aria-hidden size={16} weight="bold" />
            <span>Restablecer</span>
          </button>
          {practice ? (
            <button onClick={download} title="Guardar la página como index.html" type="button">
              <DownloadSimple aria-hidden size={16} weight="bold" />
              <span>Descargar</span>
            </button>
          ) : (
            <button onClick={openInPractice} title="Seguir con este código en la zona de práctica" type="button">
              <ArrowSquareOut aria-hidden size={16} weight="bold" />
              <span>Abrir en Práctica</span>
            </button>
          )}
        </div>
      </div>
      <p className="visually-hidden" id={hint}>
        Tab añade una sangría. Pulsa Escape y luego Tab para salir del editor.
      </p>
      <div className="playground-body">
        <div className="playground-code" id={`${id}-editor`} role="tabpanel">
          {tab === "html" ? (
            <Editor hint={hint} label="Código HTML" onChange={setHtml} value={html} />
          ) : (
            <Editor hint={hint} label="Código CSS" onChange={setCss} value={css} />
          )}
        </div>
        <div className="playground-preview">
          <span className="playground-label">Resultado</span>
          {/* A unique origin: whatever runs inside cannot reach this site, its storage or its cookies. */}
          <iframe sandbox="allow-scripts allow-forms allow-popups allow-modals" srcDoc={preview} title={`Resultado: ${title || "zona de pruebas"}`} />
        </div>
      </div>
    </section>
  );
}
