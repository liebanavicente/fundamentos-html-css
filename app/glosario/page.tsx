import { GlossaryView } from "../../components/GlossaryView";
import { Header } from "../../components/Header";
import { StudyTabs } from "../../components/StudyTabs";
import { TypedHeading } from "../../components/TypedHeading";
import { buildGlossary } from "../../lib/glossary";
import { getAllLessons } from "../../lib/lessons";

export const metadata = {
  title: "Glosario",
};

export default function GlossaryPage() {
  const terms = buildGlossary(getAllLessons());

  return (
    <div className="app-shell">
      <Header />
      <main className="main" id="contenido" tabIndex={-1}>
        <div className="container">
          <div className="page-head">
            <div>
              <p className="eyebrow">Repasar</p>
              <TypedHeading accent="del curso" text="#Glosario" />
              <p className="page-intro">
                Las palabras nuevas de cada lección, en un solo sitio y en lenguaje sencillo. Cada definición enlaza a la
                lección donde se explica.
              </p>
            </div>
            <StudyTabs current="/glosario" />
          </div>
          <GlossaryView terms={terms} />
        </div>
      </main>
    </div>
  );
}
