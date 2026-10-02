"use client";

import { useCallback, useSyncExternalStore } from "react";

import { type CardStates, type ScoreRecord, cardsKey, scoreKey } from "./study-progress";

const EVENT = "study-change";

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(EVENT, onChange);
  };
}

function readRaw(key: string) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeJson(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
  window.dispatchEvent(new Event(EVENT));
}

// useSyncExternalStore needs a stable snapshot, so parsing is cached per raw string.
const parsed = new Map<string, unknown>();
function parseCached<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  if (!parsed.has(raw)) {
    try {
      parsed.set(raw, JSON.parse(raw));
    } catch {
      parsed.set(raw, fallback);
    }
  }
  return parsed.get(raw) as T;
}

const EMPTY_CARDS: CardStates = {};

/** Each reader's own review progress, kept in this browser. */
export function useCardStates(slug: string) {
  const raw = useSyncExternalStore(subscribe, () => readRaw(cardsKey(slug)), () => null);
  const states = parseCached<CardStates>(raw, EMPTY_CARDS);
  const save = useCallback((next: CardStates) => writeJson(cardsKey(slug), next), [slug]);
  return [states, save] as const;
}

export function useScore(slug: string) {
  const raw = useSyncExternalStore(subscribe, () => readRaw(scoreKey(slug)), () => null);
  const score = parseCached<ScoreRecord | null>(raw, null);
  const save = useCallback((next: ScoreRecord) => writeJson(scoreKey(slug), next), [slug]);
  return [score, save] as const;
}

const LESSONS_KEY = "lecciones:estudiadas";
const NO_LESSONS: string[] = [];

/** Lessons this reader has marked as studied, kept in this browser. */
export function useStudiedLessons() {
  const raw = useSyncExternalStore(subscribe, () => readRaw(LESSONS_KEY), () => null);
  const studied = parseCached<string[]>(raw, NO_LESSONS);
  const toggle = useCallback((slug: string) => {
    const current = parseCached<string[]>(readRaw(LESSONS_KEY), NO_LESSONS);
    writeJson(LESSONS_KEY, current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug]);
  }, []);
  return [studied, toggle] as const;
}
