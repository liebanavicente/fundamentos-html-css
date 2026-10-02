---
title: "Flexbox: cajas en fila"
summary: "Coloca elementos en una fila o una columna, repártelos y céntralos con unas pocas propiedades."
part: maquetar
minutes: 45
goals:
  - "Convertir una caja en contenedor flex y entender qué son sus elementos hijos."
  - "Repartir y alinear con `justify-content`, `align-items` y `gap`."
  - "Cambiar la dirección con `flex-direction` y saltar de línea con `flex-wrap`."
  - "Centrar cualquier cosa en vertical y en horizontal."
quiz:
  - question: "¿A quién se le pone `display: flex`?"
    options:
      - "A cada uno de los elementos que quieres colocar"
      - "Al padre que los contiene"
      - "Al `<body>` siempre"
      - "A la imagen"
    correct: 1
    explanation: "Se lo pones al contenedor; sus hijos directos pasan a ser elementos flex y se colocan en fila."
  - question: "En una fila (`flex-direction: row`), ¿qué propiedad reparte los elementos en horizontal?"
    options:
      - "`align-items`"
      - "`justify-content`"
      - "`text-align`"
      - "`gap`"
    correct: 1
    explanation: "`justify-content` trabaja en el eje principal (horizontal en una fila). `align-items` en el eje cruzado (vertical)."
  - question: "¿Cómo separas los elementos 20px entre sí sin poner márgenes?"
    options:
      - "`space: 20px;`"
      - "`gap: 20px;`"
      - "`padding: 20px;`"
      - "`margin: 20px;`"
    correct: 1
    explanation: "`gap` crea un hueco solo entre los elementos, nunca en los extremos."
  - question: "¿Qué valor de `justify-content` deja el primer elemento a la izquierda, el último a la derecha y reparte el resto?"
    options:
      - "`center`"
      - "`space-between`"
      - "`flex-start`"
      - "`stretch`"
    correct: 1
    explanation: "`space-between` es el típico de las cabeceras: logo a un lado y menú al otro."
  - question: "¿Qué combinación centra un elemento en horizontal y en vertical dentro de su contenedor?"
    options:
      - "`text-align: center; vertical-align: middle;`"
      - "`display: flex; justify-content: center; align-items: center;`"
      - "`margin: auto;` en el contenedor"
      - "`position: center;`"
    correct: 1
    explanation: "Las tres líneas mágicas. El contenedor necesita alto para que se note el centrado vertical."
  - question: "¿Qué hace `flex: 1` en un elemento hijo?"
    options:
      - "Lo oculta"
      - "Hace que crezca para ocupar el espacio libre"
      - "Lo pone el primero"
      - "Le da 1px de borde"
    correct: 1
    explanation: "Los elementos con `flex: 1` se reparten el espacio sobrante a partes iguales."
cards:
  - front: "Activar Flexbox"
    back: "`display: flex;` en el contenedor. Sus hijos directos se colocan en fila."
  - front: "Eje principal y eje cruzado"
    back: "En una fila, el principal es horizontal y el cruzado vertical. En una columna, al revés."
  - front: "`justify-content`"
    back: "Reparte en el eje principal: `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly`."
  - front: "`align-items`"
    back: "Alinea en el eje cruzado: `stretch` (por defecto), `flex-start`, `center`, `flex-end`."
  - front: "`gap`"
    back: "Espacio entre los elementos (no en los extremos)."
  - front: "`flex-direction`"
    back: "`row` (fila, por defecto) o `column` (columna)."
  - front: "`flex-wrap: wrap`"
    back: "Si no caben en una fila, los elementos bajan a la siguiente."
  - front: "Centrar en los dos ejes"
    back: "`display: flex; justify-content: center; align-items: center;`"
---

## El problema que resuelve

Durante años, poner tres cajas una al lado de la otra, o centrar algo en vertical, era sorprendentemente difícil en CSS. **Flexbox** (de *flexible box*, caja flexible) lo resolvió. Hoy es la herramienta que más usarás para colocar cosas: menús, cabeceras, botones con icono, tarjetas en fila…

