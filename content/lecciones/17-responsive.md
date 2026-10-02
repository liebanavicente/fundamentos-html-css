---
title: "Diseño responsive"
summary: "Haz que tu web se vea bien en un móvil, una tableta y un ordenador con la etiqueta viewport, unidades flexibles y media queries."
part: maquetar
minutes: 40
goals:
  - "Explicar qué es el diseño responsive y por qué se empieza por el móvil."
  - "Usar la etiqueta `<meta name=\"viewport\">` y saber qué pasa sin ella."
  - "Escribir media queries con `min-width`."
  - "Hacer imágenes fluidas y probar tu web con el modo dispositivo de las DevTools."
quiz:
  - question: "¿Qué es el diseño responsive?"
    options:
      - "Una web que responde rápido"
      - "Una web que se adapta al tamaño de la pantalla"
      - "Una web con animaciones"
      - "Una web solo para móviles"
    correct: 1
    explanation: "La misma página reorganiza su contenido para verse bien en cualquier pantalla."
  - question: "¿Qué pasa en el móvil si olvidas `<meta name=\"viewport\" …>`?"
    options:
      - "Nada"
      - "El móvil muestra la página como si fuera un ordenador, en miniatura"
      - "La página no carga"
      - "Se ve en blanco y negro"
    correct: 1
    explanation: "Sin ella, el móvil simula una pantalla de unos 980px y lo encoge todo. Tus media queries no funcionarían bien."
  - question: "¿Cuándo se aplica `@media (min-width: 768px) { … }`?"
    options:
      - "Cuando la pantalla mide menos de 768px"
      - "Cuando la pantalla mide 768px o más"
      - "Solo en tabletas"
      - "Siempre"
    correct: 1
    explanation: "`min-width` significa «a partir de este ancho». Es lo que se usa al diseñar primero para el móvil."
  - question: "¿Qué significa diseñar «mobile first»?"
    options:
      - "Hacer solo la versión móvil"
      - "Escribir primero los estilos para el móvil y añadir cambios para pantallas grandes"
      - "Probar primero en un móvil Android"
      - "Usar solo Flexbox"
    correct: 1
    explanation: "El CSS base es para pantallas pequeñas y las media queries con `min-width` añaden lo necesario para las grandes."
  - question: "¿Qué CSS hace que una imagen nunca se salga de su contenedor?"
    options:
      - "`img { width: 1000px; }`"
      - "`img { max-width: 100%; height: auto; }`"
      - "`img { display: none; }`"
      - "`img { overflow: hidden; }`"
    correct: 1
    explanation: "Como máximo mide el ancho del contenedor, y `height: auto` mantiene la proporción."
cards:
  - front: "Diseño responsive"
    back: "Diseño que se adapta al tamaño de la pantalla: móvil, tableta y ordenador con la misma página."
  - front: "Etiqueta viewport"
    back: "`<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">` en el `<head>`."
  - front: "Media query mobile first"
    back: "`@media (min-width: 768px) { … }`: estilos que se añaden a partir de 768px de ancho."
  - front: "Imágenes fluidas"
    back: "`img { max-width: 100%; height: auto; }`"
  - front: "Mobile first en una frase"
    back: "Primero el CSS para el móvil; luego, con `min-width`, lo que cambia en pantallas grandes."
  - front: "Probar en tamaño móvil"
    back: "DevTools → icono de móvil y tableta (Ctrl + Mayús + M)."
---

## Una web, muchas pantallas

Más de la mitad de las visitas a cualquier web llegan desde un **móvil**. El resto, desde tabletas, portátiles y pantallas enormes. No tiene sentido hacer una web para cada tamaño: lo que se hace es una sola web que **se adapta**. A eso se le llama **diseño responsive** (adaptable).

Buena noticia: ya llevas medio camino hecho. El HTML se adapta solo al ancho de la pantalla por naturaleza, y herramientas como `max-width`, `flex-wrap` o `repeat(auto-fit, minmax())` ya son responsive. En esta lección añadimos las piezas que faltan.

## 1. La etiqueta viewport

Es la línea que pusimos en el esqueleto de la lección 3 sin explicarla del todo:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Sin ella, el navegador del móvil **finge ser un ordenador**: dibuja la página como si la pantalla midiera unos 980px y luego la encoge para que quepa. Resultado: todo diminuto y hay que hacer zoom con los dedos. Con ella, le dices: «usa el ancho real del dispositivo».

> [!IMPORTANT]
> Ponla **siempre** en el `<head>`. Sin ella, nada de lo que viene a continuación funciona en un móvil de verdad.

## 2. Contenido flexible

Antes de escribir una sola media query, asegúrate de que nada tiene un ancho fijo que no quepa en un móvil:

```css
* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
  height: auto;
}

