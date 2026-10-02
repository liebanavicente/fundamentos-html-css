---
title: "La estructura de una página"
summary: "Cabecera, menú, contenido principal, secciones y pie: organiza tu página con etiquetas que dicen qué es cada parte."
part: html
minutes: 30
goals:
  - "Entender qué significa HTML semántico y por qué importa."
  - "Usar `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` y `<footer>`."
  - "Saber cuándo usar `<div>` y `<span>`, las cajas sin significado."
quiz:
  - question: "¿Qué significa que HTML sea «semántico»?"
    options:
      - "Que se ve más bonito"
      - "Que cada etiqueta dice qué es su contenido"
      - "Que funciona sin Internet"
      - "Que está escrito en español"
    correct: 1
    explanation: "Semántica es el significado. Una etiqueta semántica como `<nav>` dice «esto es la navegación»; un `<div>` no dice nada."
  - question: "¿Cuántos `<main>` visibles debería tener una página?"
    options:
      - "Uno"
      - "Dos: uno arriba y otro abajo"
      - "Uno por sección"
      - "Ninguno"
    correct: 0
    explanation: "`<main>` es el contenido principal y único de la página. Solo hay uno."
  - question: "Un post de un blog que tendría sentido por sí solo, aunque lo compartieras suelto, es un…"
    options:
      - "`<section>`"
      - "`<aside>`"
      - "`<article>`"
      - "`<nav>`"
    correct: 2
    explanation: "`<article>` es un contenido independiente: un post, una noticia, una ficha de producto, un comentario…"
  - question: "¿Qué etiqueta usas para agrupar elementos solo para darles estilo, sin significado?"
    options:
      - "`<section>`"
      - "`<div>`"
      - "`<main>`"
      - "`<group>`"
    correct: 1
    explanation: "`<div>` es una caja genérica. Úsala cuando ninguna etiqueta semántica encaje."
  - question: "¿Qué diferencia hay entre `<div>` y `<span>`?"
    options:
      - "Ninguna"
      - "`<div>` es una caja de bloque; `<span>` va dentro de una línea de texto"
      - "`<span>` es más moderno"
      - "`<div>` solo funciona con CSS"
    correct: 1
    explanation: "`<div>` ocupa todo el ancho, como un párrafo. `<span>` marca un trozo de texto sin cortar la línea."
cards:
  - front: "`<header>`"
    back: "Cabecera de la página o de una sección: logo, título, a veces el menú."
  - front: "`<nav>`"
    back: "Bloque de enlaces de navegación principal (el menú)."
  - front: "`<main>`"
    back: "El contenido principal de la página. Solo uno."
  - front: "`<section>`"
    back: "Una parte temática de la página, normalmente con su propio encabezado."
  - front: "`<article>`"
    back: "Contenido independiente que tendría sentido por sí solo: post, noticia, producto, comentario."
  - front: "`<aside>`"
    back: "Contenido relacionado pero secundario: barra lateral, notas, publicidad."
  - front: "`<footer>`"
    back: "Pie de la página o de una sección: créditos, contacto, enlaces legales."
  - front: "`<div>` y `<span>`"
    back: "Cajas sin significado. `<div>` de bloque, `<span>` dentro del texto. Úsalas cuando nada más encaje."
---

## Las páginas tienen partes

Fíjate en casi cualquier web: arriba hay una **cabecera** con el logo y un **menú**; en el centro, el **contenido principal**; a veces una **barra lateral**; y abajo, un **pie** con datos de contacto. Es tan habitual que HTML tiene una etiqueta para cada parte:

```text
┌──────────────────────────────────┐
│ <header>  logo + <nav> menú      │
├────────────────────────┬─────────┤
│ <main>                 │ <aside> │
│   <section> / <article>│ lateral │
│   <section> / <article>│         │
├────────────────────────┴─────────┤
│ <footer>  contacto, créditos     │
└──────────────────────────────────┘
```

| Etiqueta | Qué es |
| --- | --- |
| `<header>` | Cabecera: logo, título y a menudo el menú. |
| `<nav>` | La navegación: el grupo de enlaces principal. |
| `<main>` | El contenido principal. **Solo uno por página.** |
| `<section>` | Una parte temática, normalmente con su encabezado (`<h2>`…). |
| `<article>` | Un contenido que se entiende solo: un post, una noticia, un producto. |
| `<aside>` | Contenido secundario o complementario: una barra lateral, una nota. |
| `<footer>` | Pie: contacto, redes, avisos legales. |

## Una página con estructura

Así se combinan. Lee el código con calma: es la forma de casi todas las páginas que harás.

