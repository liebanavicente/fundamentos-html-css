---
title: "Colores y tipografía"
summary: "Elige colores con nombres, hexadecimales y rgb, y dale personalidad al texto con fuentes, tamaños y espaciado."
part: css
minutes: 35
goals:
  - "Escribir colores con nombre, hexadecimal, `rgb()` y transparencia."
  - "Cambiar el color del texto y del fondo cuidando el contraste."
  - "Elegir tipografías, también de Google Fonts."
  - "Usar `font-size`, `font-weight`, `line-height` y `text-align` con unidades `px` y `rem`."
quiz:
  - question: "¿Qué color es `#000000`?"
    options:
      - "Blanco"
      - "Negro"
      - "Rojo"
      - "Gris"
    correct: 1
    explanation: "Todo a cero: nada de rojo, nada de verde y nada de azul. Es negro. `#ffffff` es blanco."
  - question: "¿Qué propiedad cambia el color de fondo?"
    options:
      - "`color`"
      - "`background-color`"
      - "`fill`"
      - "`font-color`"
    correct: 1
    explanation: "`color` cambia el texto y `background-color` (o `background`) el fondo."
  - question: "¿Qué significa el último número en `rgb(0 0 0 / 50%)`?"
    options:
      - "El brillo"
      - "La opacidad: 50 % transparente"
      - "El tamaño"
      - "El grosor"
    correct: 1
    explanation: "Tras la barra va el canal alfa, la opacidad. Con 50 % se ve a medias lo que hay detrás."
  - question: "¿Por qué se escribe `font-family: \"Open Sans\", Arial, sans-serif;` con varias fuentes?"
    options:
      - "Para mezclarlas"
      - "Por si la primera no está disponible, usar la siguiente"
      - "Para usar una en cada párrafo"
      - "Es un error"
    correct: 1
    explanation: "Es una lista de reserva: el navegador usa la primera que tenga. Se acaba con una genérica como `sans-serif`."
  - question: "Si el tamaño base del navegador es 16px, ¿cuánto mide `2rem`?"
    options:
      - "2px"
      - "16px"
      - "32px"
      - "200px"
    correct: 2
    explanation: "`1rem` es el tamaño de letra base (normalmente 16px), así que `2rem` son 32px. Y respeta si alguien tiene la letra configurada más grande."
  - question: "¿Qué propiedad da más aire entre las líneas de un párrafo?"
    options:
      - "`letter-spacing`"
      - "`line-height`"
      - "`text-align`"
      - "`font-weight`"
    correct: 1
    explanation: "`line-height` es la altura de cada línea. Entre 1.4 y 1.7 los textos largos se leen mucho mejor."
cards:
  - front: "Formas de escribir un color"
    back: "Nombre (`tomato`), hexadecimal (`#ff6347`), `rgb(255 99 71)` y `hsl(9 100% 64%)`."
  - front: "¿Cómo se lee un hexadecimal?"
    back: "`#RRGGBB`: dos cifras para rojo, verde y azul, de `00` (nada) a `ff` (todo)."
  - front: "Transparencia en un color"
    back: "`rgb(0 0 0 / 50%)`, o en hexadecimal con dos cifras más: `#00000080`."
  - front: "`color` y `background-color`"
    back: "`color` es el color del texto; `background-color`, el del fondo."
  - front: "`px` frente a `rem`"
    back: "`px` es un tamaño fijo. `rem` es relativo al tamaño de letra base (1rem ≈ 16px) y respeta los ajustes de la persona."
  - front: "Propiedades del texto más usadas"
    back: "`font-family`, `font-size`, `font-weight`, `line-height`, `text-align`, `text-decoration`, `text-transform`."
  - front: "Contraste"
    back: "Diferencia entre el color del texto y el del fondo. Si es poca, cuesta leer. Gris claro sobre blanco: mal."
---

## Formas de escribir un color

CSS entiende los colores de varias maneras. Todas sirven para cualquier propiedad que acepte un color.

### Por su nombre

Hay unos 140 colores con nombre en inglés: `red`, `navy`, `tomato`, `gold`, `teal`, `hotpink`, `rebeccapurple`… Son perfectos para empezar y hacer pruebas.

