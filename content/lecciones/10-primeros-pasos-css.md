---
title: "Primeros pasos con CSS"
summary: "Qué es una regla de CSS, cómo se escribe y las tres formas de conectar el estilo con tu HTML."
part: css
minutes: 30
goals:
  - "Leer y escribir una regla CSS: selector, propiedad y valor."
  - "Conectar CSS con HTML mediante un archivo externo y `<link>`."
  - "Entender qué es la cascada: qué pasa cuando dos reglas chocan."
quiz:
  - question: "En `p { color: red; }`, ¿qué es `color`?"
    options:
      - "El selector"
      - "La propiedad"
      - "El valor"
      - "La declaración completa"
    correct: 1
    explanation: "`p` es el selector (a quién), `color` la propiedad (qué cambias) y `red` el valor (cómo)."
  - question: "¿Cuál es la forma recomendada de añadir CSS a una web?"
    options:
      - "Con el atributo `style` en cada etiqueta"
      - "Con una etiqueta `<style>` en cada página"
      - "En un archivo `.css` aparte, enlazado con `<link>`"
      - "Dentro de los comentarios del HTML"
    correct: 2
    explanation: "Un archivo externo sirve para todas las páginas: cambias el estilo en un solo sitio."
  - question: "¿Dónde va la etiqueta `<link rel=\"stylesheet\" href=\"estilos.css\">`?"
    options:
      - "Al final del `<body>`"
      - "Dentro del `<head>`"
      - "Antes de `<!DOCTYPE html>`"
      - "Dentro de cada párrafo"
    correct: 1
    explanation: "Va en el `<head>`, porque el navegador necesita el estilo antes de dibujar la página."
  - question: "Hay dos reglas iguales en importancia para `h1`: primero `color: blue;` y después `color: green;`. ¿De qué color sale?"
    options:
      - "Azul"
      - "Verde"
      - "Una mezcla"
      - "Negro, porque hay conflicto"
    correct: 1
    explanation: "Es la cascada: con la misma importancia, gana la regla que aparece más tarde."
  - question: "¿Qué pasa si olvidas el punto y coma de una declaración?"
    options:
      - "Nada, es opcional siempre"
      - "Esa declaración y la siguiente pueden dejar de funcionar"
      - "Se borra el archivo"
      - "La página se queda en blanco"
    correct: 1
    explanation: "El navegador lee las dos como una sola declaración sin sentido y las ignora. Pon siempre `;` al final."
cards:
  - front: "Partes de una regla CSS"
    back: "`selector { propiedad: valor; }` — a quién, qué cambias y cómo."
  - front: "¿Qué es una declaración?"
    back: "Cada pareja `propiedad: valor;` dentro de las llaves."
  - front: "Enlazar una hoja de estilos"
    back: "`<link rel=\"stylesheet\" href=\"estilos.css\">` dentro del `<head>`."
  - front: "Tres formas de añadir CSS"
    back: "Externo con `<link>` (la buena), interno con `<style>` y en línea con el atributo `style`."
  - front: "La cascada en una frase"
    back: "Si dos reglas chocan con la misma importancia, gana la última."
  - front: "Herencia"
    back: "Algunas propiedades (color, fuente…) pasan de padres a hijos: si el `body` es gris, sus párrafos también."
  - front: "Comentario en CSS"
    back: "`/* esto es un comentario */`"
---

## De la estructura al estilo

Ya sabes construir páginas con HTML: títulos, párrafos, listas, imágenes, formularios… pero todas se ven igual de sosas, en negro sobre blanco y con la tipografía por defecto. Ha llegado el momento de **CSS** (*Cascading Style Sheets*, hojas de estilo en cascada), el lenguaje que decide **cómo se ve** cada cosa.

Recuerda la idea clave de la primera lección: HTML dice **qué es** cada cosa; CSS dice **cómo se ve**. Por eso son dos lenguajes distintos y, como verás, se escriben en archivos distintos.

## Anatomía de una regla

CSS se escribe en **reglas**. Cada regla dice «a estos elementos, cámbiales esto»:

```css
h1 {
  color: crimson;
  font-size: 48px;
}
```

| Parte | Qué es | En el ejemplo |
| --- | --- | --- |
| **Selector** | **A quién** se aplica | `h1`: a todos los `<h1>` |
| **Llaves** `{ }` | Encierran las instrucciones | |
| **Propiedad** | **Qué** cambias | `color`, `font-size` |
| **Valor** | **Cómo** lo cambias | `crimson`, `48px` |
| **Declaración** | Cada pareja `propiedad: valor;` | `color: crimson;` |

