"use client";

import { useRouter } from "next/navigation";
import { type KeyboardEvent, useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BookOpenText, Books, Hash, MagnifyingGlass, X } from "@phosphor-icons/react";

import { type SearchDoc, type SearchKind, search } from "../lib/search";

const KIND = {
  leccion: { label: "Lección", Icon: BookOpenText },
  apartado: { label: "Apartado", Icon: Hash },
  glosario: { label: "Glosario", Icon: Books },
} satisfies Record<SearchKind, { label: string; Icon: typeof Books }>;

/** Search across lessons, their sections and the glossary; opens with Ctrl/Cmd + K. */
export function SearchPalette({ docs }: { docs: SearchDoc[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const deferredQuery = useDeferredValue(query);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function onKey(event: globalThis.KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.classList.add("menu-open");
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const typed = deferredQuery.trim().length >= 2;
  const rows = useMemo(() => (typed ? search(docs, deferredQuery) : []), [docs, deferredQuery, typed]);

  function close() {
    setOpen(false);
    buttonRef.current?.focus();
  }

  function go(row: (typeof rows)[number]) {
    setOpen(false);
    setQuery("");
    router.push(row.url);
  }

  function onKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") close();
    if (!rows.length) return;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const next = (active + (event.key === "ArrowDown" ? 1 : -1) + rows.length) % rows.length;
      setActive(next);
      listRef.current?.children[next]?.scrollIntoView({ block: "nearest" });
    }
    if (event.key === "Enter") {
      event.preventDefault();
      go(rows[active]);
    }
  }

  return (
    <>
      <button aria-haspopup="dialog" className="search-trigger" onClick={() => setOpen(true)} ref={buttonRef} type="button">
        <MagnifyingGlass aria-hidden size={18} weight="bold" />
        <span className="search-label">Buscar</span>
        <kbd>⌘K</kbd>
      </button>
      {open
        ? createPortal(
            <div className="search-overlay" onMouseDown={(event) => event.target === event.currentTarget && close()}>
              <div aria-label="Buscar en el curso" aria-modal="true" className="search-panel" onKeyDown={onKeyDown} role="dialog">
                <div className="search-field">
                  <MagnifyingGlass aria-hidden size={20} weight="bold" />
                  <input
                    aria-activedescendant={rows[active] ? `search-row-${active}` : undefined}
                    aria-controls="search-results"
                    aria-label="Buscar"
                    autoFocus
                    onChange={(event) => {
                      setQuery(event.target.value);
                      setActive(0);
                    }}
                    placeholder="Busca etiquetas, propiedades, conceptos…"
                    role="combobox"
                    aria-expanded={rows.length > 0}
                    value={query}
                  />
                  <button aria-label="Cerrar" className="icon-button" onClick={close} type="button">
                    <X aria-hidden size={16} weight="bold" />
                  </button>
                </div>
                {typed ? (
                  <ul className="search-results" id="search-results" ref={listRef} role="listbox">
                    {rows.map((row, index) => {
                      const { label, Icon } = KIND[row.kind];
                      return (
                        <li
                          aria-selected={index === active}
                          className="search-row"
                          id={`search-row-${index}`}
                          key={`${row.url}-${index}`}
                          onClick={() => go(row)}
                          onMouseMove={() => setActive(index)}
                          role="option"
                        >
                          <Icon aria-hidden className="search-icon" size={18} weight="bold" />
                          <span className="search-copy">
                            <strong>{row.title}</strong>
                            <span className="search-context">
                              {label} · {row.context}
                            </span>
                            {row.snippet.length ? (
                              <span className="search-snippet">
                                {row.snippet.map((part, partIndex) =>
                                  part.hit ? <mark key={partIndex}>{part.text}</mark> : <span key={partIndex}>{part.text}</span>,
                                )}
                              </span>
                            ) : null}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="search-hint">Escribe al menos dos letras. Usa ↑ ↓ para moverte y Enter para abrir.</p>
                )}
                {typed && rows.length === 0 ? <p className="search-hint">No hay nada con «{deferredQuery.trim()}» en el curso.</p> : null}
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
