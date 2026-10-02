"use client";

import { useStudiedLessons } from "../lib/use-study-progress";

export function ProgressSummary({ slugs }: { slugs: string[] }) {
  const [studied] = useStudiedLessons();
  const done = slugs.filter((slug) => studied.includes(slug)).length;
  const percentage = slugs.length ? Math.round((done / slugs.length) * 100) : 0;

  return (
    <section className="panel">
      <p className="muted">Tu progreso</p>
      <h2>
        {done} / {slugs.length} lecciones estudiadas
      </h2>
      <p className="progress-value">{percentage}%</p>
      {/* Native element for assistive tech; the bar next to it is only the animated picture. */}
      <progress aria-label={`${percentage}% completado`} className="visually-hidden" max="100" value={percentage} />
      <div aria-hidden className="progress-bar">
        <span style={{ width: `${percentage}%` }} />
      </div>
      <p className="muted">Se guarda en este navegador</p>
    </section>
  );
}
