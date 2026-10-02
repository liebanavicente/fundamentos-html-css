export const COURSE_NAME = "HTML y CSS desde cero";
export const COURSE_TAGLINE = "Curso para principiantes · Nivel 0";

/** The course goes in this order: each part relies only on the ones before it. */
export const COURSE_PARTS = [
  { id: "empezar", title: "Antes de empezar" },
  { id: "html", title: "HTML: la estructura" },
  { id: "css", title: "CSS: el estilo" },
  { id: "maquetar", title: "Maquetar páginas" },
  { id: "proyecto", title: "Tu primer proyecto" },
] as const;

export type PartId = (typeof COURSE_PARTS)[number]["id"];