```playground Página con estructura semántica
<header>
  <h1>Café Aroma</h1>
  <nav>
    <ul>
      <li><a href="#carta">Carta</a></li>
      <li><a href="#horario">Horario</a></li>
    </ul>
  </nav>
</header>

<main>
  <section id="carta">
    <h2>Nuestra carta</h2>
    <article>
      <h3>Café con leche</h3>
      <p>Café de Colombia con leche cremosa. 1,80 €</p>
    </article>
    <article>
      <h3>Tostada con tomate</h3>
      <p>Pan de pueblo, tomate rallado y aceite. 2,50 €</p>
    </article>
  </section>

  <section id="horario">
    <h2>Horario</h2>
    <p>Todos los días, de 8:00 a 20:00.</p>
  </section>

  <aside>
    <p><strong>¿Sabías que…?</strong> Tostamos nuestro café cada semana.</p>
  </aside>
</main>

<footer>
  <p>Café Aroma · Calle Mayor, 3 · Madrid</p>
</footer>
```

> [!NOTE]
> ¿Ves que el resultado parece un documento de texto sin más? Estas etiquetas **no cambian el aspecto**: dicen qué es cada cosa. El diseño en columnas, los colores y el menú en horizontal llegarán con CSS.

## ¿Para qué sirve, si no cambia nada?

Escribir HTML que dice qué es cada cosa se llama **HTML semántico** (semántica = significado). Tiene ventajas muy reales:

- **Accesibilidad.** Los lectores de pantalla permiten saltar directamente al `<main>` o al `<nav>`. Sin estas etiquetas, una persona ciega tendría que escuchar toda la página desde el principio.
- **Buscadores.** Google entiende mejor qué es lo importante de tu página.
- **Tu yo del futuro.** Un código lleno de `<header>`, `<nav>` y `<footer>` se entiende de un vistazo. Uno lleno de cajas sin nombre, no.

## `<section>` o `<article>`

Es la duda más habitual. Hazte esta pregunta: **¿tendría sentido este bloque por sí solo, si lo copiara en otra web?**

- **Sí** → `<article>`: un post de un blog, una noticia, una receta, la ficha de un producto, un comentario.
- **No, es una parte de esta página** → `<section>`: «Quiénes somos», «Servicios», «Preguntas frecuentes».

Y una `<section>` puede contener varios `<article>` (como la carta del ejemplo), o al revés: un artículo largo puede dividirse en secciones.

## Cajas sin significado: `<div>` y `<span>`

A veces necesitas agrupar cosas solo para darles estilo con CSS, y ninguna etiqueta semántica encaja. Para eso están las dos «cajas genéricas»:

- **`<div>`**: una caja de **bloque**. Ocupa todo el ancho y empieza en una línea nueva, como un párrafo.
- **`<span>`**: una caja **en línea**. Marca un trozo de texto sin cortar la línea.

```playground div y span
<div>
  <p>Este párrafo está dentro de un div.</p>
  <p>Y este también. Juntos forman un grupo.</p>
</div>
<p>El precio es de <span>25 euros</span> sin IVA.</p>
```

No verás ninguna diferencia todavía. Cobrarán sentido en cuanto empieces con CSS: podrás decir «pon este `<div>` con fondo gris» o «este `<span>` en verde».

> [!TIP]
> Regla práctica: **primero busca una etiqueta semántica; si ninguna encaja, usa `<div>` o `<span>`**. Una página hecha solo con `<div>` funciona, pero es como una casa en la que todas las habitaciones se llaman «habitación».

## Errores típicos

- **Hacerlo todo con `<div>`**, incluso la cabecera, el menú y el pie.
- **Poner varios `<main>`.** Solo hay un contenido principal.
- **Usar `<section>` como si fuera un `<div>`**, solo para agrupar estilos. Una sección es una parte temática y suele llevar encabezado.
- **Meter en `<nav>` todos los enlaces de la página.** Es para la navegación importante, como el menú principal.
- **Esperar que estas etiquetas cambien el aspecto.** Eso lo hace CSS.

## Ejercicios

### Ejercicio 1: ponle nombre a cada caja (fácil)

Esta página está hecha solo con `<div>`. Cambia cada `<div>` por la etiqueta semántica que le corresponde.

```playground Ejercicio 1
<div>
  <h1>Ana López, fotógrafa</h1>
  <div>
    <a href="#trabajos">Trabajos</a>
    <a href="#contacto">Contacto</a>
  </div>
</div>
<div>
  <div id="trabajos">
    <h2>Trabajos</h2>
    <p>Bodas, retratos y viajes.</p>
  </div>
  <div id="contacto">
    <h2>Contacto</h2>
    <p>ana@ejemplo.com</p>
  </div>
</div>
<div>
  <p>© 2026 Ana López</p>
</div>
```

