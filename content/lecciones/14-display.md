---
title: "Bloques y elementos en línea"
summary: "Por qué unos elementos ocupan toda la fila y otros no, y cómo cambiarlo con la propiedad `display`."
part: maquetar
minutes: 25
goals:
  - "Explicar el flujo normal de una página."
  - "Distinguir elementos de bloque y en línea, y sus límites."
  - "Usar `display: block`, `inline`, `inline-block` y `none`."
quiz:
  - question: "¿Qué hace un elemento de bloque como `<p>`?"
    options:
      - "Se coloca al lado del anterior"
      - "Empieza en una línea nueva y ocupa todo el ancho disponible"
      - "Ocupa solo lo que mide su texto"
      - "No se ve"
    correct: 1
    explanation: "Los bloques se apilan de arriba abajo, cada uno en su propia fila."
  - question: "¿Cuál de estos es un elemento en línea por defecto?"
    options:
      - "`<div>`"
      - "`<h2>`"
      - "`<a>`"
      - "`<section>`"
    correct: 2
    explanation: "Los enlaces, `<strong>`, `<em>` y `<span>` van dentro de la línea de texto."
  - question: "Pones `width: 200px` a un `<span>` y no pasa nada. ¿Por qué?"
    options:
      - "Porque `<span>` no admite CSS"
      - "Porque los elementos en línea ignoran `width` y `height`"
      - "Porque falta `px`"
      - "Porque hay que usar `max-width`"
    correct: 1
    explanation: "Los elementos en línea miden lo que su contenido. Con `display: inline-block` sí aceptan ancho y alto."
  - question: "¿Qué hace `display: none`?"
    options:
      - "Hace el elemento transparente pero deja su hueco"
      - "Lo oculta por completo, como si no existiera"
      - "Lo borra del HTML"
      - "Lo pone en negro"
    correct: 1
    explanation: "El elemento sigue en el HTML, pero no se dibuja ni ocupa espacio."
  - question: "Quieres botones uno al lado del otro, pero con `padding` y ancho propios. ¿Qué `display` usas?"
    options:
      - "`block`"
      - "`inline`"
      - "`inline-block`"
      - "`none`"
    correct: 2
    explanation: "`inline-block` se coloca en línea como el texto, pero acepta ancho, alto y márgenes como un bloque."
cards:
  - front: "Flujo normal"
    back: "Cómo se colocan las cajas sin CSS: los bloques de arriba abajo; los elementos en línea, de izquierda a derecha dentro del texto."
  - front: "Elemento de bloque"
    back: "Empieza en línea nueva y ocupa todo el ancho. Ej.: `<p>`, `<h1>`, `<div>`, `<section>`, `<ul>`."
  - front: "Elemento en línea"
    back: "Va dentro del texto y mide lo que su contenido. Ignora `width` y `height`. Ej.: `<a>`, `<span>`, `<strong>`."
  - front: "`display: inline-block`"
    back: "En línea, pero acepta ancho, alto, padding y márgenes como un bloque."
  - front: "`display: none`"
    back: "Oculta el elemento por completo: no se ve y no ocupa espacio."
---

## El flujo normal

Sin CSS, el navegador coloca las cajas siguiendo unas reglas fijas que se llaman **flujo normal**. Ya lo has visto en todas tus páginas:

- Los **títulos, párrafos, listas y secciones** se apilan **de arriba abajo**, cada uno en su propia fila.
- Los **enlaces, negritas y cursivas** van **dentro de la línea de texto**, uno detrás de otro, como palabras.

Esto pasa porque cada elemento tiene un tipo de caja por defecto, que se controla con la propiedad `display`.

## Bloque y en línea

```playground Bloque frente a en línea
<p class="marcado">Soy un párrafo: un bloque.</p>
<p class="marcado">Y yo otro bloque, debajo.</p>
<p>Esto es texto con <a class="marcado" href="#">un enlace</a> y <strong class="marcado">una negrita</strong> en línea.</p>
<!-- css -->
.marcado {
  outline: 2px dashed crimson;
}
```

| | Bloque (`display: block`) | En línea (`display: inline`) |
| --- | --- | --- |
| **Dónde empieza** | En una línea nueva | Sigue en la misma línea |
| **Ancho** | Todo el disponible | Lo que mide su contenido |
| **`width` y `height`** | Funcionan | Se ignoran |
| **Márgenes verticales** | Funcionan | Se ignoran |
| **Ejemplos** | `<p>`, `<h1>`…`<h6>`, `<div>`, `<ul>`, `<li>`, `<section>`, `<form>` | `<a>`, `<span>`, `<strong>`, `<em>`, `<img>`, `<label>`, `<input>` |

> [!TIP]
> Un truco para ver todas las cajas de una página: añade temporalmente `* { outline: 1px solid red; }` a tu CSS. Usamos `outline` porque, a diferencia de `border`, no ocupa espacio y no mueve nada.

## Cambiar el tipo con `display`

La propiedad `display` permite cambiar el tipo de caja de cualquier elemento. Que algo sea un `<li>` (de bloque) no le impide colocarse en línea si tú lo dices.

### `display: inline-block`: lo mejor de los dos

Se coloca en línea, como el texto, pero **acepta ancho, alto, padding y márgenes** como un bloque. Es ideal para botones, etiquetas o menús sencillos:

