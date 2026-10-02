import { Header } from "../../components/Header";
import { LessonContents } from "../../components/LessonContents";
import { TypedHeading } from "../../components/TypedHeading";
import { getAllLessons, lessonsByPart } from "../../lib/lessons";

export const metadata = {
  title: "Lecciones",
};

export default function LessonsPage() {
  const parts = lessonsByPart(getAllLessons());

  return (
    <div className="app-shell">
      <Header />
      <main className="main" id="contenido" tabIndex={-1}>
        <div className="container">
          <div className="page-head">
            <div>
              <p className="eyebrow">El curso</p>
              <TypedHeading accent="del curso" text="#Lecciones" />
              <p className="page-intro">
                Síguelas en orden: cada lección usa solo lo que ya has visto en las anteriores. Lee, toca los ejemplos, haz los
                ejercicios y comprueba lo aprendido con el test del final.
              </p>
            </div>
          </div>
          <LessonContents parts={parts} />
        </div>
      </main>
    </div>
  );
}
