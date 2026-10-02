---
title: "Grid: cuadrículas"
summary: "Organiza la página en filas y columnas a la vez: galerías, tarjetas y la estructura completa de una web."
part: maquetar
minutes: 40
goals:
  - "Crear una cuadrícula con `display: grid` y `grid-template-columns`."
  - "Usar la unidad `fr` y la función `repeat()`."
  - "Hacer que un elemento ocupe varias columnas o filas."
  - "Crear una galería que se adapta sola con `auto-fit` y `minmax()`."
  - "Saber cuándo elegir Grid y cuándo Flexbox."
quiz:
  - question: "¿Qué hace `grid-template-columns: 1fr 1fr 1fr;`?"
    options:
      - "Tres filas iguales"
      - "Tres columnas que se reparten el ancho a partes iguales"
      - "Tres columnas de 1px"
      - "Una columna con tres elementos"
    correct: 1
    explanation: "`fr` es una fracción del espacio libre. Tres `1fr` son tres columnas iguales."
  - question: "¿Qué es lo mismo que `1fr 1fr 1fr 1fr`?"
    options:
      - "`repeat(1fr, 4)`"
      - "`repeat(4, 1fr)`"
      - "`4fr`"
      - "`1fr * 4`"
    correct: 1
    explanation: "`repeat(número de veces, tamaño)` evita escribir lo mismo muchas veces."
  - question: "En `grid-template-columns: 200px 1fr;`, ¿qué pasa al hacer la ventana más ancha?"
    options:
      - "Las dos columnas crecen igual"
      - "La primera se queda en 200px y la segunda ocupa el resto"
      - "La primera crece y la segunda no"
      - "Ninguna cambia"
    correct: 1
    explanation: "Es el patrón de barra lateral fija con contenido flexible."
  - question: "¿Cómo haces que un elemento ocupe dos columnas?"
    options:
      - "`grid-column: span 2;`"
      - "`colspan: 2;`"
      - "`width: 2fr;`"
      - "`columns: 2;`"
    correct: 0
    explanation: "`grid-column: span 2` estira el elemento a lo ancho de dos columnas."
  - question: "¿Qué consigue `repeat(auto-fit, minmax(200px, 1fr))`?"
    options:
      - "Siempre dos columnas"
      - "Tantas columnas de al menos 200px como quepan, que se estiran para llenar el ancho"
      - "Columnas de exactamente 200px"
      - "Una sola columna"
    correct: 1
    explanation: "Es la galería que se adapta sola, sin media queries: en el móvil, una columna; en el ordenador, varias."
cards:
  - front: "Activar Grid"
    back: "`display: grid;` en el contenedor, y definir las columnas con `grid-template-columns`."
  - front: "Unidad `fr`"
    back: "Una fracción del espacio libre. `2fr 1fr`: la primera columna mide el doble que la segunda."
  - front: "`repeat()`"
    back: "`repeat(3, 1fr)` = `1fr 1fr 1fr`."
  - front: "Ocupar varias columnas"
    back: "`grid-column: span 2;` (y `grid-row: span 2;` para filas)."
  - front: "Galería adaptable sin media queries"
    back: "`grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));`"
  - front: "¿Grid o Flexbox?"
    back: "Flexbox: una dimensión (una fila o una columna). Grid: dos dimensiones (filas y columnas a la vez)."
---

## Filas y columnas a la vez

Flexbox es genial para colocar cosas **en una fila** (o una columna). Pero cuando quieres una **cuadrícula**, con filas y columnas alineadas a la vez, como una galería de fotos, un catálogo de productos o la estructura completa de una página, la herramienta es **CSS Grid**.

Como en Flexbox, hay un **contenedor** (con `display: grid`) y sus **hijos directos**, que se colocan en las celdas.

```playground Tu primera cuadrícula
<div class="cuadricula">
  <div>1</div><div>2</div><div>3</div>
  <div>4</div><div>5</div><div>6</div>
</div>
<!-- css -->
.cuadricula {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
}

.cuadricula div {
  padding: 24px;
  background: mediumpurple;
  color: white;
  font: bold 1.5rem sans-serif;
  text-align: center;
  border-radius: 8px;
}
```

Con dos líneas has hecho una cuadrícula de tres columnas. Los elementos se van colocando **de izquierda a derecha y de arriba abajo**, y cuando se acaba una fila, empiezan la siguiente. No hace falta decir cuántas filas hay: se crean solas.

## Definir las columnas