Fíjate en la puntuación: **dos puntos** entre propiedad y valor, y **punto y coma** al final de cada declaración.

```playground Tu primera regla
<h1>Hola, CSS</h1>
<p>Este párrafo todavía no tiene estilo.</p>
<!-- css -->
h1 {
  color: crimson;
  font-size: 48px;
}
```

> [!TIP]
> Ve a la pestaña CSS del ejemplo y añade una regla nueva para los párrafos: `p { color: gray; }`. Luego prueba a cambiar `48px` por `20px`. Así se aprende CSS: **cambiando valores y mirando qué pasa**.

## Tres formas de añadir CSS

### 1. En un archivo aparte (la buena)

Escribes el CSS en un archivo con extensión `.css`, por ejemplo `estilos.css`, y lo conectas al HTML con `<link>` dentro del `<head>`:

```text
mi-web/
├── index.html
└── estilos.css
```

```html
<head>
  <meta charset="UTF-8">
  <title>Mi web</title>
  <link rel="stylesheet" href="estilos.css">
</head>
```

- `rel="stylesheet"` dice que es una hoja de estilos.
- `href` es la **ruta** al archivo, igual que en los enlaces: relativa y desde la carpeta del HTML.

**Es la forma recomendada**: todas tus páginas comparten el mismo archivo, así que si cambias el color de los títulos, cambia en toda la web a la vez.

### 2. En la cabecera, con `<style>`

Puedes escribir CSS dentro de una etiqueta `<style>` en el `<head>`. Sirve para pruebas o páginas sueltas (de hecho, es lo que hacen por dentro las zonas de pruebas de este curso):

```html
<head>
  <style>
    h1 { color: crimson; }
  </style>
</head>
```

### 3. En la propia etiqueta, con `style`

El atributo `style` aplica estilo a un solo elemento:

```html
<p style="color: crimson;">Solo este párrafo.</p>
```

> [!WARNING]
> Evita el atributo `style`. Mezcla contenido y estilo, tienes que repetirlo en cada elemento y es difícil de cambiar después. Úsalo solo para pruebas rápidas.

## Las DevTools para CSS

Abre las herramientas de desarrollo (**F12** o clic derecho → **Inspeccionar**) sobre cualquier elemento. En el panel **Estilos** verás todas las reglas que le afectan. Puedes:

- Hacer clic en un valor y cambiarlo con las flechas del teclado.
- Desmarcar la casilla de una declaración para desactivarla.
- Ver tachadas las declaraciones que **no se están aplicando** porque otra regla gana.

Esto último es oro: cuando algo «no funciona» en CSS, casi siempre es porque otra regla le está ganando. Las DevTools te lo enseñan tachado.

## La cascada: cuando dos reglas chocan

La «C» de CSS significa **cascada**. Es el sistema que decide qué regla gana cuando varias quieren cambiar la misma propiedad del mismo elemento. La primera regla que debes conocer es muy simple: **con la misma importancia, gana la última**.

```playground ¿Quién gana?
<h1>¿De qué color soy?</h1>
<!-- css -->
h1 {
  color: blue;
}

h1 {
  color: green;
}
```

Sale verde, porque la segunda regla está después. En la siguiente lección verás que hay selectores «más importantes» que otros (eso se llama especificidad), pero esta idea ya te explica la mayoría de sorpresas.

## La herencia

Algunas propiedades **se heredan**: si se las pones a un elemento, se las pasan a todos sus hijos. Son sobre todo las del **texto**: `color`, `font-family`, `font-size`, `line-height`…

```playground Herencia
<article>
  <h2>Un artículo</h2>
  <p>Este párrafo no tiene ninguna regla propia, pero hereda el color y la tipografía del artículo.</p>
  <p>Este también. <strong>Y su strong.</strong></p>
</article>
<!-- css -->
article {
  color: darkslategray;
  font-family: Georgia, serif;
}
```

Por eso es habitual empezar el CSS dando estilo al `body`: la tipografía y el color que le pongas se aplicarán a toda la página.

> [!NOTE]
> Otras propiedades, como los bordes o los márgenes, **no se heredan**. Tendría poco sentido: si le pones un borde a un `<article>`, no quieres que cada párrafo de dentro tenga también el suyo.

## Comentarios en CSS

En CSS los comentarios se escriben entre `/*` y `*/`. Sirven para organizar el archivo por zonas:

```css
/* ===== Cabecera ===== */
header {
  background: black;
}

/* ===== Pie de página ===== */
footer {
  color: gray; /* también se pueden poner al final de una línea */
}
```

## Errores típicos

