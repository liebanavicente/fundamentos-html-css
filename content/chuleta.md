## Esqueleto de una página

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título de la pestaña</title>
    <link rel="stylesheet" href="estilos.css">
  </head>
  <body>
    <!-- Todo lo visible -->
  </body>
</html>
```

## HTML: texto

| Etiqueta | Para qué | Lección |
| --- | --- | --- |
| `<h1>` … `<h6>` | Encabezados, del más al menos importante. Un solo `<h1>` | [04](/lecciones/textos) |
| `<p>` | Párrafo | [04](/lecciones/textos) |
| `<strong>` | Texto importante (negrita) | [04](/lecciones/textos) |
| `<em>` | Énfasis (cursiva) | [04](/lecciones/textos) |
| `<br>` | Salto de línea dentro de un párrafo | [04](/lecciones/textos) |
| `<hr>` | Cambio de tema (línea horizontal) | [04](/lecciones/textos) |
| `<!-- … -->` | Comentario | [04](/lecciones/textos) |
| `&lt;` `&gt;` `&amp;` | Los caracteres `<`, `>` y `&` | [04](/lecciones/textos) |

## HTML: listas, enlaces e imágenes

| Etiqueta | Para qué | Lección |
| --- | --- | --- |
| `<ul>` + `<li>` | Lista sin orden (viñetas) | [05](/lecciones/listas-y-enlaces) |
| `<ol>` + `<li>` | Lista ordenada (números) | [05](/lecciones/listas-y-enlaces) |
| `<a href="…">` | Enlace. `#id` para ir a una parte de la página; `mailto:` para correo | [05](/lecciones/listas-y-enlaces) |
| `<img src="…" alt="…">` | Imagen, siempre con `alt` | [06](/lecciones/imagenes) |
| `<figure>` + `<figcaption>` | Imagen con pie de foto | [06](/lecciones/imagenes) |
| `<video controls>` / `<audio controls>` | Vídeo y audio | [06](/lecciones/imagenes) |

## HTML: estructura

| Etiqueta | Para qué | Lección |
| --- | --- | --- |
| `<header>` | Cabecera | [07](/lecciones/estructura-semantica) |
| `<nav>` | Menú de navegación | [07](/lecciones/estructura-semantica) |
| `<main>` | Contenido principal (solo uno) | [07](/lecciones/estructura-semantica) |
| `<section>` | Parte temática con su encabezado | [07](/lecciones/estructura-semantica) |
| `<article>` | Contenido independiente: post, noticia, producto | [07](/lecciones/estructura-semantica) |
| `<aside>` | Contenido secundario | [07](/lecciones/estructura-semantica) |
| `<footer>` | Pie | [07](/lecciones/estructura-semantica) |
| `<div>` / `<span>` | Cajas sin significado (bloque / en línea) | [07](/lecciones/estructura-semantica) |

## HTML: tablas y formularios

| Etiqueta | Para qué | Lección |
| --- | --- | --- |
| `<table>` `<tr>` `<th>` `<td>` | Tabla, fila, celda de cabecera, celda de datos | [08](/lecciones/tablas) |
| `colspan` / `rowspan` | Celda que ocupa varias columnas / filas | [08](/lecciones/tablas) |
| `<form>` | Formulario | [09](/lecciones/formularios) |
| `<label for="id">` | Etiqueta de un campo | [09](/lecciones/formularios) |
| `<input type="…" name="…">` | Campo: `text`, `email`, `password`, `number`, `date`, `checkbox`, `radio`… | [09](/lecciones/formularios) |
| `<textarea>` | Texto de varias líneas | [09](/lecciones/formularios) |
| `<select>` + `<option>` | Desplegable | [09](/lecciones/formularios) |
| `<button type="submit">` | Botón de enviar | [09](/lecciones/formularios) |
| `required`, `minlength`, `min`, `max` | Validación sin programar | [09](/lecciones/formularios) |

## CSS: sintaxis y selectores

```css
selector {
  propiedad: valor;
}
```

| Selector | Selecciona | Lección |
| --- | --- | --- |
| `p` | Todos los párrafos | [10](/lecciones/primeros-pasos-css) |
| `.aviso` | Los elementos con `class="aviso"` | [11](/lecciones/selectores) |
| `#portada` | El elemento con `id="portada"` | [11](/lecciones/selectores) |
| `h1, h2` | Los `h1` y los `h2` | [11](/lecciones/selectores) |
| `nav a` | Los `a` que están dentro de un `nav` | [11](/lecciones/selectores) |
| `.boton.grande` | Elementos con las dos clases | [11](/lecciones/selectores) |
| `a:hover`, `a:focus` | Enlace con el ratón encima / con el foco | [11](/lecciones/selectores) |
| `li:nth-child(even)` | Los `li` pares | [11](/lecciones/selectores) |
| `*` | Todos los elementos | [13](/lecciones/modelo-de-caja) |