> [!HINT] Pista
> Hay una cabecera, un menú dentro de ella, un contenido principal con dos partes temáticas y un pie.

> [!HINT] Solución
> ```html
> <header>
>   <h1>Ana López, fotógrafa</h1>
>   <nav>
>     <a href="#trabajos">Trabajos</a>
>     <a href="#contacto">Contacto</a>
>   </nav>
> </header>
> <main>
>   <section id="trabajos">
>     <h2>Trabajos</h2>
>     <p>Bodas, retratos y viajes.</p>
>   </section>
>   <section id="contacto">
>     <h2>Contacto</h2>
>     <p>ana@ejemplo.com</p>
>   </section>
> </main>
> <footer>
>   <p>© 2026 Ana López</p>
> </footer>
> ```

### Ejercicio 2: ¿section o article? (fácil)

Decide qué etiqueta usarías para cada caso: a) la lista de preguntas frecuentes de una tienda; b) cada reseña de un cliente; c) una noticia en la portada de un periódico; d) el bloque «Nuestro equipo».

> [!HINT] Pista
> ¿Tendría sentido copiarlo suelto en otra web?

> [!HINT] Solución
> a) `<section>` · b) `<article>` (cada reseña se entiende sola) · c) `<article>` · d) `<section>`

### Ejercicio 3: el blog (medio)

Escribe la estructura de un blog de viajes: cabecera con el nombre del blog y un menú de tres enlaces, un contenido principal con dos posts (cada uno con su título, fecha y un párrafo), una barra lateral con «Sobre mí» y un pie con tu nombre.

```playground Ejercicio 3

```

> [!HINT] Pista 1
> Los posts son `<article>` dentro del `<main>`. La barra lateral es un `<aside>`.

> [!HINT] Pista 2
> Recuerda poner el menú como lista: `<nav>` → `<ul>` → `<li>` → `<a>`.

> [!HINT] Solución
> ```html
> <header>
>   <h1>Mochila al hombro</h1>
>   <nav>
>     <ul>
>       <li><a href="#">Inicio</a></li>
>       <li><a href="#">Destinos</a></li>
>       <li><a href="#">Contacto</a></li>
>     </ul>
>   </nav>
> </header>
> <main>
>   <article>
>     <h2>Una semana en Lisboa</h2>
>     <p>12 de marzo de 2026</p>
>     <p>Tranvías, pasteles de nata y miradores…</p>
>   </article>
>   <article>
>     <h2>Ruta por los Picos de Europa</h2>
>     <p>2 de mayo de 2026</p>
>     <p>Cinco días caminando entre montañas…</p>
>   </article>
>   <aside>
>     <h2>Sobre mí</h2>
>     <p>Soy Marta y viajo siempre que puedo.</p>
>   </aside>
> </main>
> <footer>
>   <p>Blog de Marta Ruiz</p>
> </footer>
> ```

## Ficha resumen

- **HTML semántico**: cada etiqueta dice qué es su contenido. Mejora la accesibilidad, el posicionamiento en buscadores y la claridad del código.
- `<header>` cabecera · `<nav>` menú · `<main>` contenido principal (uno) · `<section>` parte temática · `<article>` contenido independiente · `<aside>` secundario · `<footer>` pie.
- `<div>` (bloque) y `<span>` (en línea) son cajas **sin significado**, para cuando nada más encaja.
- Estas etiquetas **no cambian el aspecto**: eso es trabajo de CSS.

## Glosario

| Término | Definición |
| --- | --- |
| HTML semántico | Forma de escribir HTML en la que cada etiqueta dice qué es su contenido. |
| `<header>` | Cabecera de la página o de una sección. |
| `<nav>` | Bloque con los enlaces de navegación principales. |
| `<main>` | Contenido principal de la página. Solo hay uno. |
| `<section>` | Parte temática de una página, normalmente con su propio encabezado. |
| `<article>` | Contenido independiente que se entiende por sí solo, como un post o una noticia. |
| `<aside>` | Contenido secundario o complementario, como una barra lateral. |
| `<footer>` | Pie de la página o de una sección. |
| `<div>` | Caja genérica de bloque, sin significado. |
| `<span>` | Caja genérica en línea, para marcar un trozo de texto sin significado especial. |
| Accesibilidad | Que una web pueda usarla cualquier persona, también con discapacidad o con tecnologías de apoyo. |