## Contenedor y elementos

Flexbox siempre funciona con **dos niveles**:

- El **contenedor flex**: el padre, al que le pones `display: flex`.
- Los **elementos flex**: sus **hijos directos**, que se colocan solos en fila.

```playground Tu primer flex
<div class="contenedor">
  <div class="caja">1</div>
  <div class="caja">2</div>
  <div class="caja">3</div>
</div>
<!-- css -->
.contenedor {
  display: flex;
  background: #eee;
  padding: 10px;
}

.caja {
  background: tomato;
  color: white;
  font-size: 2rem;
  padding: 20px;
}
```

> [!TIP]
> Borra `display: flex;` del ejemplo: las cajas vuelven a apilarse (son `<div>`, de bloque). Vuelve a escribirlo y se ponen en fila. Esa es toda la magia: **una línea en el padre**.

## Los dos ejes

Flexbox piensa en dos ejes:

- El **eje principal** (*main axis*): la dirección en la que se colocan los elementos. En una fila, **horizontal**.
- El **eje cruzado** (*cross axis*): el perpendicular. En una fila, **vertical**.

```text
           eje principal →
        ┌──────────────────────────┐
  eje   │ [ 1 ]  [ 2 ]  [ 3 ]      │
cruzado │                          │
   ↓    └──────────────────────────┘
```

Hay una propiedad para cada eje, y entenderlo es la clave de Flexbox.

## Repartir: `justify-content` (eje principal)

```playground justify-content
<p>flex-start (por defecto)</p>
<div class="fila" style="justify-content: flex-start"><span>1</span><span>2</span><span>3</span></div>
<p>center</p>
<div class="fila" style="justify-content: center"><span>1</span><span>2</span><span>3</span></div>
<p>flex-end</p>
<div class="fila" style="justify-content: flex-end"><span>1</span><span>2</span><span>3</span></div>
<p>space-between</p>
<div class="fila" style="justify-content: space-between"><span>1</span><span>2</span><span>3</span></div>
<p>space-evenly</p>
<div class="fila" style="justify-content: space-evenly"><span>1</span><span>2</span><span>3</span></div>
<!-- css -->
body { font-family: sans-serif; }
p { margin: 12px 0 4px; font-size: 0.85rem; }

.fila {
  display: flex;
  background: #eee;
}

.fila span {
  background: royalblue;
  color: white;
  padding: 8px 16px;
}
```

(En este ejemplo usamos el atributo `style` solo para poner las cinco variantes juntas; en tus proyectos, mejor con clases.)

| Valor | Qué hace |
| --- | --- |
| `flex-start` | Todos al principio (izquierda) |
| `center` | Todos en el centro |
| `flex-end` | Todos al final (derecha) |
| `space-between` | El primero al principio, el último al final y el resto repartido |
| `space-around` / `space-evenly` | Espacio repartido también en los extremos |

## Alinear: `align-items` (eje cruzado)

Cuando los elementos tienen alturas distintas, o el contenedor es más alto que ellos, `align-items` decide cómo se alinean en vertical:

```playground align-items
<div class="fila">
  <span class="bajo">Bajo</span>
  <span class="alto">Alto<br>de<br>verdad</span>
  <span class="bajo">Bajo</span>
</div>
<!-- css -->
.fila {
  display: flex;
  align-items: center; /* prueba: stretch, flex-start, flex-end */
  gap: 10px;
  height: 160px;
  background: #eee;
}

.fila span {
  background: seagreen;
  color: white;
  padding: 10px;
}
```

Por defecto es `stretch`: todos se **estiran** hasta la altura del contenedor. Por eso, a veces, al poner `display: flex` las cajas se vuelven todas igual de altas.

## Separar: `gap`

`gap` pone un hueco **entre** los elementos (nunca en los extremos). Es mucho más cómodo que los márgenes:

```css
.contenedor {
  display: flex;
  gap: 16px;
}
```

## Las tres líneas más famosas de CSS

Centrar algo en horizontal **y** en vertical:

