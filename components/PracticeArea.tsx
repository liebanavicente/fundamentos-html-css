"use client";

import { useCallback, useState, useSyncExternalStore } from "react";

import { PRACTICE_KEY } from "../lib/playground";
import { Playground } from "./Playground";

type Code = { html: string; css: string };

export const TEMPLATES: Array<{ id: string; label: string; code: Code }> = [
  {
    id: "en-blanco",
    label: "Página en blanco",
    code: {
      html: "<h1>Mi página</h1>\n<p>Empieza a escribir aquí.</p>",
      css: "body {\n  font-family: sans-serif;\n}",
    },
  },
  {
    id: "perfil",
    label: "Tarjeta de perfil",
    code: {
      html: `<article class="tarjeta">
  <img src="https://picsum.photos/id/64/200/200" alt="Foto de perfil">
  <h1>Lucía Pérez</h1>
  <p>Aprendiendo HTML y CSS desde cero.</p>
  <a href="https://developer.mozilla.org/es/">Mi recurso favorito</a>
</article>`,
      css: `body {
  font-family: sans-serif;
  background: #f4f4f0;
}

.tarjeta {
  max-width: 280px;
  margin: 40px auto;
  padding: 24px;
  text-align: center;
  background: white;
  border: 2px solid #111;
  border-radius: 16px;
}

.tarjeta img {
  width: 120px;
  border-radius: 50%;
}

.tarjeta a {
  color: #4f6b00;
  font-weight: bold;
}`,
    },
  },
  {
    id: "flexbox",
    label: "Menú con Flexbox",
    code: {
      html: `<header class="cabecera">
  <strong>Mi web</strong>
  <nav>
    <a href="#">Inicio</a>
    <a href="#">Sobre mí</a>
    <a href="#">Contacto</a>
  </nav>
</header>`,
      css: `.cabecera {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: #111;
  color: white;
  font-family: sans-serif;
}

.cabecera nav {
  display: flex;
  gap: 16px;
}

.cabecera a {
  color: #d7ff00;
}`,
    },
  },
];

const noSubscribe = () => () => {};

function readSaved(): Code | null {
  try {
    const raw = localStorage.getItem(PRACTICE_KEY);
    const parsed = raw ? (JSON.parse(raw) as Partial<Code>) : null;
    return parsed && typeof parsed.html === "string" ? { html: parsed.html, css: parsed.css ?? "" } : null;
  } catch {
    return null;
  }
}

/** A free editor that remembers its code in this browser, with templates to start from. */
export function PracticeArea() {
  // The saved code lives in this browser only, so the editor waits for it instead of flashing a template.
  const mounted = useSyncExternalStore(noSubscribe, () => true, () => false);
  const [start, setStart] = useState<{ round: number; code: Code } | null>(null);

  const save = useCallback((code: Code) => {
    try {
      localStorage.setItem(PRACTICE_KEY, JSON.stringify(code));
    } catch {}
  }, []);

  if (!mounted) return <div aria-hidden className="playground is-practice is-loading" />;

  const current = start ?? { round: 0, code: readSaved() ?? TEMPLATES[0].code };

  function applyTemplate(id: string) {
    const template = TEMPLATES.find((item) => item.id === id);
    if (!template) return;
    if (!window.confirm(`¿Empezar con «${template.label}»? Se sustituye el código que tienes ahora.`)) return;
    save(template.code);
    // A new round remounts the editor, so "Restablecer" goes back to this template.
    setStart((previous) => ({ round: (previous?.round ?? 0) + 1, code: template.code }));
  }

  return (
    <div className="practice">
      <div className="practice-tools">
        <p className="muted">Empezar desde una plantilla</p>
        <div className="practice-templates">
          {TEMPLATES.map((template) => (
            <button className="button" key={template.id} onClick={() => applyTemplate(template.id)} type="button">
              {template.label}
            </button>
          ))}
        </div>
      </div>
      <Playground
        css={current.code.css}
        html={current.code.html}
        key={current.round}
        onChange={save}
        practice
        title="Zona de práctica"
        withCss
      />
      <p className="muted practice-note">Tu código se guarda solo en este navegador. «Descargar» crea un archivo index.html que puedes abrir con doble clic.</p>
    </div>
  );
}