.contenedor {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
}
```

- **Imágenes fluidas**: nunca más anchas que su contenedor, y sin deformarse.
- **`max-width` en lugar de `width`** para los contenedores.
- **Un poco de `padding` a los lados**, para que el texto no quede pegado al borde del móvil.

## 3. Media queries

Una **media query** es una regla con condición: «aplica estos estilos **solo si** la pantalla cumple esto».

```css
@media (min-width: 768px) {
  /* Estas reglas solo se aplican en pantallas de 768px de ancho o más */
  h1 {
    font-size: 3rem;
  }
}
```

Dentro de las llaves de `@media` van reglas normales, con su selector y sus llaves. Fíjate en las **dos llaves de cierre**: una de la regla y otra de la media query.

### Mobile first: primero el móvil

Hay dos formas de pensar, y la recomendada es **mobile first** (primero el móvil):

1. Escribe el CSS **para el móvil**, sin media queries. Suele ser lo más sencillo: todo en una columna.
2. Añade media queries con **`min-width`** para lo que cambia en pantallas más grandes.

```playground Mobile first
<div class="tarjetas">
  <article>Tarjeta 1</article>
  <article>Tarjeta 2</article>
  <article>Tarjeta 3</article>
</div>
<!-- css -->
/* Móvil: una columna */
.tarjetas {
  display: grid;
  gap: 12px;
}

.tarjetas article {
  padding: 24px;
  background: #ffd6a5;
  border-radius: 12px;
  font: bold 1.2rem sans-serif;
}

/* Tableta: dos columnas */
@media (min-width: 500px) {
  .tarjetas {
    grid-template-columns: 1fr 1fr;
  }
}