```playground Colores con nombre
<p class="uno">tomato</p>
<p class="dos">steelblue</p>
<p class="tres">mediumseagreen</p>
<!-- css -->
.uno { color: tomato; }
.dos { color: steelblue; }
.tres { color: mediumseagreen; }
```

### Hexadecimal: `#RRGGBB`

Es la forma más habitual en el mundo real; la verás en todos los programas de diseño. Una almohadilla y seis cifras, en grupos de dos: **rojo, verde y azul**. Cada grupo va de `00` (nada) a `ff` (todo), en sistema hexadecimal (0–9 y a–f).

| Hexadecimal | Rojo | Verde | Azul | Color |
| --- | --- | --- | --- | --- |
| `#ff0000` | todo | nada | nada | Rojo |
| `#00ff00` | nada | todo | nada | Verde |
| `#000000` | nada | nada | nada | Negro |
| `#ffffff` | todo | todo | todo | Blanco |
| `#808080` | mitad | mitad | mitad | Gris |

No hace falta calcularlos: se copian de un selector de color. Busca «color picker» en Google o haz clic en el cuadradito de color que aparece junto a cualquier color en las DevTools.

> [!TIP]
> Si las parejas se repiten, se puede abreviar a tres cifras: `#ffffff` → `#fff`, `#336699` → `#369`.

### `rgb()` y la transparencia

`rgb()` usa los mismos tres canales, pero con números del 0 al 255. Su ventaja es que admite un cuarto valor, el **alfa** u **opacidad**, después de una barra:

```playground Transparencia
<div class="fondo">
  <p class="caja">Fondo negro al 70 %</p>
  <p class="caja suave">Fondo negro al 20 %</p>
</div>
<!-- css -->
.fondo {
  background-image: linear-gradient(90deg, gold, tomato);
  padding: 16px;
}

.caja {
  background-color: rgb(0 0 0 / 70%);
  color: white;
  padding: 12px;
}

.suave {
  background-color: rgb(0 0 0 / 20%);
}
```

> [!NOTE]
> También existe `hsl()` (tono, saturación y luminosidad), muy cómodo para crear variaciones de un mismo color: `hsl(200 80% 40%)` y `hsl(200 80% 90%)` son el mismo azul, oscuro y clarito. Y verás la forma antigua con comas, `rgba(0, 0, 0, 0.5)`, que sigue funcionando.

## Color del texto y del fondo

- `color`: el color del **texto**.
- `background-color`: el color del **fondo**. También puedes usar la forma corta `background`.

```css
body {
  color: #222;
  background-color: #fdf6e3;
}
```

### El contraste importa

Si el texto y el fondo se parecen demasiado, cuesta leer, y para mucha gente (personas mayores, con baja visión o usando el móvil al sol) resulta imposible.

```playground Buen y mal contraste
<p class="mal">Gris claro sobre blanco: difícil de leer.</p>
<p class="bien">Gris oscuro sobre blanco: se lee sin esfuerzo.</p>
<!-- css -->
.mal { color: #c8c8c8; }
.bien { color: #333; }
```

> [!IMPORTANT]
> Las DevTools comprueban el contraste: al hacer clic en el cuadradito de color de un `color`, te muestran una relación como «4.5» con una marca verde si es suficiente. Para texto normal, busca **4.5 o más**.

## Tipografías: `font-family`

`font-family` elige la fuente. Siempre se escribe como una **lista de reserva**, separada por comas: el navegador usa la primera que tenga disponible.

```css
body {
  font-family: "Helvetica Neue", Arial, sans-serif;
}
```

- Los nombres con espacios van **entre comillas**.
- La lista acaba con una **familia genérica**, que siempre existe:

| Genérica | Cómo es | Uso típico |
| --- | --- | --- |
| `sans-serif` | Sin remates, limpia | Interfaces y textos en pantalla |
| `serif` | Con remates, clásica | Textos largos, aire elegante |
| `monospace` | Todas las letras igual de anchas | Código |
| `system-ui` | La de tu sistema operativo | Aspecto «nativo» |

### Fuentes de Google Fonts