```playground Centrado perfecto
<div class="escena">
  <p class="mensaje">¡Centrado!</p>
</div>
<!-- css -->
.escena {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 240px;
  background: linear-gradient(135deg, #d7ff00, #00c2a8);
}

.mensaje {
  margin: 0;
  padding: 16px 24px;
  background: white;
  border-radius: 12px;
  font: bold 1.5rem sans-serif;
}
```

> [!NOTE]
> El contenedor necesita **altura** para que se note el centrado vertical. Si mide justo lo que su contenido, no hay espacio en el que centrar.

## Dirección: `flex-direction`

Con `flex-direction: column` los elementos se colocan **en columna**. Y ojo: **los ejes se intercambian**. Ahora el principal es el vertical, así que `justify-content` trabaja en vertical y `align-items` en horizontal.

```css
.lateral {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
```

¿Para qué una columna, si los bloques ya se apilan? Por `gap`, por el centrado y por poder cambiar de fila a columna según el tamaño de pantalla, como verás en la lección de responsive.

## Cuando no caben: `flex-wrap`

Por defecto, Flexbox intenta meter todos los elementos **en una sola fila**, aunque tenga que encogerlos. Con `flex-wrap: wrap`, los que no caben **bajan a la línea siguiente**:

```playground flex-wrap
<div class="galeria">
  <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div>
</div>
<!-- css -->
.galeria {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.galeria div {
  width: 120px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: orchid;
  color: white;
  font-size: 1.5rem;
  border-radius: 8px;
}
```

> [!TIP]
> Fíjate en que cada `div` de la galería es a la vez **elemento flex** (de `.galeria`) y **contenedor flex** (para centrar su número). Anidar contenedores flex es lo más normal del mundo.

## Que un elemento crezca: `flex: 1`

Las propiedades anteriores van en el **contenedor**. Hay una muy útil que va en un **elemento**: `flex: 1` le dice que **crezca** para ocupar el espacio libre.

```playground flex: 1
<form class="buscador">
  <input type="search" placeholder="Busca una receta…" aria-label="Buscar">
  <button>Buscar</button>
</form>
<!-- css -->
.buscador {
  display: flex;
  gap: 8px;
}

.buscador input {
  flex: 1;
  padding: 10px;
}

.buscador button {
  padding: 10px 16px;
}
```

El botón mide lo que necesita y el campo de búsqueda se estira para ocupar el resto. Si varios elementos tienen `flex: 1`, se reparten el espacio a partes iguales.

## El patrón de la cabecera

Juntando todo, la cabecera que tienen la mayoría de webs:

```playground Cabecera con Flexbox
<header class="cabecera">
  <a class="logo" href="#">Verdulería Paca</a>
  <nav>
    <ul class="menu">
      <li><a href="#">Productos</a></li>
      <li><a href="#">Recetas</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </nav>
</header>
<!-- css -->
body {
  margin: 0;
  font-family: system-ui, sans-serif;
}

.cabecera {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: #2d6a4f;
}

.cabecera a {
  color: white;
  text-decoration: none;
}

.logo {
  font-weight: 800;
  font-size: 1.25rem;
}

.menu {
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
}
```

## Errores típicos

- **Poner `display: flex` en los hijos** en lugar de en el padre.
- **Esperar que afecte a los nietos.** Flexbox solo coloca a los hijos **directos**.
- **Confundir los ejes**: usar `align-items` para repartir en horizontal en una fila, o no darse cuenta de que en `column` se intercambian.
- **Querer centrar en vertical sin que el contenedor tenga altura.**
- **Usar márgenes para separar** cuando `gap` lo hace mejor.
- **Olvidar `flex-wrap: wrap`** y que los elementos se aplasten en pantallas pequeñas.

## Ejercicios

### Ejercicio 1: tres tarjetas en fila (fácil)

Pon las tres tarjetas en fila, con `20px` de separación entre ellas.

```playground Ejercicio 1
<section class="planes">
  <article class="plan">Básico<br>5 €</article>
  <article class="plan">Pro<br>10 €</article>
  <article class="plan">Empresa<br>25 €</article>
</section>
<!-- css -->
.plan {
  padding: 24px;
  border: 2px solid black;
  border-radius: 12px;
  text-align: center;
  font-family: sans-serif;
}
```

