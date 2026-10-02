"use client";

import { InlineText } from "./InlineText";
import Link from "next/link";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useMemo, useState } from "react";

import { type GlossaryTerm, normalizeTerm } from "../lib/glossary";

export function GlossaryView({ terms }: { terms: GlossaryTerm[] }) {
  const [query, setQuery] = useState("");
  const needle = normalizeTerm(query);

  const visible = useMemo(
    () =>
      needle
        ? terms.filter((entry) => entry.key.includes(needle) || entry.definitions.some((item) => normalizeTerm(item.text).includes(needle)))
        : terms,
    [terms, needle],
  );
  const letters = [...new Set(visible.map((entry) => entry.letter))];

  return (
    <div className="glossary">
      <div className="glossary-tools">
        <label className="glossary-search">
          <MagnifyingGlass aria-hidden size={20} weight="bold" />
          <input
            aria-label="Buscar en el glosario"
            onChange={(event) => setQuery(event.target.value)}
            placeholder={`Buscar entre ${terms.length} términos`}
            type="search"
            value={query}
          />
        </label>
        <nav aria-label="Letras" className="glossary-letters">
          {letters.map((letter) => (
            <a href={`#letra-${letter}`} key={letter}>
              {letter}
            </a>
          ))}
        </nav>
      </div>

      {visible.length === 0 ? (
        <p className="notice">Ningún término coincide con «{query}».</p>
      ) : (
        letters.map((letter) => (
          <section className="glossary-group" id={`letra-${letter}`} key={letter}>
            <h2>{letter}</h2>
            <dl>
              {visible
                .filter((entry) => entry.letter === letter)
                .map((entry) => (
                  <div className="glossary-entry" key={entry.key}>
                    <dt>
                      <InlineText text={entry.term} />
                    </dt>
                    {entry.definitions.map((item) => (
                      <dd key={item.slug}>
                        <p>
                          <InlineText text={item.text} />
                        </p>
                        <Link href={`/lecciones/${item.slug}${item.anchor ? `#${item.anchor}` : ""}`}>
                          Lección {item.number} · {item.title}
                        </Link>
                      </dd>
                    ))}
                  </div>
                ))}
            </dl>
          </section>
        ))
      )}
    </div>
  );
}