Para usar fuentes que no tiene todo el mundo instaladas, la forma más fácil es **Google Fonts** (`fonts.google.com`), con cientos de fuentes gratuitas:

1. Elige una fuente y pulsa **Get font** → **Get embed code**.
2. Copia las etiquetas `<link>` que te da y pégalas en el `<head>`, **antes** de tu hoja de estilos.
3. Usa el nombre de la fuente en tu CSS.

```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="estilos.css">
</head>
```

```css
body {
  font-family: "Poppins", sans-serif;
}
```

> [!TIP]
> Con **dos fuentes** como mucho tienes de sobra: una para los títulos y otra para el texto (o la misma para todo). Más fuentes hacen la web más lenta y más caótica.

## Tamaños: `font-size` y las unidades

```css
h1 { font-size: 40px; }
p { font-size: 1.125rem; }
```

Las unidades más importantes:

| Unidad | Qué es | Cuándo usarla |
| --- | --- | --- |
| `px` | Píxeles: un tamaño fijo | Bordes, detalles pequeños |
| `rem` | Veces el tamaño de letra base de la página (normalmente 16px) | **Tamaños de texto** y espacios |
| `em` | Veces el tamaño de letra del propio elemento | Espacios que crecen con su texto |
| `%` | Porcentaje de algo del padre | Anchos |

> [!IMPORTANT]
> Prefiere **`rem` para los tamaños de letra**. Mucha gente configura su navegador con la letra más grande para leer mejor. Con `rem`, tu web lo respeta; con `px`, lo ignora. Cuenta fácil: `1rem` = 16px, `1.5rem` = 24px, `2rem` = 32px.

## Más propiedades del texto

```playground Propiedades del texto
<h1>Cafetería La Taza</h1>
<p class="lema">Café de especialidad desde 1998</p>
<p>Tostamos nuestro propio café cada semana en el obrador. Ven a probar el de esta temporada, que llega de Etiopía y tiene notas de frutos rojos.</p>
<p><a href="#">Ver la carta</a></p>
<!-- css -->
body {
  font-family: Georgia, serif;
  color: #3b2f2f;
  background-color: #fbf4ea;
}

h1 {
  font-family: system-ui, sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
}

.lema {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.8rem;
}

p {
  line-height: 1.7;
}

a {
  color: #8b4513;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
```

| Propiedad | Para qué | Valores típicos |
| --- | --- | --- |
| `font-weight` | Grosor | `normal` (400), `bold` (700), de `100` a `900` |
| `font-style` | Cursiva | `normal`, `italic` |
| `line-height` | Altura de cada línea | `1.5` (sin unidad: 1,5 veces el tamaño de letra) |
| `text-align` | Alineación | `left`, `center`, `right`, `justify` |
| `text-decoration` | Subrayado | `none`, `underline` |
| `text-transform` | Mayúsculas | `uppercase`, `lowercase`, `capitalize` |
| `letter-spacing` | Espacio entre letras | `0.05em` |

## Errores típicos

- **Confundir `color` con `background-color`**, o inventarse `font-color` (no existe).
- **Hexadecimales mal escritos**: sin `#`, o con cinco o siete cifras.
- **Olvidar las comillas** en fuentes con espacios: `font-family: Open Sans` falla.
- **No poner una familia genérica** al final de la lista.
- **Poner el `<link>` de Google Fonts después** de tu CSS, o no ponerlo y usar la fuente igualmente.
- **Texto con poco contraste**, como gris claro sobre blanco.
- **Justificar textos** (`justify`) en columnas estrechas: quedan huecos muy feos entre palabras.

## Ejercicios

### Ejercicio 1: la tarjeta de visita (fácil)

Da estilo a esta tarjeta: fondo `#1d3557`, texto blanco, el nombre en `2rem` y negrita, el cargo en mayúsculas con algo de espacio entre letras, y todo centrado.

```playground Ejercicio 1
<div class="tarjeta">
  <p class="nombre">Laura Gómez</p>
  <p class="cargo">Diseñadora web</p>
  <p>laura@ejemplo.com</p>
</div>
<!-- css -->
.tarjeta {
  padding: 24px;
}
```

