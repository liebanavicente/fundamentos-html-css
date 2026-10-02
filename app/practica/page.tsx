import { Header } from "../../components/Header";
import { PracticeArea } from "../../components/PracticeArea";
import { TypedHeading } from "../../components/TypedHeading";

export const metadata = {
  title: "Práctica",
};

export default function PracticePage() {
  return (
    <div className="app-shell">
      <Header />
      <main className="main" id="contenido" tabIndex={-1}>
        <div className="container">
          <div className="page-head">
            <div>
              <p className="eyebrow">Practicar</p>
              <TypedHeading accent="de práctica" text="#Zona" />
              <p className="page-intro">
                Tu cuaderno de pruebas: escribe HTML y CSS y mira el resultado al momento. Aquí no se rompe nada, así que
                experimenta todo lo que quieras.
              </p>
            </div>
          </div>
          <PracticeArea />
        </div>
      </main>
    </div>
  );
}
