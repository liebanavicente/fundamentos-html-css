"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Clock } from "@phosphor-icons/react";

import { useStudiedLessons } from "../lib/use-study-progress";
import { InlineText } from "./InlineText";

export type ContentsLesson = { slug: string; number: string; title: string; summary: string; minutes: number };
export type ContentsPart = { title: string; lessons: ContentsLesson[] };

/** The course index: every lesson by part, with each reader's own progress. */
export function LessonContents({ parts }: { parts: ContentsPart[] }) {
  const [studied] = useStudiedLessons();
  const lessons = parts.flatMap((part) => part.lessons);
  const done = lessons.filter((lesson) => studied.includes(lesson.slug)).length;
  const next = lessons.find((lesson) => !studied.includes(lesson.slug));
  const minutesLeft = lessons.filter((lesson) => !studied.includes(lesson.slug)).reduce((total, lesson) => total + lesson.minutes, 0);

  return (
    <div className="manual">
      <section className="manual-progress" aria-label="Tu progreso">
        <div>
          <strong>
            {done} de {lessons.length} lecciones estudiadas
          </strong>
          <div aria-hidden className="manual-bar">
            <span style={{ width: `${(done / lessons.length) * 100}%` }} />
          </div>
          {minutesLeft ? <span className="muted manual-left">Te quedan unas {Math.round(minutesLeft / 60)} horas de curso</span> : null}
        </div>
        {next ? (
          <Link className="button primary" href={`/lecciones/${next.slug}`}>
            {done ? "Continuar" : "Empezar"}: {next.number}. {next.title} <ArrowRight aria-hidden size={18} weight="bold" />
          </Link>
        ) : (
          <span className="badge task-ready">¡Curso completado!</span>
        )}
      </section>

      {parts.map((part, index) => (
        <section className="manual-part" key={part.title}>
          <h2>
            <span className="muted">Parte {index + 1}</span> {part.title}
          </h2>
          <ol className="task-list">
            {part.lessons.map((lesson) => {
              const isStudied = studied.includes(lesson.slug);
              return (
                <li key={lesson.slug}>
                  <Link className="task-card manual-chapter" href={`/lecciones/${lesson.slug}`}>
                    <span className="step-mark" aria-hidden="true">
                      {isStudied ? <CheckCircle size={20} weight="fill" /> : lesson.number}
                    </span>
                    <span className="task-card-copy">
                      <strong>{lesson.title}</strong>
                      <span className="muted">
                        <InlineText text={lesson.summary} />
                      </span>
                    </span>
                    <span className="manual-badges">
                      <span className="badge">
                        <Clock aria-hidden size={14} weight="bold" /> {lesson.minutes} min
                      </span>
                      {isStudied ? <span className="badge task-ready">Estudiada</span> : null}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </div>
  );
}