```playground inline-block
<nav>
  <ul class="menu">
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Tienda</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
</nav>
<!-- css -->
.menu {
  list-style: none;
  padding: 0;
}

.menu li {
  display: inline-block;
}

.menu a {
  display: inline-block;
  padding: 10px 16px;
  background: black;
  color: white;
  text-decoration: none;
}
```

Fíjate en `list-style: none` (quita las viñetas) y `padding: 0` (quita la sangría que trae la lista). Son las dos líneas que verás en casi todos los menús.

### `display: block`: un enlace que ocupa toda la fila

Al revés también funciona. Un enlace con `display: block` ocupa todo el ancho, y se puede hacer clic en cualquier parte de la fila, no solo en el texto:

```css
.lista-ajustes a {
  display: block;
  padding: 16px;
}
```

### `display: none`: ocultar

`display: none` **oculta por completo** un elemento: no se ve y no ocupa espacio, como si no existiera. Lo usarás, por ejemplo, para esconder algo en el móvil y mostrarlo en el ordenador.

```playground Ocultar
<p>Primer párrafo.</p>
<p class="oculto">Este párrafo no se ve.</p>
<p>Tercer párrafo, pegado al primero.</p>
<!-- css -->
.oculto {
  display: none;
}
```

> [!NOTE]
> `visibility: hidden` también oculta, pero **deja el hueco** vacío. Prueba a cambiarlo en el ejemplo y compara.

## Lo que viene: `flex` y `grid`

`display` tiene dos valores más que han cambiado por completo la forma de hacer webs: **`display: flex`** y **`display: grid`**. Con ellos colocarás cajas en filas, columnas y cuadrículas con muy pocas líneas. Son las dos próximas lecciones, y con ellas `inline-block` se queda para casos pequeños.

## Errores típicos

- **Dar `width`, `height` o margen vertical a un elemento en línea** (`<a>`, `<span>`) y que no haga nada. Cámbialo a `inline-block` o `block`.
- **Usar `<br>` o espacios para colocar cosas.** Para eso está `display` (y, pronto, Flexbox).
- **Olvidar quitar las viñetas y el padding** de una lista que se usa como menú.
- **Ocultar con `display: none` contenido importante** que debería estar visible para todo el mundo.

## Ejercicios

### Ejercicio 1: etiquetas (fácil)

Convierte estos `<span>` en etiquetas: fondo `lavender`, `4px 10px` de relleno, esquinas de `999px` y `4px` de margen a la derecha. Después prueba a darles `width: 120px` con `display: inline` y con `display: inline-block`. ¿Qué cambia?

```playground Ejercicio 1
<p>Temas: <span class="etiqueta">HTML</span><span class="etiqueta">CSS</span><span class="etiqueta">Diseño</span></p>
<!-- css -->

```

> [!HINT] Pista
> Los `<span>` son en línea: el ancho solo funcionará con `inline-block`.

> [!HINT] Solución
> ```css
> .etiqueta {
>   display: inline-block;
>   background: lavender;
>   padding: 4px 10px;
>   border-radius: 999px;
>   margin-right: 4px;
> }
> ```
> Con `display: inline`, el `width` se ignora; con `inline-block`, cada etiqueta mide 120px.

### Ejercicio 2: el menú en línea (medio)

Haz que este menú se vea en horizontal, sin viñetas, con cada enlace como un botón con relleno, borde de `2px` negro y un `:hover` con fondo amarillo.

```playground Ejercicio 2
<ul class="menu">
  <li><a href="#">Recetas</a></li>
  <li><a href="#">Vídeos</a></li>
  <li><a href="#">Sobre mí</a></li>
</ul>
<!-- css -->

```

> [!HINT] Pista
> Tres reglas: la lista (`list-style` y `padding`), los `li` (`display`) y los `a` (aspecto de botón).

> [!HINT] Solución
> ```css
> .menu {
>   list-style: none;
>   padding: 0;
> }
>
> .menu li {
>   display: inline-block;
> }
>
> .menu a {
>   display: inline-block;
>   padding: 8px 14px;
>   border: 2px solid black;
>   color: black;
>   text-decoration: none;
> }
>
> .menu a:hover,
> .menu a:focus {
>   background: yellow;
> }
> ```

## Ficha resumen

- **Flujo normal**: bloques de arriba abajo; elementos en línea dentro del texto.
- **Bloque**: línea nueva, todo el ancho, acepta `width`/`height`. **En línea**: mide su contenido, ignora `width`/`height`.
- `display: inline-block` = en línea pero con medidas de bloque.
- `display: none` = oculto y sin ocupar espacio.
- Menús: `list-style: none; padding: 0;` en la lista.

## Glosario

| Término | Definición |
| --- | --- |
| Flujo normal | Colocación por defecto de las cajas: los bloques se apilan y los elementos en línea siguen el texto. |
| `display` | Propiedad que decide el tipo de caja de un elemento: `block`, `inline`, `inline-block`, `none`, `flex`, `grid`… |
| Elemento de bloque | Elemento que empieza en una línea nueva y ocupa todo el ancho disponible. |
| Elemento en línea | Elemento que se coloca dentro de la línea de texto y mide lo que su contenido. |
| `inline-block` | Valor de `display` para cajas que van en línea pero aceptan ancho, alto y márgenes. |
| `outline` | Contorno que se dibuja por fuera de una caja sin ocupar espacio. |