**Especificidad:** etiqueta < clase < id < `style`. A igualdad, gana la última regla.

## CSS: color y texto

| Propiedad | Ejemplo | Lección |
| --- | --- | --- |
| `color` | `color: #333;` | [12](/lecciones/colores-y-texto) |
| `background-color` | `background-color: rgb(0 0 0 / 50%);` | [12](/lecciones/colores-y-texto) |
| `font-family` | `font-family: "Poppins", sans-serif;` | [12](/lecciones/colores-y-texto) |
| `font-size` | `font-size: 1.25rem;` | [12](/lecciones/colores-y-texto) |
| `font-weight` | `font-weight: bold;` | [12](/lecciones/colores-y-texto) |
| `line-height` | `line-height: 1.6;` | [12](/lecciones/colores-y-texto) |
| `text-align` | `text-align: center;` | [12](/lecciones/colores-y-texto) |
| `text-decoration` | `text-decoration: none;` | [12](/lecciones/colores-y-texto) |
| `text-transform` | `text-transform: uppercase;` | [12](/lecciones/colores-y-texto) |

## CSS: el modelo de caja

| Propiedad | Ejemplo | Lección |
| --- | --- | --- |
| `padding` | `padding: 10px 20px;` (vertical, horizontal) | [13](/lecciones/modelo-de-caja) |
| `margin` | `margin: 0 auto;` (centra un bloque con ancho) | [13](/lecciones/modelo-de-caja) |
| `border` | `border: 2px solid black;` | [13](/lecciones/modelo-de-caja) |
| `border-radius` | `border-radius: 12px;` · `50%` para un círculo | [13](/lecciones/modelo-de-caja) |
| `width` / `max-width` | `max-width: 700px;` | [13](/lecciones/modelo-de-caja) |
| `box-sizing` | `* { box-sizing: border-box; }` | [13](/lecciones/modelo-de-caja) |
| `display` | `block`, `inline`, `inline-block`, `none`, `flex`, `grid` | [14](/lecciones/display) |

Cuatro valores: **arriba, derecha, abajo, izquierda** (como las agujas del reloj).

## CSS: Flexbox

```css
.contenedor {
  display: flex;
  justify-content: space-between; /* eje principal */
  align-items: center;            /* eje cruzado */
  gap: 16px;
  flex-wrap: wrap;
}
```

| Propiedad | Valores | Lección |
| --- | --- | --- |
| `flex-direction` | `row`, `column` | [15](/lecciones/flexbox) |
| `justify-content` | `flex-start`, `center`, `flex-end`, `space-between`, `space-evenly` | [15](/lecciones/flexbox) |
| `align-items` | `stretch`, `flex-start`, `center`, `flex-end` | [15](/lecciones/flexbox) |
| `flex: 1` (en un hijo) | Crece para ocupar el espacio libre | [15](/lecciones/flexbox) |

## CSS: Grid

```css
.galeria {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
```

| Propiedad | Ejemplo | Lección |
| --- | --- | --- |
| `grid-template-columns` | `200px 1fr` · `repeat(3, 1fr)` | [16](/lecciones/grid) |
| `grid-column` | `grid-column: span 2;` | [16](/lecciones/grid) |
| `grid-row` | `grid-row: span 2;` | [16](/lecciones/grid) |

## CSS: responsive

```css
img {
  max-width: 100%;
  height: auto;
}

/* Mobile first: esto se añade a partir de 768px */
@media (min-width: 768px) {
  .menu {
    flex-direction: row;
  }
}
```

Y siempre, en el `<head>`: `<meta name="viewport" content="width=device-width, initial-scale=1.0">` ([17](/lecciones/responsive)).

## Atajos útiles

| Acción | Windows / Linux | Mac |
| --- | --- | --- |
| Guardar | Ctrl + S | Cmd + S |
| Esqueleto HTML en VS Code | `!` + Tab | `!` + Tab |
| Comentar líneas | Ctrl + / | Cmd + / |
| Abrir las DevTools | F12 | Cmd + Opción + I |
| Modo dispositivo | Ctrl + Mayús + M | Cmd + Mayús + M |
| Ver código fuente | Ctrl + U | Cmd + Opción + U |
