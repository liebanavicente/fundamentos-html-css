import Link from "next/link";

import { HeaderShell } from "./HeaderShell";
import { Navigation } from "./Navigation";
import { buildSearchDocs } from "../lib/search";
import { getAllLessons } from "../lib/lessons";
import { SearchPalette } from "./SearchPalette";

export function Header() {
  // The whole course is a few dozen sections, so the search index travels with the page.
  const docs = buildSearchDocs(getAllLessons());
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <HeaderShell>
        <div className="container topbar-inner">
          <Link aria-label="Inicio" className="brand" href="/">
            <span aria-hidden className="brand-mark">
              &lt;/&gt;
            </span>
            <span className="brand-copy">
              <strong>HTML y CSS</strong>
              <span>desde cero</span>
            </span>
          </Link>
          <div className="topbar-actions">
            <SearchPalette docs={docs} />
            <Navigation />
          </div>
        </div>
      </HeaderShell>
    </>
  );
}