/* Ordenador: tres columnas */
@media (min-width: 800px) {
  .tarjetas {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

> [!TIP]
> La vista previa de la derecha es estrecha, así que verás la versión de una o dos columnas. Pulsa **«Abrir en Práctica»** para tenerla más ancha, o haz más grande y más pequeña la ventana del navegador para ver cómo cambia.

### ¿Qué anchos uso?

No hay que diseñar para cada modelo de móvil. Los **puntos de ruptura** (*breakpoints*) se eligen donde **tu diseño empieza a verse mal**. Como punto de partida, estos sirven para casi todo:

| Desde | Pensado para |
| --- | --- |
| 0 (sin media query) | Móviles |
| `min-width: 768px` | Tabletas y móviles en horizontal |
| `min-width: 1024px` | Portátiles y ordenadores |

## Un caso real: el menú

En el móvil no cabe un menú horizontal con muchos enlaces. Una solución sencilla: en el móvil, todo en columna; a partir de 768px, logo a un lado y menú al otro.

```playground Cabecera responsive
<header class="cabecera">
  <a class="logo" href="#">Estudio Lumen</a>
  <nav>
    <ul class="menu">
      <li><a href="#">Proyectos</a></li>
      <li><a href="#">Servicios</a></li>
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
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #1d3557;
}

.cabecera a {
  color: white;
  text-decoration: none;
}

.logo {
  font-weight: 800;
  font-size: 1.3rem;
}

.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
}

@media (min-width: 768px) {
  .cabecera {
    flex-direction: row;
    justify-content: space-between;
  }
}
```

## Prueba en tamaño móvil con las DevTools

No necesitas un móvil para probar. En las DevTools (F12), pulsa el icono de **móvil y tableta** (o **Ctrl + Mayús + M**; en Mac, **Cmd + Mayús + M**). Arriba podrás elegir un modelo de móvil o arrastrar para cambiar el ancho, y ver tu web como en ese dispositivo.

> [!TIP]
> Además de los modelos de la lista, prueba a arrastrar el ancho poco a poco desde 320px hasta 1400px. Allí donde algo se rompa o se vea raro, ahí necesitas un punto de ruptura.

## Errores típicos

- **Olvidar la etiqueta viewport**: en el ordenador todo funciona, en el móvil no.
- **Anchos fijos en píxeles** (`width: 800px`) que obligan a desplazarse en horizontal en el móvil.
- **Imágenes sin `max-width: 100%`** que se salen de la pantalla.
- **Olvidar una llave** al cerrar la media query: todo lo que viene después deja de funcionar.
- **Escribir la condición sin paréntesis**: `@media min-width: 768px` no funciona; es `@media (min-width: 768px)`.
- **Mezclar `min-width` y `max-width` sin orden** y que unas reglas pisen a otras. Elige mobile first y usa `min-width`.

## Ejercicios

### Ejercicio 1: la galería adaptable (fácil)

Haz que estas cajas estén en una columna en el móvil, en dos a partir de `500px` y en cuatro a partir de `800px`.

```playground Ejercicio 1
<div class="galeria">
  <div>1</div><div>2</div><div>3</div><div>4</div>
</div>
<!-- css -->
.galeria {
  display: grid;
  gap: 10px;
}

.galeria div {
  padding: 30px;
  background: lightseagreen;
  color: white;
  font: bold 1.5rem sans-serif;
  text-align: center;
}
```

> [!HINT] Pista
> El CSS base ya es la versión móvil. Añade dos media queries con `min-width` que cambien `grid-template-columns`.

> [!HINT] Solución
> ```css
> @media (min-width: 500px) {
>   .galeria {
>     grid-template-columns: repeat(2, 1fr);
>   }
> }
>
> @media (min-width: 800px) {
>   .galeria {
>     grid-template-columns: repeat(4, 1fr);
>   }
> }
> ```

### Ejercicio 2: texto más grande en el ordenador (fácil)

El título mide `1.75rem` en el móvil. Haz que mida `3rem` a partir de `768px`, y que el párrafo pase de `1rem` a `1.25rem`.

```playground Ejercicio 2
<h1>Bienvenida a mi web</h1>
<p>Aquí cuento quién soy y a qué me dedico.</p>
<!-- css -->
h1 {
  font-size: 1.75rem;
}

p {
  font-size: 1rem;
}
```

> [!HINT] Pista
> Una sola media query puede contener varias reglas.

> [!HINT] Solución
> ```css
> @media (min-width: 768px) {
>   h1 {
>     font-size: 3rem;
>   }
>
>   p {
>     font-size: 1.25rem;
>   }
> }
> ```

### Ejercicio 3: contenido con barra lateral (reto)

En el móvil, el artículo y la barra lateral van uno debajo del otro. A partir de `900px`, deben ir lado a lado: el artículo con `3fr` y la barra con `1fr`.

```playground Ejercicio 3
<div class="pagina">
  <article>Artículo principal: es la parte más larga e importante.</article>
  <aside>Barra lateral con enlaces relacionados.</aside>
</div>
<!-- css -->
.pagina > * {
  padding: 20px;
  background: #e9ecef;
  border-radius: 8px;
  font-family: sans-serif;
}
```

> [!HINT] Pista
> Usa Grid en `.pagina` con `gap` en el CSS base (una columna) y define las dos columnas dentro de la media query.

> [!HINT] Solución
> ```css
> .pagina {
>   display: grid;
>   gap: 16px;
> }
>
> @media (min-width: 900px) {
>   .pagina {
>     grid-template-columns: 3fr 1fr;
>   }
> }
> ```

## Ficha resumen

- **Responsive** = una sola web que se adapta a cualquier pantalla.
- Siempre la etiqueta **viewport** en el `<head>`.
- Base flexible: `box-sizing: border-box`, `img { max-width: 100%; height: auto; }`, contenedores con `max-width`.
- **Mobile first**: CSS para el móvil y `@media (min-width: …)` para pantallas mayores.
- Puntos de ruptura donde tu diseño lo necesite (de partida, 768px y 1024px).
- Prueba con el **modo dispositivo** de las DevTools (Ctrl + Mayús + M).

## Glosario

| Término | Definición |
| --- | --- |
| Diseño responsive | Diseño que se adapta al tamaño de la pantalla en la que se ve la página. |
| Viewport | Zona de la ventana del navegador en la que se ve la página. |
| Media query | Bloque de CSS que solo se aplica si la pantalla cumple una condición, como un ancho mínimo. |
| Mobile first | Forma de trabajar que escribe primero el CSS del móvil y añade cambios para pantallas grandes. |
| Punto de ruptura | Ancho de pantalla en el que el diseño cambia mediante una media query (*breakpoint*). |
| Imagen fluida | Imagen que se encoge con su contenedor gracias a `max-width: 100%`. |
