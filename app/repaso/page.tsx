import { Header } from "../../components/Header";
import { ReviewList } from "../../components/ReviewList";
import { StudyTabs } from "../../components/StudyTabs";
import { TypedHeading } from "../../components/TypedHeading";
import { getAllLessons } from "../../lib/lessons";

export const metadata = {
  title: "Repaso",
};

export default function ReviewPage() {
  const lessons = getAllLessons()
    .filter((lesson) => lesson.quiz.questions.length || lesson.quiz.cards.length)
    .map(({ slug, number, title }) => ({ slug, number, title }));

  return (
    <div className="app-shell">
      <Header />
      <main className="main" id="contenido" tabIndex={-1}>
        <div className="container">
          <div className="page-head">
            <div>
              <p className="eyebrow">Repasar</p>
              <TypedHeading accent="y tarjetas" text="#Tests" />
              <p className="page-intro">
                Un test y unas tarjetas por lección. Las tarjetas vuelven justo cuando estás a punto de olvidarlas: lo que
                aciertas, más tarde; lo que fallas, enseguida.
              </p>
            </div>
            <StudyTabs current="/repaso" />
          </div>
          <ReviewList lessons={lessons} />
        </div>
      </main>
    </div>
  );
}
