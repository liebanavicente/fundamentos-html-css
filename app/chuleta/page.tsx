import { Header } from "../../components/Header";
import { StudyTabs } from "../../components/StudyTabs";
import { TableOfContents } from "../../components/TableOfContents";
import { TypedHeading } from "../../components/TypedHeading";
import { readReference } from "../../lib/lessons";
import { MarkdownRenderer } from "../../lib/markdown";
import { extractToc } from "../../lib/markdown-plugins";

export const metadata = {
  title: "Chuleta",
};

export default function CheatSheetPage() {
  const content = readReference("chuleta");

  return (
    <div className="app-shell">
      <Header />
      <main className="main" id="contenido" tabIndex={-1}>
        <div className="container">
          <div className="page-head">
            <div>
              <p className="eyebrow">Repasar</p>
              <TypedHeading accent="de HTML y CSS" text="#Chuleta" />
              <p className="page-intro">
                Las etiquetas y propiedades del curso en una sola página, para tenerla abierta mientras practicas.
              </p>
            </div>
            <StudyTabs current="/chuleta" />
          </div>
          <div className="article-layout">
            <MarkdownRenderer content={content} />
            <aside className="panel article-aside">
              <TableOfContents entries={extractToc(content)} />
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
