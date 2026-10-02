"use client";

import { useEffect, useState } from "react";

import type { TocEntry } from "../lib/markdown-plugins";

/** Index of the notes that marks the section being read. */
export function TableOfContents({ entries }: { entries: TocEntry[] }) {
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    const headings = entries
      .map((entry) => document.getElementById(entry.id))
      .filter((heading): heading is HTMLElement => Boolean(heading));
    // A heading counts as "being read" once it passes the top third of the screen.
    const observer = new IntersectionObserver(
      (records) => {
        const above = headings.filter((heading) => heading.getBoundingClientRect().top < window.innerHeight * 0.35);
        const visible = records.find((record) => record.isIntersecting)?.target.id;
        setCurrent(above.at(-1)?.id ?? visible ?? null);
      },
      { rootMargin: "0px 0px -65% 0px" },
    );
    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [entries]);

  return (
    <details className="toc" open>
      <summary className="muted">En esta página</summary>
      <ol>
        {entries.map((entry) => (
          <li className={`toc-level-${entry.level}`} key={entry.id}>
            <a aria-current={current === entry.id ? "location" : undefined} href={`#${entry.id}`}>
              {entry.text}
            </a>
          </li>
        ))}
      </ol>
    </details>
  );
}
