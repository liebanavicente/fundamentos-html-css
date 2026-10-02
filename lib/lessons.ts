import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { z } from "zod";

import { COURSE_PARTS } from "./course";
import { type NoteSection, splitSections } from "./markdown-plugins";

const LESSONS_DIR = path.join(process.cwd(), "content", "lecciones");

const frontmatterSchema = z.object({
  title: z.string(),
  summary: z.string(),
  part: z.enum(COURSE_PARTS.map((part) => part.id) as [string, ...string[]]),
  minutes: z.number().int().positive(),
  goals: z.array(z.string()).min(1),
  quiz: z
    .array(
      z.object({
        question: z.string(),
        options: z.array(z.string()).min(2),
        correct: z.number().int().nonnegative(),
        explanation: z.string(),
      }),
    )
    .default([]),
  cards: z.array(z.object({ front: z.string(), back: z.string() })).default([]),
});

export type QuizQuestion = { id: string; question: string; options: string[]; correct: number; explanation: string };
export type Flashcard = { id: string; front: string; back: string };
export type Quiz = { questions: QuizQuestion[]; cards: Flashcard[] };

export type Lesson = {
  slug: string;
  /** "07": the position in the course, from the file name. */
  number: string;
  position: number;
  title: string;
  summary: string;
  partId: string;
  part: string;
  partNumber: number;
  minutes: number;
  goals: string[];
  quiz: Quiz;
  content: string;
  sections: NoteSection[];
};

export type LessonLink = Pick<Lesson, "slug" | "number" | "title">;

/** Small deterministic generator (mulberry32): the same lesson always gets the same order. */
function seededRandom(text: string) {
  let seed = 0;
  for (const char of text) seed = (Math.imul(seed, 31) + char.charCodeAt(0)) | 0;
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let value = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value;
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Lessons are written with the right answer wherever it reads best, which tends to be the same
 * letter. Shuffling the options (stably, so server and browser agree) removes that pattern.
 */
export function shuffleOptions(question: { options: string[]; correct: number }, seed: string) {
  const random = seededRandom(seed);
  const order = question.options.map((_, index) => index);
  for (let index = order.length - 1; index > 0; index -= 1) {
    const other = Math.floor(random() * (index + 1));
    [order[index], order[other]] = [order[other], order[index]];
  }
  return { options: order.map((index) => question.options[index]), correct: order.indexOf(question.correct) };
}

/** `07-modelo-de-caja.md` → number "07", slug "modelo-de-caja". */
const FILE_PATTERN = /^(\d{2})-([a-z0-9-]+)\.md$/;

export function parseLesson(fileName: string, source: string, position: number): Lesson {
  const match = fileName.match(FILE_PATTERN);
  if (!match) throw new Error(`Nombre de lección no válido: ${fileName} (usa NN-slug.md)`);
  const { data, content } = matter(source);
  const parsed = frontmatterSchema.safeParse(data);
  if (!parsed.success) throw new Error(`Frontmatter no válido en ${fileName}: ${parsed.error.message}`);
  const meta = parsed.data;
  const partIndex = COURSE_PARTS.findIndex((part) => part.id === meta.part);
  for (const [index, question] of meta.quiz.entries()) {
    if (question.correct >= question.options.length) {
      throw new Error(`${fileName}: la pregunta ${index + 1} marca como correcta una opción que no existe`);
    }
  }
  const [, number, slug] = match;
  return {
    slug,
    number,
    position,
    title: meta.title,
    summary: meta.summary,
    partId: meta.part,
    part: COURSE_PARTS[partIndex].title,
    partNumber: partIndex + 1,
    minutes: meta.minutes,
    goals: meta.goals,
    quiz: {
      questions: meta.quiz.map((question, index) => {
        const id = `${slug}-p${index + 1}`;
        return { id, question: question.question, explanation: question.explanation, ...shuffleOptions(question, id) };
      }),
      cards: meta.cards.map((card, index) => ({ id: `${slug}-t${index + 1}`, ...card })),
    },
    content: content.trim(),
    sections: splitSections(content),
  };
}

let cache: Lesson[] | null = null;

/** Every lesson in course order (the number in its file name). */
export function getAllLessons(): Lesson[] {
  if (cache && process.env.NODE_ENV === "production") return cache;
  const files = fs
    .readdirSync(LESSONS_DIR)
    .filter((file) => file.endsWith(".md"))
    .sort();
  cache = files.map((file, index) => parseLesson(file, fs.readFileSync(path.join(LESSONS_DIR, file), "utf8"), index));
  return cache;
}

export function getLesson(slug: string) {
  return getAllLessons().find((lesson) => lesson.slug === slug) ?? null;
}

export const linkOf = (lesson: Lesson | undefined): LessonLink | null =>
  lesson ? { slug: lesson.slug, number: lesson.number, title: lesson.title } : null;

/** Lessons grouped by part, in course order, for the contents page. */
export function lessonsByPart(lessons: Lesson[]) {
  return COURSE_PARTS.map((part) => ({
    title: part.title,
    lessons: lessons
      .filter((lesson) => lesson.partId === part.id)
      .map(({ slug, number, title, summary, minutes }) => ({ slug, number, title, summary, minutes })),
  })).filter((part) => part.lessons.length);
}

export function readReference(name: string) {
  return fs.readFileSync(path.join(process.cwd(), "content", `${name}.md`), "utf8");
}