- **Olvidar el punto y coma**: la declaración siguiente también deja de funcionar.
- **Escribir `=` en lugar de `:`** (`color = red`), o comillas donde no van (`color: "red"`).
- **Ruta del `<link>` mal escrita**: el CSS no carga y la página sale sin estilo. Comprueba la ruta y el nombre del archivo.
- **Escribir CSS dentro del HTML sin `<style>`**: aparece como texto en la página.
- **Llaves sin cerrar**: todas las reglas de después dejan de funcionar. Una buena sangría ayuda a verlo.
- **Faltas de ortografía en inglés**: `colour`, `font-size: 20 px` (con espacio), `backround`. El navegador ignora lo que no entiende sin avisar. Las DevTools lo marcan con un triángulo amarillo.

## Ejercicios

### Ejercicio 1: encuentra los errores (fácil)

Este CSS tiene cuatro errores y por eso no funciona como debería. Encuéntralos y corrígelos.

```playground Ejercicio 1
<h1>Mi blog</h1>
<p>Bienvenida a mi blog.</p>
<!-- css -->
h1 {
  color = purple;
  font-size: 40 px
}

p {
  color: "gray";
  font-size: 20px;
```

> [!HINT] Pista
> Revisa: el signo entre propiedad y valor, los espacios dentro de los valores, los puntos y coma, las comillas y las llaves.

> [!HINT] Solución
> ```css
> h1 {
>   color: purple;
>   font-size: 40px;
> }
>
> p {
>   color: gray;
>   font-size: 20px;
> }
> ```

### Ejercicio 2: estilo a todo (fácil)

Escribe tres reglas: el `body` con la tipografía `sans-serif` y color `#333`; los `h1` de color `teal`; y los enlaces (`a`) de color `darkorange`.

```playground Ejercicio 2
<h1>Recetas fáciles</h1>
<p>Las mejores recetas para empezar a cocinar. Visita también <a href="#">mi canal</a>.</p>
<!-- css -->

```

> [!HINT] Pista
> La tipografía se cambia con `font-family`. Los selectores son `body`, `h1` y `a`.

> [!HINT] Solución
> ```css
> body {
>   font-family: sans-serif;
>   color: #333;
> }
>
> h1 {
>   color: teal;
> }
>
> a {
>   color: darkorange;
> }
> ```

### Ejercicio 3: tu proyecto con hoja de estilos (medio)

En la carpeta `mi-primera-web` de la lección 2, crea un archivo `estilos.css` con una regla que ponga el título en tu color favorito. Enlázalo desde `index.html` y comprueba en el navegador que funciona.

> [!HINT] Pista
> El `<link>` va dentro del `<head>`. Si no tienes `<head>`, usa el esqueleto completo de la lección 3.

> [!HINT] Solución
> ```html
> <!-- index.html -->
> <head>
>   <meta charset="UTF-8">
>   <title>Mi primera web</title>
>   <link rel="stylesheet" href="estilos.css">
> </head>
> ```
>
> ```css
> /* estilos.css */
> h1 {
>   color: mediumvioletred;
> }
> ```
>
> Si no funciona, inspecciona el título con las DevTools: si no aparece tu regla, el archivo no se está cargando (revisa el nombre y la ruta).

## Ficha resumen

- Regla CSS: `selector { propiedad: valor; }`. Dos puntos entre propiedad y valor; punto y coma al final.
- Lo recomendado: CSS en un **archivo `.css`**, enlazado en el `<head>` con `<link rel="stylesheet" href="estilos.css">`.
- **Cascada**: si dos reglas chocan con la misma importancia, gana la última.
- **Herencia**: las propiedades del texto pasan de padres a hijos. Empieza dando estilo al `body`.
- Comentarios: `/* … */`. Las DevTools muestran tachado lo que no se aplica.

## Glosario

| Término | Definición |
| --- | --- |
| Regla CSS | Bloque formado por un selector y sus declaraciones entre llaves. |
| Selector | Parte de la regla que indica a qué elementos se aplica. |
| Propiedad | Lo que se cambia de un elemento, como `color` o `font-size`. |
| Valor | Cómo se cambia una propiedad, como `red` o `20px`. |
| Declaración | Pareja `propiedad: valor;` dentro de una regla. |
| Hoja de estilos | Archivo `.css` con las reglas de estilo de una web. |
| `<link>` | Etiqueta del `<head>` que conecta una hoja de estilos con la página. |
| Cascada | Sistema que decide qué regla gana cuando varias afectan a la misma propiedad de un elemento. |
| Herencia | Paso automático de algunas propiedades, como el color del texto, de un elemento a sus hijos. |