> [!HINT] Pista
> El fondo, el color del texto y la alineación van en `.tarjeta`; el resto, en `.nombre` y `.cargo`.

> [!HINT] Solución
> ```css
> .tarjeta {
>   padding: 24px;
>   background-color: #1d3557;
>   color: white;
>   text-align: center;
> }
>
> .nombre {
>   font-size: 2rem;
>   font-weight: bold;
> }
>
> .cargo {
>   text-transform: uppercase;
>   letter-spacing: 0.1em;
> }
> ```

### Ejercicio 2: mejora la lectura (medio)

Este artículo cuesta de leer. Mejóralo: tipografía de la familia `serif`, tamaño de `1.125rem`, altura de línea de `1.7`, texto `#222` sobre fondo `#fffdf7`, y el título en una fuente `sans-serif`.

```playground Ejercicio 2
<h1>Por qué caminar cada día</h1>
<p>Caminar media hora al día mejora el corazón, el ánimo y el sueño. No hace falta material ni gimnasio: basta con unas zapatillas cómodas y ganas de salir a la calle.</p>
<p>Además, caminar es una forma estupenda de conocer tu barrio, escuchar un pódcast o charlar con alguien.</p>
<!-- css -->
body {
  color: #aaa;
  font-size: 12px;
  line-height: 1;
}
```

> [!HINT] Pista
> Cambia los valores de `body` y añade una regla para `h1` con su propia `font-family`.

> [!HINT] Solución
> ```css
> body {
>   font-family: Georgia, serif;
>   color: #222;
>   background-color: #fffdf7;
>   font-size: 1.125rem;
>   line-height: 1.7;
> }
>
> h1 {
>   font-family: system-ui, sans-serif;
> }
> ```

### Ejercicio 3: tu paleta (reto)

Elige tres colores que te gusten en un selector de color y escribe sus hexadecimales. Crea una página con un título, un párrafo y un enlace usándolos: uno para el fondo, otro para el texto y otro para los títulos y enlaces. Comprueba el contraste en las DevTools.

```playground Ejercicio 3
<h1>Mi paleta</h1>
<p>Un texto de prueba con un <a href="#">enlace</a>.</p>
<!-- css -->

```

> [!HINT] Pista
> Herramientas como **Coolors** (`coolors.co`) generan paletas que combinan bien.

> [!HINT] Solución
> Una posible:
>
> ```css
> body {
>   background-color: #f1faee;
>   color: #1d3557;
>   font-family: sans-serif;
> }
>
> h1, a {
>   color: #e63946;
> }
> ```

## Ficha resumen

- Colores: nombre (`tomato`), hexadecimal (`#ff6347`), `rgb(255 99 71)`, con transparencia `rgb(0 0 0 / 50%)`.
- `color` = texto · `background-color` = fondo. Cuida el **contraste** (4.5 o más).
- `font-family`: lista de reserva acabada en genérica. Google Fonts: `<link>` en el `<head>`.
- Tamaños de letra en **`rem`** (1rem ≈ 16px).
- `font-weight`, `line-height` (1.5–1.7 en textos), `text-align`, `text-decoration`, `text-transform`, `letter-spacing`.

## Glosario

| Término | Definición |
| --- | --- |
| Hexadecimal | Forma de escribir un color con `#` y seis cifras: dos para el rojo, dos para el verde y dos para el azul. |
| RGB | Modelo de color que mezcla luz roja, verde y azul. En CSS: `rgb(255 0 0)`. |
| Opacidad | Grado en que un color deja ver lo que hay detrás. También se llama canal alfa. |
| Contraste | Diferencia de luminosidad entre el texto y su fondo, que decide si se lee bien. |
| `font-family` | Propiedad que elige la tipografía, como una lista de fuentes de reserva. |
| Familia genérica | Tipo de letra que siempre existe, como `serif`, `sans-serif` o `monospace`. |
| Google Fonts | Catálogo gratuito de tipografías para usar en webs. |
| `rem` | Unidad relativa al tamaño de letra base de la página, normalmente 16px. |
| `line-height` | Altura de cada línea de texto; da aire entre las líneas. |
