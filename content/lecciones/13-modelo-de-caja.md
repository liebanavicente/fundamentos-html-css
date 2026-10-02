---
title: "El modelo de caja"
summary: "Todo en una web es una caja: contenido, relleno, borde y margen. Entiéndelo y controlarás el espacio de tus páginas."
part: css
minutes: 40
goals:
  - "Nombrar las cuatro capas de una caja: contenido, `padding`, `border` y `margin`."
  - "Dar tamaño a las cajas con `width`, `max-width` y `height`."
  - "Usar `box-sizing: border-box` y saber por qué todo el mundo lo usa."
  - "Centrar una caja con `margin: 0 auto` y redondear esquinas."
quiz:
  - question: "¿Qué es el `padding`?"
    options:
      - "El espacio de fuera, entre una caja y las de alrededor"
      - "El espacio de dentro, entre el contenido y el borde"
      - "El grosor del borde"
      - "El color de fondo"
    correct: 1
    explanation: "`padding` es el relleno interior. El fondo de la caja se extiende por él. `margin` es el espacio exterior."
  - question: "¿Qué significa `margin: 10px 20px;`?"
    options:
      - "10px arriba y 20px abajo"
      - "10px arriba y abajo; 20px a izquierda y derecha"
      - "10px a la izquierda y 20px a la derecha"
      - "10px en todos los lados y 20px de borde"
    correct: 1
    explanation: "Con dos valores: el primero es vertical (arriba y abajo) y el segundo, horizontal (izquierda y derecha)."
  - question: "Una caja tiene `width: 200px; padding: 20px; border: 5px solid;` y SIN `box-sizing: border-box`. ¿Cuánto ocupa de ancho?"
    options:
      - "200px"
      - "220px"
      - "250px"
      - "240px"
    correct: 2
    explanation: "200 de contenido + 20 + 20 de padding + 5 + 5 de borde = 250px. Con `border-box` ocuparía exactamente 200px."
  - question: "¿Cómo centras horizontalmente un bloque que tiene un ancho fijado?"
    options:
      - "`text-align: center;`"
      - "`margin: 0 auto;`"
      - "`padding: auto;`"
      - "`align: center;`"
    correct: 1
    explanation: "Con márgenes laterales automáticos, el navegador reparte el espacio sobrante a partes iguales."
  - question: "¿Qué propiedad redondea las esquinas?"
    options:
      - "`border-round`"
      - "`corner`"
      - "`border-radius`"
      - "`round`"
    correct: 2
    explanation: "`border-radius: 12px;` redondea las cuatro esquinas. Con `50%` en una caja cuadrada, sale un círculo."
cards:
  - front: "Las cuatro capas de una caja"
    back: "De dentro afuera: contenido → `padding` (relleno) → `border` (borde) → `margin` (margen)."
  - front: "`padding` frente a `margin`"
    back: "`padding`: espacio dentro del borde (tiene el fondo de la caja). `margin`: espacio fuera (transparente)."
  - front: "Orden de los cuatro valores"
    back: "Como las agujas del reloj desde arriba: arriba, derecha, abajo, izquierda."
  - front: "Sintaxis corta de `border`"
    back: "`border: 2px solid black;` — grosor, estilo y color."
  - front: "¿Qué hace `box-sizing: border-box`?"
    back: "Que `width` incluya padding y borde: la caja mide lo que dices."
  - front: "Centrar un bloque"
    back: "Darle un ancho (`max-width`) y `margin: 0 auto;`."
  - front: "`width` frente a `max-width`"
    back: "`width` fija el ancho. `max-width` lo limita, pero deja encoger en pantallas pequeñas."
---

## Todo es una caja

Esta es la idea más importante de CSS: **cada elemento de la página es una caja rectangular**. Los títulos, los párrafos, las imágenes, los enlaces… todo. Incluso un círculo es, por dentro, una caja con las esquinas muy redondeadas.

Y cada caja tiene cuatro capas, de dentro afuera:

