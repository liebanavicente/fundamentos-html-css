import Link from "next/link";

import { FeatureRotator } from "../components/FeatureRotator";
import { Header } from "../components/Header";
import { HeroBalls } from "../components/HeroBalls";
import { NextLesson } from "../components/NextLesson";
import { ProgressSummary } from "../components/ProgressSummary";
import { TypedHeading } from "../components/TypedHeading";
import { COURSE_TAGLINE } from "../lib/course";
import { getAllLessons, lessonsByPart } from "../lib/lessons";

export default function Home() {
  const lessons = getAllLessons();
  const parts = lessonsByPart(lessons);
  const hours = Math.round(lessons.reduce((total, lesson) => total + lesson.minutes, 0) / 60);
  const exercises = lessons.reduce((total, lesson) => total + (lesson.content.match(/^### Ejercicio/gm)?.length ?? 0), 0);

  return (
    <div className="app-shell">
      <Header />
      <main className="main" id="contenido" tabIndex={-1}>
        <div className="container">
          <div className="page-head hero">
            <div>
              <p className="eyebrow">{COURSE_TAGLINE}</p>
              <TypedHeading accent="desde cero" text="#HTML y CSS" />
              <p className="page-intro">
                No necesitas saber nada de programación. Lecciones cortas, ejemplos que editas y ves cambiar al momento, y
                ejercicios con pistas hasta que construyas tu primera web.
              </p>
            </div>
            <div className="nav">
              <Link className="button primary" href="/lecciones">
                Ver las lecciones
              </Link>
              <Link className="button" href="/practica">
                Abrir la zona de práctica
              </Link>
            </div>
            <HeroBalls />
          </div>

          <div className="grid dashboard-grid">
            <ProgressSummary slugs={lessons.map((lesson) => lesson.slug)} />
            <NextLesson lessons={lessons.map(({ slug, number, title, summary }) => ({ slug, number, title, summary }))} />
            <section className="panel">
              <p className="muted">El curso</p>
              <h2>
                {lessons.length} lecciones en {parts.length} partes
              </h2>
              <ul className="course-facts">
                <li>
                  <strong>~{hours} h</strong> a tu ritmo
                </li>
                <li>
                  <strong>{exercises}</strong> ejercicios con pistas y solución
                </li>
                <li>
                  <strong>Test</strong> y tarjetas de repaso en cada lección
                </li>
              </ul>
            </section>
          </div>

          <section className="home-feature">
            <FeatureRotator />
          </section>

          <section className="home-path" aria-labelledby="ruta">
            <h2 id="ruta">La ruta</h2>
            <ol>
              {parts.map((part, index) => (
                <li key={part.title}>
                  <span className="step-mark">{index + 1}</span>
                  <div>
                    <strong>{part.title}</strong>
                    <span className="muted">{part.lessons.map((lesson) => lesson.title).join(" · ")}</span>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </main>
    </div>
  );
}