> [!HINT] Pista
> ¿Quién es el padre de las tarjetas? A él le toca `display: flex` y `gap`.

> [!HINT] Solución
> ```css
> .planes {
>   display: flex;
>   gap: 20px;
> }
> ```

### Ejercicio 2: el pie de página (medio)

Coloca el texto del copyright a la izquierda y los enlaces a la derecha, centrados en vertical, con `12px` entre los enlaces.

```playground Ejercicio 2
<footer class="pie">
  <p>© 2026 Mi web</p>
  <div class="redes">
    <a href="#">Instagram</a>
    <a href="#">YouTube</a>
    <a href="#">Correo</a>
  </div>
</footer>
<!-- css -->
.pie {
  padding: 16px;
  background: #222;
  color: white;
  font-family: sans-serif;
}

.pie a {
  color: #d7ff00;
}
```

> [!HINT] Pista 1
> Necesitas dos contenedores flex: `.pie` (para el reparto izquierda/derecha) y `.redes` (para el hueco entre enlaces).

> [!HINT] Pista 2
> Izquierda y derecha: `space-between`. Centrado vertical: `align-items`.

> [!HINT] Solución
> ```css
> .pie {
>   display: flex;
>   justify-content: space-between;
>   align-items: center;
>   padding: 16px;
>   background: #222;
>   color: white;
>   font-family: sans-serif;
> }
>
> .redes {
>   display: flex;
>   gap: 12px;
> }
> ```

### Ejercicio 3: la portada centrada (reto)

Haz una portada de `400px` de alto con un fondo de color, y en su centro exacto un título y un botón **uno debajo del otro**, separados `16px`.

```playground Ejercicio 3
<section class="portada">
  <h1>Aprende a cocinar</h1>
  <a class="boton" href="#">Empezar</a>
</section>
<!-- css -->
body {
  margin: 0;
  font-family: sans-serif;
}

.boton {
  padding: 12px 24px;
  background: black;
  color: white;
  text-decoration: none;
}
```

> [!HINT] Pista 1
> Uno debajo del otro: `flex-direction: column`.

> [!HINT] Pista 2
> En columna los ejes se intercambian, pero las tres líneas del centrado siguen funcionando igual: `justify-content: center` y `align-items: center` centran en los dos ejes.

> [!HINT] Solución
> ```css
> .portada {
>   display: flex;
>   flex-direction: column;
>   justify-content: center;
>   align-items: center;
>   gap: 16px;
>   height: 400px;
>   background: #ffd6a5;
> }
>
> .portada h1 {
>   margin: 0;
> }
> ```

## Ficha resumen

- `display: flex` en el **padre**; sus **hijos directos** se colocan en fila.
- **Eje principal** (horizontal en fila) → `justify-content`. **Eje cruzado** (vertical en fila) → `align-items`.
- `gap` separa los elementos. `flex-wrap: wrap` los deja bajar de línea.
- `flex-direction: column` los pone en columna (y se intercambian los ejes).
- `flex: 1` en un hijo: crece para ocupar el espacio libre.
- Centrar: `display: flex; justify-content: center; align-items: center;` (con altura).

## Glosario

| Término | Definición |
| --- | --- |
| Flexbox | Sistema de CSS para colocar elementos en una fila o una columna, repartirlos y alinearlos. |
| Contenedor flex | Elemento con `display: flex`, cuyos hijos directos se colocan con Flexbox. |
| Elemento flex | Cada hijo directo de un contenedor flex. |
| Eje principal | Dirección en la que se colocan los elementos flex: horizontal en una fila, vertical en una columna. |
| Eje cruzado | Dirección perpendicular al eje principal. |
| `justify-content` | Propiedad que reparte los elementos en el eje principal. |
| `align-items` | Propiedad que alinea los elementos en el eje cruzado. |
| `gap` | Espacio entre los elementos de un contenedor flex o grid. |
| `flex-wrap` | Propiedad que permite que los elementos flex bajen a una nueva línea si no caben. |