```text
┌─────────────────────────────────────┐
│ margin (margen): espacio exterior   │
│  ┌───────────────────────────────┐  │
│  │ border (borde)                │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │ padding (relleno)       │  │  │
│  │  │  ┌───────────────────┐  │  │  │
│  │  │  │     CONTENIDO     │  │  │  │
│  │  │  └───────────────────┘  │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

| Capa | Qué es | Comparación |
| --- | --- | --- |
| **Contenido** | El texto o la imagen | El cuadro |
| **`padding`** (relleno) | Espacio entre el contenido y el borde | El paspartú blanco alrededor del cuadro |
| **`border`** (borde) | La línea que rodea la caja | El marco |
| **`margin`** (margen) | Espacio entre esta caja y las demás | La distancia en la pared hasta el siguiente cuadro |

```playground Las capas de una caja
<div class="caja">Soy el contenido</div>
<div class="caja">Soy otra caja</div>
<!-- css -->
.caja {
  background-color: lightyellow;
  padding: 20px;
  border: 4px solid darkorange;
  margin: 30px;
}
```

> [!TIP]
> Cambia los números del ejemplo uno por uno. Fíjate en que el **fondo amarillo llega hasta el borde** (cubre el padding), pero **no el margen**, que siempre es transparente. Y abre las DevTools sobre la caja: en el panel **Calculado** (*Computed*) verás un dibujo con las cuatro capas y sus medidas.

## `padding` y `margin`

Las dos funcionan igual. Puedes dar un valor a cada lado:

```css
.caja {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}
```

O, mucho más habitual, usar la **forma corta**, con uno a cuatro valores:

| Escribes | Significa |
| --- | --- |
| `padding: 20px;` | 20px en los cuatro lados |
| `padding: 10px 20px;` | 10px arriba y abajo, 20px a los lados |
| `padding: 10px 20px 30px;` | 10px arriba, 20px a los lados, 30px abajo |
| `padding: 10px 20px 30px 40px;` | Arriba, derecha, abajo, izquierda |

> [!TIP]
> El truco para recordar el orden de cuatro valores: **como las agujas del reloj, empezando por arriba**. Arriba, derecha, abajo, izquierda.

### Cuándo usar cada uno

- **`padding`** cuando quieres que el **contenido respire dentro** de su caja (un botón, una tarjeta con fondo).
- **`margin`** cuando quieres **separar** una caja de las demás.

> [!NOTE]
> Una curiosidad que confunde a todo el mundo: los márgenes verticales de dos bloques seguidos **no se suman**, se solapan. Si un párrafo tiene 20px de margen abajo y el siguiente 30px arriba, la separación es de 30px, no de 50. Se llama **colapso de márgenes**.

## Bordes

La forma corta de `border` lleva tres cosas: **grosor**, **estilo** y **color**.

```playground Bordes y esquinas
<p class="solido">solid</p>
<p class="discontinuo">dashed</p>
<p class="punteado">dotted</p>
<p class="redondeado">Esquinas redondeadas</p>
<p class="pastilla">Pastilla</p>
<img class="avatar" src="https://picsum.photos/id/64/120/120" alt="Foto de perfil" width="120" height="120">
<!-- css -->
p {
  padding: 10px;
}

.solido { border: 3px solid black; }
.discontinuo { border: 3px dashed crimson; }
.punteado { border: 3px dotted royalblue; }

.redondeado {
  border: 2px solid teal;
  border-radius: 12px;
}

.pastilla {
  display: inline-block;
  background: gold;
  border-radius: 999px;
  padding: 6px 16px;
}

