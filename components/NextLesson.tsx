"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

import type { LessonLink } from "../lib/lessons";
import { useStudiedLessons } from "../lib/use-study-progress";
import { InlineText } from "./InlineText";

/** Where to pick up: the first lesson this reader has not marked as studied. */
export function NextLesson({ lessons }: { lessons: Array<LessonLink & { summary: string }> }) {
  const [studied] = useStudiedLessons();
  const next = lessons.find((lesson) => !studied.includes(lesson.slug));
  const started = lessons.some((lesson) => studied.includes(lesson.slug));

  return (
    <section className="panel">
      <p className="muted">{started ? "Continúa donde lo dejaste" : "Empieza por aquí"}</p>
      {next ? (
        <>
          <h2>
            <Link href={`/lecciones/${next.slug}`}>
              {next.number}. {next.title}
            </Link>
          </h2>
          <p>
            <InlineText text={next.summary} />
          </p>
          <Link className="button primary" href={`/lecciones/${next.slug}`}>
            {started ? "Continuar" : "Empezar el curso"} <ArrowRight aria-hidden size={18} weight="bold" />
          </Link>
        </>
      ) : (
        <>
          <h2>¡Has terminado el curso!</h2>
          <p>Repasa con las tarjetas o lánzate a un proyecto nuevo en la zona de práctica.</p>
        </>
      )}
    </section>
  );
}