`grid-template-columns` dice **cuántas columnas hay y cuánto mide cada una**: un valor por columna.

### La unidad `fr`

`fr` significa **fracción** del espacio libre. Es la unidad estrella de Grid:

| Escribes | Resultado |
| --- | --- |
| `1fr 1fr 1fr` | Tres columnas iguales |
| `2fr 1fr` | Dos columnas: la primera, el doble de ancha |
| `200px 1fr` | Una columna fija de 200px y otra que ocupa el resto |
| `1fr 600px 1fr` | Una columna central fija, con dos laterales flexibles |

```playground Barra lateral con Grid
<div class="pagina">
  <aside>Menú lateral (200px)</aside>
  <main>Contenido principal (1fr): ocupa todo el espacio que queda.</main>
</div>
<!-- css -->
.pagina {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 16px;
  font-family: sans-serif;
}

aside, main {
  padding: 20px;
  border-radius: 8px;
}

aside { background: #ffe066; }
main { background: #e9ecef; }
```

### `repeat()`

Para no escribir lo mismo muchas veces: `repeat(4, 1fr)` es igual que `1fr 1fr 1fr 1fr`.

## Elementos que ocupan más

Un elemento puede ocupar **varias columnas** con `grid-column: span 2`, o **varias filas** con `grid-row: span 2`. Así se hacen esas galerías con una foto destacada:

```playground Celdas grandes
<div class="galeria">
  <div class="destacada">Destacada</div>
  <div>2</div><div>3</div><div>4</div><div>5</div>
  <div class="ancha">Ancha</div>
</div>
<!-- css -->
.galeria {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  font: bold 1.1rem sans-serif;
}

.galeria div {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90px;
  background: lightseagreen;
  color: white;
  border-radius: 8px;
}

.destacada {
  grid-column: span 2;
  grid-row: span 2;
  background: tomato !important;
}

.ancha {
  grid-column: span 3;
}
```

> [!NOTE]
> El `!important` del ejemplo está solo para que se vea el color sin complicar los selectores: como ya sabes, mejor evitarlo en tus proyectos.

## La galería que se adapta sola

Este es probablemente el truco de CSS más útil que vas a aprender. Una sola línea crea una galería que pone **tantas columnas como quepan**:

```css
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

Léelo así: «repite columnas que midan **como mínimo 200px y como máximo 1fr**, y mete **tantas como quepan** (`auto-fit`)».

```playground Galería adaptable
<ul class="productos">
  <li><img src="https://placehold.co/300x200/ffadad/5c1a1a?text=Fresas" alt="Fresas" width="300" height="200"><h3>Fresas</h3><p>3,50 €</p></li>
  <li><img src="https://placehold.co/300x200/ffd6a5/5c3a0a?text=Naranjas" alt="Naranjas" width="300" height="200"><h3>Naranjas</h3><p>2,20 €</p></li>
  <li><img src="https://placehold.co/300x200/caffbf/1b4d12?text=Lechugas" alt="Lechugas" width="300" height="200"><h3>Lechugas</h3><p>1,10 €</p></li>
  <li><img src="https://placehold.co/300x200/fdffb6/5c5a0a?text=Miel" alt="Miel" width="300" height="200"><h3>Miel</h3><p>6,90 €</p></li>
</ul>
<!-- css -->
.productos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
  list-style: none;
  padding: 0;
  font-family: sans-serif;
}

.productos li {
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
}

.productos img {
  display: block;
  width: 100%;
  height: auto;
}