.avatar {
  border-radius: 50%;
  border: 4px solid gold;
}
```

- `border-radius` **redondea las esquinas**. Con `50%` en una caja cuadrada, sale un **círculo** (perfecto para fotos de perfil).
- También puedes poner un borde solo en un lado: `border-bottom: 2px solid gray;`.

## Ancho y alto

- `width`: ancho del contenido.
- `height`: alto. **Mejor no fijarlo** en cajas con texto: si el texto crece, se sale de la caja. Deja que el alto se adapte solo.
- `max-width`: ancho **máximo**. La caja puede encoger si no cabe (en un móvil), pero nunca pasará de ahí.

```css
.articulo {
  max-width: 700px; /* Mejor que width: en pantallas pequeñas se adapta */
}
```

> [!IMPORTANT]
> Un texto con líneas muy largas es cansado de leer. Limitar el ancho de los textos con `max-width` (entre 600 y 750px, o `65ch`, unos 65 caracteres) es uno de los trucos que más mejora una web.

## `box-sizing: border-box`

Aquí viene una sorpresa. Mira estas dos cajas con `width: 200px`:

```playground ¿Cuánto mide una caja?
<div class="caja normal">content-box</div>
<div class="caja border-box">border-box</div>
<!-- css -->
.caja {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin-bottom: 12px;
  background: lightblue;
}

.border-box {
  box-sizing: border-box;
}
```

Por defecto, `width` mide **solo el contenido**: el padding y el borde se suman por fuera. La primera caja ocupa 200 + 40 + 10 = **250px**. Con `box-sizing: border-box`, `width` incluye el padding y el borde: la caja mide **exactamente los 200px** que has pedido.

Como esto es mucho más fácil de manejar, casi todas las webs empiezan su CSS con esta regla, que lo aplica a todos los elementos:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

El asterisco `*` es el **selector universal**: selecciona todos los elementos. Ponlo al principio de tus hojas de estilo y olvídate del problema.

## Centrar una caja

Para centrar horizontalmente un bloque, dale un ancho máximo y márgenes laterales automáticos:

```playground Centrar con margin auto
<main class="contenedor">
  <h1>Mi blog</h1>
  <p>Este contenedor está centrado en la página y nunca mide más de 400px de ancho. Haz más estrecha la vista previa (o mira la página en el móvil) y verás cómo se adapta.</p>
</main>
<!-- css -->
body {
  background: #eee;
}

.contenedor {
  max-width: 400px;
  margin: 0 auto;
  padding: 24px;
  background: white;
  border-radius: 12px;
}
```

`margin: 0 auto` significa «0 arriba y abajo, y automático a los lados»: el navegador reparte el espacio sobrante a partes iguales. Es el patrón que usan casi todas las webs para su contenido principal.

> [!WARNING]
> `margin: 0 auto` centra **cajas de bloque con un ancho**. Para centrar el **texto** dentro de una caja, se usa `text-align: center`. Son cosas distintas.

## Los márgenes que ya existían

¿Te has fijado en que los títulos y párrafos ya tienen espacio entre ellos y en que la página no empieza pegada al borde de la ventana? Son los **estilos por defecto** del navegador: el `<body>` trae un `margin` de 8px y los títulos y párrafos traen márgenes arriba y abajo. Muchas webs empiezan con `body { margin: 0; }` para controlar ellas todo el espacio.

## Errores típicos

- **Confundir `padding` y `margin`**: si quieres que el fondo se extienda, es padding; si quieres separar, es margin.
- **No usar `box-sizing: border-box`** y que las cajas «no cuadren» al sumarles padding.
- **Fijar `height`** en cajas con texto: el texto se sale cuando crece o en pantallas pequeñas.
- **Usar `width` en lugar de `max-width`** y que la caja no quepa en el móvil.
- **Querer centrar texto con `margin: 0 auto`** o una caja con `text-align: center`.
- **Escribir el borde incompleto**: `border: 2px black;` no se ve porque le falta el estilo (`solid`).

## Ejercicios

### Ejercicio 1: el botón (fácil)

Convierte este enlace en un botón: fondo `royalblue`, texto blanco, sin subrayado, `12px` de relleno arriba y abajo y `24px` a los lados, y esquinas redondeadas de `8px`.

```playground Ejercicio 1
<p><a class="boton" href="#">Comprar ahora</a></p>
<!-- css -->

