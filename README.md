# HTML y CSS desde cero

Curso web de HTML y CSS para principiantes absolutos (nivel 0). Hecho con la misma base y el mismo diseño que la web de apuntes del bootcamp (`apuntes-upgrade`), pero sin login, sin IA y sin base de datos: todo el contenido está escrito a mano en Markdown y el progreso de cada persona se guarda en su navegador.

## Qué incluye

- **18 lecciones** en 5 partes, de «qué es una página web» al proyecto final publicado:
  1. Antes de empezar: qué es una web y tu kit de trabajo.
  2. HTML: primera página, textos, listas y enlaces, imágenes, estructura semántica, tablas y formularios.
  3. CSS: primeros pasos, selectores, colores y tipografía, modelo de caja.
  4. Maquetar: `display`, Flexbox, Grid y diseño responsive.
  5. Proyecto final: una página personal paso a paso, con lista de revisión y publicación.
- **Zonas de pruebas** dentro de cada lección: editor de HTML y CSS con el resultado al lado, que se actualiza al escribir. Los formularios no se envían: la vista previa enseña los datos que se mandarían.
- **Ejercicios** de dificultad creciente con pistas y solución plegadas, **errores típicos**, **ficha resumen** y **glosario** en cada lección.
- **Test** al final de cada lección y **tarjetas de repaso** con repetición espaciada (`/repaso`).
- **Zona de práctica** (`/practica`): editor libre con plantillas, que guarda el código en el navegador y lo descarga como `index.html`.
- **Glosario** (`/glosario`) generado a partir de las tablas «Glosario» de las lecciones, y **chuleta** (`/chuleta`) con las etiquetas y propiedades del curso.
- **Buscador** (botón «Buscar» o Ctrl/Cmd + K) en lecciones, apartados y glosario.
- Progreso («Marcar como estudiada») guardado en el navegador de cada persona.

## Puesta en marcha

```bash
npm install
npm run dev
```

## Comandos

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

Todas las páginas se generan de forma estática en el `build`, así que se puede desplegar en Vercel sin variables de entorno.

## Escribir o cambiar una lección

Cada lección es un archivo `content/lecciones/NN-slug.md`. El número fija el orden y el resto del nombre es la dirección (`/lecciones/slug`).

```markdown
---
title: "Título de la lección"
summary: "Una frase que resume la lección."
part: html            # empezar | html | css | maquetar | proyecto (ver lib/course.ts)
minutes: 30
goals:
  - "Lo que sabrás hacer al terminar."
quiz:
  - question: "¿Pregunta?"
    options: ["A", "B", "C", "D"]
    correct: 1        # índice de la opción correcta (se barajan al mostrarlas)
    explanation: "Por qué es esa."
cards:
  - front: "Anverso de la tarjeta"
    back: "Reverso"
---

## Primer apartado
```

Dentro del Markdown se pueden usar:

- **Avisos**: `> [!NOTE]`, `> [!TIP]`, `> [!IMPORTANT]`, `> [!WARNING]`, `> [!CAUTION]`.
- **Pistas y soluciones plegadas**: `> [!HINT] Pista 1`.
- **Zonas de pruebas**: un bloque de código con el lenguaje `playground` y, opcionalmente, un título. Lo que va antes de `<!-- css -->` es el HTML y lo que va después, el CSS:

  ````markdown
  ```playground Mi ejemplo
  <h1>Hola</h1>
  <!-- css -->
  h1 { color: tomato; }
  ```
  ````

- **Glosario**: una sección `## Glosario` con una tabla `| Término | Definición |` alimenta la página del glosario y el buscador.

Los tests (`npm test`) comprueban que cada lección tiene objetivos, test, tarjetas, ficha resumen y glosario, que los bloques de código están cerrados y que los enlaces internos apuntan a lecciones que existen.
