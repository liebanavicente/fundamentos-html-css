import { describe, expect, it } from "vitest";

import { buildGlossary } from "../lib/glossary";
import { getAllLessons, parseLesson, readReference, shuffleOptions } from "../lib/lessons";
import { extractToc } from "../lib/markdown-plugins";
import { buildSearchDocs, search } from "../lib/search";

const lessons = getAllLessons();
const slugs = new Set(lessons.map((lesson) => lesson.slug));

describe("course content", () => {
  it("loads every lesson in order with a unique slug", () => {
    expect(lessons.length).toBeGreaterThanOrEqual(18);
    expect(slugs.size).toBe(lessons.length);
    expect(lessons.map((lesson) => lesson.number)).toEqual(lessons.map((_, index) => String(index + 1).padStart(2, "0")));
  });

  it("gives every lesson goals, a test, review cards, a summary and a glossary", () => {
    for (const lesson of lessons) {
      expect(lesson.goals.length, lesson.slug).toBeGreaterThan(0);
      expect(lesson.quiz.questions.length, lesson.slug).toBeGreaterThanOrEqual(4);
      expect(lesson.quiz.cards.length, lesson.slug).toBeGreaterThanOrEqual(4);
      const headings = extractToc(lesson.content).map((entry) => entry.text);
      expect(headings, lesson.slug).toContain("Ficha resumen");
      expect(headings, lesson.slug).toContain("Glosario");
    }
  });

  it("closes every code block and playground", () => {
    for (const lesson of lessons) {
      const fences = lesson.content.split("\n").filter((line) => /^\s*(?:>\s*)*```/.test(line));
      expect(fences.length % 2, lesson.slug).toBe(0);
    }
  });

  it("links only to lessons that exist", () => {
    const sources = [...lessons.map((lesson) => lesson.content), readReference("chuleta")];
    for (const source of sources) {
      for (const [, slug] of source.matchAll(/\]\(\/lecciones\/([a-z0-9-]+)/g)) expect(slugs, slug).toContain(slug);
    }
  });

  it("rejects a lesson whose answer points to a missing option", () => {
    const source = '---\ntitle: "X"\nsummary: "X"\npart: html\nminutes: 5\ngoals: ["X"]\nquiz:\n  - question: "X"\n    options: ["a", "b"]\n    correct: 2\n    explanation: "X"\n---\nTexto';
    expect(() => parseLesson("99-roto.md", source, 0)).toThrow(/opción que no existe/);
  });
});

describe("study tools", () => {
  it("builds the glossary from the lessons, filed by letter", () => {
    const terms = buildGlossary(lessons);
    expect(terms.length).toBeGreaterThan(80);
    const head = terms.find((entry) => entry.key === "<head>");
    expect(head?.letter).toBe("H");
    expect(head?.definitions[0].slug).toBe("tu-primera-pagina");
  });

  it("finds lessons, sections and glossary terms", () => {
    const docs = buildSearchDocs(lessons);
    const results = search(docs, "flexbox");
    expect(results[0].url).toBe("/lecciones/flexbox");
    expect(search(docs, "padding").some((result) => result.kind === "glosario")).toBe(true);
    expect(search(docs, "media query").some((result) => result.url.startsWith("/lecciones/responsive"))).toBe(true);
  });
});

describe("quiz options", () => {
  it("keeps the right answer when shuffling, and always shuffles the same way", () => {
    const question = { options: ["a", "b", "c", "d"], correct: 1 };
    const shuffled = shuffleOptions(question, "flexbox-p1");
    expect(shuffled.options[shuffled.correct]).toBe("b");
    expect([...shuffled.options].sort()).toEqual(["a", "b", "c", "d"]);
    expect(shuffleOptions(question, "flexbox-p1")).toEqual(shuffled);
  });

  it("spreads the right answers across the letters", () => {
    const counts = [0, 0, 0, 0];
    for (const lesson of lessons) for (const question of lesson.quiz.questions) counts[question.correct] += 1;
    const total = counts.reduce((sum, count) => sum + count, 0);
    for (const count of counts) expect(count / total).toBeLessThan(0.4);
  });
});
