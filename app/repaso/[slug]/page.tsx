import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Header } from "../../../components/Header";
import { QuizRunner } from "../../../components/QuizRunner";
import { TypedHeading } from "../../../components/TypedHeading";
import { getAllLessons, getLesson } from "../../../lib/lessons";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllLessons()
    .filter((lesson) => lesson.quiz.questions.length || lesson.quiz.cards.length)
    .map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lesson = getLesson((await params).slug);
  return { title: lesson ? `Repaso: ${lesson.title}` : "Repaso" };
}

export default async function LessonReviewPage({ params }: Props) {
  const lesson = getLesson((await params).slug);
  if (!lesson) notFound();

  return (
    <div className="app-shell">
      <Header />
      <main className="main" id="contenido" tabIndex={-1}>
        <div className="container">
          <div className="page-head">
            <div>
              <p className="eyebrow">
                Repaso · Lección {lesson.number}
              </p>
              <TypedHeading text={`#${lesson.title}`} />
              <p className="page-intro">
                ¿Algo no te sale? <Link href={`/lecciones/${lesson.slug}`}>Vuelve a la lección</Link> y repasa ese apartado.
              </p>
            </div>
          </div>
          <QuizRunner quiz={lesson.quiz} slug={lesson.slug} />
        </div>
      </main>
    </div>
  );
}
