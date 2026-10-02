import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock } from "@phosphor-icons/react/dist/ssr";

import { Header } from "../../../components/Header";
import { InlineText } from "../../../components/InlineText";
import { LessonView } from "../../../components/LessonView";
import { TypedHeading } from "../../../components/TypedHeading";
import { getAllLessons, getLesson, linkOf } from "../../../lib/lessons";
import { extractToc } from "../../../lib/markdown-plugins";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllLessons().map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lesson = getLesson((await params).slug);
  return lesson ? { title: `${lesson.number}. ${lesson.title}`, description: lesson.summary } : {};
}

export default async function LessonPage({ params }: Props) {
  const lesson = getLesson((await params).slug);
  if (!lesson) notFound();
  const lessons = getAllLessons();

  return (
    <div className="app-shell">
      <Header />
      <main className="main" id="contenido" tabIndex={-1}>
        <div className="container">
          <div className="page-head">
            <div>
              <p className="eyebrow">
                Parte {lesson.partNumber}: {lesson.part} · Lección {lesson.position + 1} de {lessons.length}
              </p>
              <TypedHeading text={`#${lesson.number} ${lesson.title}`} />
              <p className="page-intro">
                <InlineText text={lesson.summary} />{" "}
                <span className="badge">
                  <Clock aria-hidden size={14} weight="bold" /> {lesson.minutes} min
                </span>
              </p>
            </div>
          </div>
          <LessonView
            content={lesson.content}
            goals={lesson.goals}
            next={linkOf(lessons[lesson.position + 1])}
            previous={linkOf(lessons[lesson.position - 1])}
            quiz={lesson.quiz}
            slug={lesson.slug}
            toc={extractToc(lesson.content)}
          />
        </div>
      </main>
    </div>
  );
}
