/** Days until a card is due again once it reaches each Leitner box (box 1 means "review it now"). */
export const BOX_INTERVAL_DAYS = [0, 0, 1, 3, 7, 16];
export const TOP_BOX = 5;
const DAY = 24 * 60 * 60 * 1000;

export type CardState = { box: number; due: string };
export type CardStates = Record<string, CardState>;
export type ScoreRecord = { best: number; last: number; total: number; at: string };

export const cardsKey = (slug: string) => `repaso:cards:${slug}`;
export const scoreKey = (slug: string) => `repaso:score:${slug}`;

/** Knowing a card moves it up a box and further into the future; missing it sends it back to box 1. */
export function gradeCard(state: CardState | undefined, knew: boolean, now = new Date()): CardState {
  const box = knew ? Math.min(TOP_BOX, (state?.box ?? 1) + 1) : 1;
  return { box, due: new Date(now.getTime() + BOX_INTERVAL_DAYS[box] * DAY).toISOString() };
}

/** Cards to study now: never seen, or due. Missed cards come first. */
export function dueCards<T extends { id: string }>(cards: T[], states: CardStates, now = new Date()) {
  return cards
    .filter((card) => !states[card.id] || new Date(states[card.id].due) <= now)
    .sort((a, b) => (states[a.id]?.box ?? 0) - (states[b.id]?.box ?? 0));
}

export function nextReview(cards: { id: string }[], states: CardStates) {
  const dates = cards.map((card) => states[card.id]?.due).filter((due): due is string => Boolean(due)).sort();
  return dates[0] ?? null;
}
