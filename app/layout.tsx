import type { Metadata } from "next";

import "@fontsource-variable/archivo";
import "@fontsource/instrument-serif/400-italic.css";
import "highlight.js/styles/github-dark.css";
import "./globals.css";

import { COURSE_NAME } from "../lib/course";

export const metadata: Metadata = {
  title: {
    default: COURSE_NAME,
    template: `%s | ${COURSE_NAME}`,
  },
  description: "Curso de HTML y CSS para principiantes absolutos: lecciones cortas, ejemplos que puedes editar, ejercicios con pistas y repaso.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        {/* Soft coral patches spread down the page so every section has some colour behind its glass. */}
        <div aria-hidden className="ambient">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        {children}
      </body>
    </html>
  );
}