```

> [!HINT] Pista
> Usa la forma corta de padding con dos valores: primero el vertical, luego el horizontal.

> [!HINT] Solución
> ```css
> .boton {
>   background: royalblue;
>   color: white;
>   text-decoration: none;
>   padding: 12px 24px;
>   border-radius: 8px;
> }
> ```

### Ejercicio 2: la tarjeta (medio)

Crea una tarjeta centrada en la página: ancho máximo de `320px`, relleno de `24px`, borde de `1px` sólido `#ddd`, esquinas de `16px`, fondo blanco y `40px` de margen arriba. La imagen debe ser redonda. Usa `border-box`.

```playground Ejercicio 2
<article class="tarjeta">
  <img class="foto" src="https://picsum.photos/id/1027/100/100" alt="Foto de Marta Ruiz" width="100" height="100">
  <h2>Marta Ruiz</h2>
  <p>Fotógrafa de naturaleza. Vive en Granada.</p>
</article>
<!-- css -->
body {
  background: #f3f3f3;
  font-family: sans-serif;
}
```

> [!HINT] Pista 1
> Para centrarla, `max-width` y `margin` con `auto` a los lados. Como además quieres 40px arriba: `margin: 40px auto 0;`.

> [!HINT] Pista 2
> La imagen redonda: `border-radius: 50%`.

> [!HINT] Solución
> ```css
> * {
>   box-sizing: border-box;
> }
>
> body {
>   background: #f3f3f3;
>   font-family: sans-serif;
> }
>
> .tarjeta {
>   max-width: 320px;
>   margin: 40px auto 0;
>   padding: 24px;
>   border: 1px solid #ddd;
>   border-radius: 16px;
>   background: white;
> }
>
> .foto {
>   border-radius: 50%;
> }
> ```

### Ejercicio 3: calcula (reto)

Sin `box-sizing: border-box`, ¿cuánto ocupa de ancho total (contando el margen) esta caja? ¿Y con `border-box`?

```css
.caja {
  width: 300px;
  padding: 10px 30px;
  border: 2px solid black;
  margin: 0 20px;
}
```

> [!HINT] Pista
> Solo cuentan los valores **horizontales**: el padding de izquierda y derecha es el segundo valor.

> [!HINT] Solución
> - **Sin `border-box`**: 300 + 30 + 30 (padding) + 2 + 2 (borde) = 364px de caja, más 20 + 20 de margen = **404px**.
> - **Con `border-box`**: la caja mide 300px, más 40 de margen = **340px**.

## Ficha resumen

- Cada elemento es una caja: **contenido → padding → border → margin**.
- `padding` = espacio interior (con fondo) · `margin` = espacio exterior (transparente).
- Forma corta: 1 valor (todo), 2 (vertical, horizontal), 4 (arriba, derecha, abajo, izquierda).
- `border: 2px solid color;` y `border-radius` para redondear (`50%` = círculo).
- Usa `max-width` mejor que `width`, y evita fijar `height` en cajas con texto.
- Empieza tu CSS con `* { box-sizing: border-box; }`.
- Centrar un bloque: `max-width` + `margin: 0 auto`.

## Glosario

| Término | Definición |
| --- | --- |
| Modelo de caja | Forma en que CSS trata cada elemento: una caja con contenido, relleno, borde y margen. |
| `padding` | Relleno: espacio entre el contenido y el borde de una caja. Tiene el fondo de la caja. |
| `margin` | Margen: espacio transparente entre una caja y las de alrededor. |
| `border` | Borde que rodea una caja. Se define con grosor, estilo y color. |
| `border-radius` | Propiedad que redondea las esquinas de una caja. |
| `box-sizing` | Propiedad que decide si `width` y `height` incluyen el padding y el borde (`border-box`) o no. |
| `max-width` | Ancho máximo de una caja: puede encoger, pero no crecer más. |
| Selector universal | El selector `*`, que selecciona todos los elementos. |
| Colapso de márgenes | Cuando dos márgenes verticales se tocan, se queda solo el mayor en lugar de sumarse. |
