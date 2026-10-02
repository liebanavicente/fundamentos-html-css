"use client";

import { type ReactNode, useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

/** The header tightens once the page scrolls, leaving more room for the notes. */
export function HeaderShell({ children }: { children: ReactNode }) {
  const scrolled = useSyncExternalStore(subscribe, () => window.scrollY > 12, () => false);
  return (
    <header className="topbar" data-scrolled={scrolled}>
      {children}
    </header>
  );
}