.productos h3, .productos p {
  margin: 8px 12px;
}
```

> [!TIP]
> En la zona de práctica (o en tu ordenador) estira y encoge la ventana: las tarjetas pasan de 4 a 3, 2 y 1 columnas **sin una sola media query**. Fíjate también en `width: 100%; height: auto;` en las imágenes: hace que se ajusten al ancho de su tarjeta sin deformarse.

## ¿Grid o Flexbox?

No compiten: se complementan, y en una misma página usarás los dos.

| Usa **Flexbox** cuando… | Usa **Grid** cuando… |
| --- | --- |
| Colocas cosas en **una sola dirección** (una fila o una columna) | Colocas cosas en **filas y columnas a la vez** |
| El tamaño lo decide el **contenido** (cada botón mide lo que su texto) | El tamaño lo decide la **estructura** (columnas iguales) |
| Menús, cabeceras, botones con icono, centrar algo | Galerías, catálogos, la estructura general de la página |

Una regla práctica: **Grid para la estructura de la página, Flexbox para lo que hay dentro de cada parte.**

## Errores típicos

- **Poner `display: grid` en los hijos** en lugar de en el contenedor.
- **Escribir `grid-template-column`** (sin la «s» final) o `grid-template-columns: 3;` (hay que dar el tamaño de cada columna).
- **Usar márgenes para separar** las celdas en lugar de `gap`.
- **Imágenes que se salen de la celda**: dales `width: 100%` y `height: auto`.
- **Usar Grid para un menú en fila sencillo**, donde Flexbox es más natural.

## Ejercicios

### Ejercicio 1: la cuadrícula de fotos (fácil)

Coloca estas seis fotos en una cuadrícula de 3 columnas iguales con `8px` de separación. Haz que las imágenes ocupen todo el ancho de su celda.

```playground Ejercicio 1
<div class="fotos">
  <img src="https://picsum.photos/id/10/300/300" alt="Bosque junto a un lago">
  <img src="https://picsum.photos/id/11/300/300" alt="Paisaje de montaña">
  <img src="https://picsum.photos/id/12/300/300" alt="Costa con rocas">
  <img src="https://picsum.photos/id/13/300/300" alt="Playa">
  <img src="https://picsum.photos/id/14/300/300" alt="Mar en calma">
  <img src="https://picsum.photos/id/15/300/300" alt="Río entre rocas">
</div>
<!-- css -->

```

> [!HINT] Pista
> En el contenedor: `display`, `grid-template-columns` con `repeat()` y `gap`. En las imágenes: `width: 100%`.

> [!HINT] Solución
> ```css
> .fotos {
>   display: grid;
>   grid-template-columns: repeat(3, 1fr);
>   gap: 8px;
> }
>
> .fotos img {
>   display: block;
>   width: 100%;
>   height: auto;
> }
> ```

### Ejercicio 2: adaptable (medio)

Cambia la cuadrícula del ejercicio anterior para que se adapte sola: columnas de al menos `140px`, tantas como quepan.

> [!HINT] Pista
> `repeat(auto-fit, minmax(…, 1fr))`.

> [!HINT] Solución
> ```css
> .fotos {
>   display: grid;
>   grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
>   gap: 8px;
> }
> ```

### Ejercicio 3: la estructura de una página (reto)

Usa Grid para que la cabecera y el pie ocupen todo el ancho, y en medio haya un contenido principal (3 partes) y una barra lateral (1 parte).

```playground Ejercicio 3
<div class="pagina">
  <header>Cabecera</header>
  <main>Contenido principal</main>
  <aside>Barra lateral</aside>
  <footer>Pie</footer>
</div>
<!-- css -->
.pagina > * {
  padding: 20px;
  background: #e9ecef;
  border-radius: 8px;
  font-family: sans-serif;
}
```

> [!HINT] Pista 1
> Dos columnas: `3fr 1fr`. La cabecera y el pie deben ocupar las dos.

> [!HINT] Pista 2
> `grid-column: span 2` en `header` y `footer`.

> [!HINT] Solución
> ```css
> .pagina {
>   display: grid;
>   grid-template-columns: 3fr 1fr;
>   gap: 12px;
> }
>
> .pagina header,
> .pagina footer {
>   grid-column: span 2;
> }
> ```

## Ficha resumen

- `display: grid` en el contenedor + `grid-template-columns` con un tamaño por columna.
- `fr` = fracción del espacio libre. `repeat(3, 1fr)` = tres columnas iguales.
- `gap` separa filas y columnas.
- `grid-column: span 2` / `grid-row: span 2` = ocupar varias celdas.
- Galería adaptable: `repeat(auto-fit, minmax(200px, 1fr))`.
- **Grid** para dos dimensiones y la estructura; **Flexbox** para una dirección y el interior de cada parte.

## Glosario

| Término | Definición |
| --- | --- |
| CSS Grid | Sistema de CSS para colocar elementos en una cuadrícula de filas y columnas. |
| `grid-template-columns` | Propiedad que define cuántas columnas tiene una cuadrícula y cuánto mide cada una. |
| `fr` | Unidad de Grid que representa una fracción del espacio libre. |
| `repeat()` | Función que repite un tamaño de columna o fila varias veces. |
| `minmax()` | Función que da a una columna un tamaño mínimo y uno máximo. |
| `auto-fit` | Valor de `repeat()` que crea tantas columnas como quepan en el ancho disponible. |
| `span` | Palabra que indica cuántas columnas o filas ocupa un elemento de la cuadrícula. |
