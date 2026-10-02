"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, Circle, Exam, Target } from "@phosphor-icons/react";

import type { LessonLink, Quiz } from "../lib/lessons";
import { MarkdownRenderer } from "../lib/markdown";
import type { TocEntry } from "../lib/markdown-plugins";
import { useStudiedLessons } from "../lib/use-study-progress";
import { InlineText } from "./InlineText";
import { QuizRunner } from "./QuizRunner";
import { TableOfContents } from "./TableOfContents";

export function LessonView({
  slug,
  content,
  toc,
  goals,
  quiz,
  previous,
  next,
}: {
  slug: string;
  content: string;
  toc: TocEntry[];
  goals: string[];
  quiz: Quiz;
  previous: LessonLink | null;
  next: LessonLink | null;
}) {
  const [studied, toggleStudied] = useStudiedLessons();
  const isStudied = studied.includes(slug);
  const entries: TocEntry[] = quiz.questions.length ? [...toc, { id: "comprueba", text: "Comprueba lo aprendido", level: 2 }] : toc;

  return (
    <div className="article-layout">
      <div className="task-main">
        <aside className="callout callout-important lesson-goals" data-callout="En esta lección vas a aprender">
          <ul>
            {goals.map((goal) => (
              <li key={goal}>
                <InlineText text={goal} />
              </li>
            ))}
          </ul>
        </aside>

        <MarkdownRenderer content={content} storageKey={`leccion:${slug}`} />

        {quiz.questions.length ? (
          <section aria-labelledby="comprueba" className="lesson-quiz">
            <h2 id="comprueba">
              <Exam aria-hidden size={24} weight="bold" /> Comprueba lo que has aprendido
            </h2>
            <p className="muted">Responde sin mirar arriba. Si fallas alguna, la explicación te dice por qué.</p>
            <QuizRunner only="test" quiz={quiz} slug={slug} />
          </section>
        ) : null}

        <div className="task-solution-gate">
          <div>
            <strong>{isStudied ? "Lección estudiada" : "¿Lo tienes claro?"}</strong>
            <p className="muted">
              {isStudied
                ? "Vuelve cuando quieras: las tarjetas de repaso y la ficha resumen son lo más rápido para refrescarla."
                : "Si has hecho los ejercicios y aciertas el test, márcala como estudiada y pasa a la siguiente."}
            </p>
          </div>
          <button aria-pressed={isStudied} className="button" onClick={() => toggleStudied(slug)} type="button">
            {isStudied ? <CheckCircle aria-hidden size={18} weight="fill" /> : <Circle aria-hidden size={18} weight="bold" />}
            {isStudied ? " Estudiada" : " Marcar como estudiada"}
          </button>
        </div>

        <nav aria-label="Lecciones" className="topic-pager">
          {previous ? (
            <Link className="button" href={`/lecciones/${previous.slug}`}>
              <ArrowLeft aria-hidden size={18} weight="bold" /> {previous.number}. {previous.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link className="button primary" href={`/lecciones/${next.slug}`}>
              {next.number}. {next.title} <ArrowRight aria-hidden size={18} weight="bold" />
            </Link>
          ) : null}
        </nav>
      </div>

      <aside className="panel article-aside task-aside">
        {entries.length >= 3 ? <TableOfContents entries={entries} /> : null}
        <div className="class-list">
          {quiz.cards.length ? (
            <Link className="button" href={`/repaso/${slug}`}>
              <Target aria-hidden size={18} weight="bold" /> Repasar con tarjetas
            </Link>
          ) : null}
          <Link className="button" href="/practica">
            Abrir la zona de práctica
          </Link>
          <Link className="button" href="/lecciones">
            Índice del curso
          </Link>
        </div>
      </aside>
    </div>
  );
}
