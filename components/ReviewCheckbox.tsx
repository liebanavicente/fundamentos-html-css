"use client";

import { useSyncExternalStore } from "react";

const EVENT = "review-change";

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(EVENT, onChange);
  };
}

function read(key: string) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

/** A review checklist item each reader ticks for themselves; remembered in this browser only. */
export function ReviewCheckbox({ storageKey, initial }: { storageKey: string; initial: boolean }) {
  const key = `repaso:${storageKey}`;
  const checked = useSyncExternalStore(subscribe, () => (read(key) ?? String(initial)) === "true", () => initial);

  function toggle() {
    try {
      localStorage.setItem(key, String(!checked));
    } catch {}
    window.dispatchEvent(new Event(EVENT));
  }

  return <input aria-label="Marcar como repasado" checked={checked} onChange={toggle} type="checkbox" />;
}
