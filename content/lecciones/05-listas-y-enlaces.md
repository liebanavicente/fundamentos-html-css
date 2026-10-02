---
title: "Listas y enlaces"
summary: "Haz listas con viñetas o numeradas y conecta tus páginas con el resto de la web mediante enlaces."
part: html
minutes: 35
goals:
  - "Crear listas sin orden, ordenadas y anidadas."
  - "Enlazar a otras webs, a otras páginas tuyas y a partes de la misma página."
  - "Distinguir una ruta absoluta de una relativa."
quiz:
  - question: "¿Qué lista usarías para los pasos de una receta?"
    options:
      - "`<ul>`"
      - "`<ol>`"
      - "`<li>`"
      - "`<dl>`"
    correct: 1
    explanation: "En una receta el orden importa, así que es una lista ordenada (`<ol>`), que numera sola."
  - question: "¿Qué elementos pueden ir directamente dentro de un `<ul>`?"
    options:
      - "Solo `<li>`"
      - "`<p>` y `<li>`"
      - "Cualquier elemento"
      - "Solo texto"
    correct: 0
    explanation: "Los hijos directos de `<ul>` y `<ol>` son siempre `<li>`. Dentro de cada `<li>` sí puedes poner otras cosas, incluso otra lista."
  - question: "Estás en `index.html` y quieres enlazar a `contacto.html`, que está en la misma carpeta. ¿Qué escribes?"
    options:
      - "`<a href=\"contacto.html\">`"
      - "`<a href=\"/carpeta/contacto\">`"
      - "`<a src=\"contacto.html\">`"
      - "`<a link=\"contacto.html\">`"
    correct: 0
    explanation: "Es una ruta relativa: el nombre del archivo basta porque está en la misma carpeta. El atributo es `href`."
  - question: "¿Qué hace `target=\"_blank\"` en un enlace?"
    options:
      - "Lo deja en blanco"
      - "Abre el enlace en una pestaña nueva"
      - "Desactiva el enlace"
      - "Lo pone en negrita"
    correct: 1
    explanation: "Abre el destino en una pestaña nueva. Úsalo con moderación: normalmente es mejor dejar que la persona decida."
  - question: "¿Cómo enlazas a una sección de la misma página con `id=\"precios\"`?"
    options:
      - "`<a href=\"precios\">`"
      - "`<a href=\"#precios\">`"
      - "`<a href=\".precios\">`"
      - "`<a id=\"precios\">`"
    correct: 1
    explanation: "La almohadilla `#` seguida del id lleva a ese elemento dentro de la página."
  - question: "¿Qué texto de enlace es mejor?"
    options:
      - "«Haz clic aquí»"
      - "«Enlace»"
      - "«Descarga el menú del restaurante (PDF)»"
      - "«https://mirestaurante.es/menu.pdf»"
    correct: 2
    explanation: "El texto debe decir a dónde lleva, también fuera de contexto. Los lectores de pantalla pueden leer la lista de enlaces sueltos."
cards:
  - front: "`<ul>` frente a `<ol>`"
    back: "`<ul>`: lista sin orden (viñetas). `<ol>`: lista ordenada (números)."
  - front: "¿Qué es `<li>`?"
    back: "Cada elemento de una lista (*list item*). Es el único hijo directo de `<ul>` y `<ol>`."
  - front: "Atributo de destino de un enlace"
    back: "`href`: `<a href=\"https://…\">texto</a>`"
  - front: "Ruta absoluta"
    back: "Dirección completa con protocolo y dominio: `https://es.wikipedia.org/wiki/HTML`."
  - front: "Ruta relativa"
    back: "Dirección desde la carpeta del archivo actual: `contacto.html`, `paginas/blog.html`, `../index.html`."
  - front: "¿Qué significa `../` en una ruta?"
    back: "Sube a la carpeta de arriba (la carpeta padre)."
  - front: "Enlace a un correo"
    back: "`<a href=\"mailto:hola@ejemplo.com\">Escríbeme</a>`"
  - front: "Enlace a una parte de la misma página"
    back: "`<a href=\"#contacto\">` lleva al elemento con `id=\"contacto\"`."
---

## Listas sin orden: `<ul>`

Cuando el orden de las cosas no importa, como en la lista de la compra, usa una **lista sin orden** (*unordered list*). Cada elemento va en un `<li>` (*list item*):

```playground Lista de la compra
<h2>Lista de la compra</h2>
<ul>
  <li>Pan</li>
  <li>Leche</li>
  <li>Tomates</li>
</ul>
```

El navegador pone una viñeta delante de cada elemento. Con CSS podrás cambiarla o quitarla.

## Listas ordenadas: `<ol>`

Cuando el orden sí importa (pasos, clasificaciones, instrucciones), usa una **lista ordenada** (*ordered list*). El navegador numera solo:

```playground Pasos de una receta
<h2>Huevo frito</h2>
<ol>
  <li>Calienta aceite en una sartén.</li>
  <li>Casca el huevo con cuidado.</li>
  <li>Échale sal.</li>
  <li>Sácalo cuando la clara esté blanca.</li>
</ol>
```

> [!TIP]
> Mete un paso nuevo en medio del ejemplo: los números se recolocan solos. Por eso no se escriben los números a mano.

`<ol>` tiene algunos atributos útiles:

- `start="5"` empieza a contar desde 5.
- `reversed` cuenta hacia atrás (ideal para un «top 10»).
- `type="a"` usa letras; `type="I"`, números romanos.

## Listas dentro de listas

Dentro de un `<li>` puedes meter otra lista completa. Así se hacen índices y menús con submenús:

```playground Listas anidadas
<ul>
  <li>Frutas
    <ul>
      <li>Manzana</li>
      <li>Plátano</li>
    </ul>
  </li>
  <li>Verduras
    <ul>
      <li>Lechuga</li>
    </ul>
  </li>
</ul>
```

> [!WARNING]
> La lista de dentro va **dentro del `<li>`**, antes de su `</li>`, no suelta entre dos `<li>`. Los hijos directos de `<ul>` y `<ol>` son siempre `<li>`.

## Enlaces: `<a>`

Los enlaces son lo que convierte un montón de páginas en una **red**: la *web* (telaraña, en inglés). Se hacen con el elemento `<a>` (de *anchor*, ancla) y su atributo `href`:

```html
<a href="https://developer.mozilla.org/es/">Documentación de MDN</a>
```

- `href` dice **a dónde** lleva.
- El contenido es el **texto** en el que se hace clic.

```playground Tus primeros enlaces
<p>Aprende más en la <a href="https://developer.mozilla.org/es/docs/Web/HTML">documentación de HTML de MDN</a>.</p>
<p>¿Dudas? <a href="mailto:hola@ejemplo.com">Escríbeme un correo</a>.</p>
<p>¿Prefieres llamar? <a href="tel:+34600000000">Llama al 600 000 000</a>.</p>
```

Además de páginas web, un enlace puede abrir el correo (`mailto:`) o llamar por teléfono desde el móvil (`tel:`).

### Abrir en una pestaña nueva

Con `target="_blank"`, el enlace se abre en otra pestaña:

```html
<a href="https://es.wikipedia.org" target="_blank">Wikipedia</a>
```

> [!NOTE]
> Úsalo poco. Mucha gente prefiere decidir por sí misma si abre una pestaña nueva (con la rueda del ratón o Ctrl + clic). Suele tener sentido para documentos como PDF o cuando la persona está rellenando algo que no debe perder.

### Escribe buenos textos de enlace

El texto del enlace debe decir **a dónde lleva**, aunque se lea solo:

- ❌ «Para ver los precios, haz clic **aquí**».
- ✅ «Consulta **nuestros precios**».

Las personas que usan lectores de pantalla a menudo escuchan la lista de enlaces de la página sin el texto de alrededor. Una lista de diez «aquí» no sirve de nada.

## Rutas: cómo decir dónde está algo

El valor de `href` es una **ruta** (o URL). Hay dos tipos.

### Rutas absolutas

La dirección completa, con `https://` y el dominio. Se usan para ir a **otras webs**:

```html
<a href="https://es.wikipedia.org/wiki/HTML">HTML en Wikipedia</a>
```

### Rutas relativas

La dirección **desde la carpeta del archivo en el que estás**. Se usan para ir a **tus propias páginas**. Imagina esta carpeta de proyecto:

```text
mi-web/
├── index.html
├── contacto.html
└── blog/
    ├── index.html
    └── primer-post.html
```

| Desde | Para ir a | Escribe | Por qué |
| --- | --- | --- | --- |
| `index.html` | `contacto.html` | `contacto.html` | Están en la misma carpeta |
| `index.html` | `primer-post.html` | `blog/primer-post.html` | Entras en la carpeta `blog` |
| `blog/primer-post.html` | `contacto.html` | `../contacto.html` | `../` sube a la carpeta de arriba |
| `blog/primer-post.html` | `blog/index.html` | `index.html` | Están en la misma carpeta |

> [!TIP]
> Piensa en las rutas relativas como en indicaciones para llegar a un sitio: «entra en esta carpeta» (`blog/`) o «sal a la carpeta de arriba» (`../`). Y recuerda: **minúsculas y sin espacios** en los nombres, o las rutas te darán guerra.

## Enlaces dentro de la misma página

Puedes saltar a cualquier parte de una página larga. Primero ponle un **`id`** (un nombre único) al elemento de destino, y luego enlaza con `#` + ese nombre:

```playground Saltos dentro de la página
<nav>
  <a href="#horario">Ver el horario</a> ·
  <a href="#contacto">Ir al contacto</a>
</nav>

<h2 id="horario">Horario</h2>
<p>De lunes a viernes, de 9:00 a 14:00.</p>
<p>(Imagina aquí mucho texto…)</p>

<h2 id="contacto">Contacto</h2>
<p>Escríbenos a hola@ejemplo.com.</p>
```

El `id` debe ser **único** en la página: no puede haber dos elementos con el mismo.

## Errores típicos

- **Poner texto o `<p>` directamente dentro de `<ul>`**, sin `<li>`.
- **Escribir los números a mano** en una lista en lugar de usar `<ol>`.
- **Olvidar `https://`** en enlaces a otras webs: `href="www.google.com"` se interpreta como un archivo de tu carpeta.
- **Usar rutas de tu ordenador**, como `C:\Users\ana\web\contacto.html`. En cuanto subas la web dejarán de funcionar. Usa rutas relativas.
- **Enlaces que dicen «aquí» o «clic».** Describe el destino.
- **Escribir `href="precios"` en lugar de `href="#precios"`** para ir a una sección.

## Ejercicios

### Ejercicio 1: tus películas favoritas (fácil)

Haz un `<h2>` «Mi top 3 de películas» y una lista **ordenada** con tres películas. Después, haz que cuente hacia atrás (3, 2, 1).

```playground Ejercicio 1

```

> [!HINT] Pista
> Para contar hacia atrás, `<ol>` tiene un atributo sin valor: basta con escribir su nombre.

> [!HINT] Solución
> ```html
> <h2>Mi top 3 de películas</h2>
> <ol reversed>
>   <li>El viaje de Chihiro</li>
>   <li>Regreso al futuro</li>
>   <li>Coco</li>
> </ol>
> ```

### Ejercicio 2: arregla la lista (fácil)

Esta lista anidada tiene dos errores. Encuéntralos y corrígelos.

```playground Ejercicio 2
<ul>
  <li>Europa</li>
  <ul>
    <li>España</li>
    <li>Portugal</li>
  </ul>
  <p>Asia</p>
</ul>
```

> [!HINT] Pista
> Recuerda: el hijo directo de `<ul>` siempre es `<li>`, y la sublista va dentro del `<li>` del que depende.

> [!HINT] Solución
> ```html
> <ul>
>   <li>Europa
>     <ul>
>       <li>España</li>
>       <li>Portugal</li>
>     </ul>
>   </li>
>   <li>Asia</li>
> </ul>
> ```

### Ejercicio 3: menú de navegación (medio)

Crea un menú con una lista sin orden de tres enlaces: «Inicio» a `index.html`, «Blog» a `blog/index.html` y «MDN» a `https://developer.mozilla.org/es/` (este último en una pestaña nueva).

```playground Ejercicio 3

```

> [!HINT] Pista 1
> Cada `<li>` contiene un `<a>`. El enlace va dentro del elemento de la lista.

> [!HINT] Pista 2
> Las dos primeras rutas son relativas; la tercera es absoluta.

> [!HINT] Solución
> ```html
> <ul>
>   <li><a href="index.html">Inicio</a></li>
>   <li><a href="blog/index.html">Blog</a></li>
>   <li><a href="https://developer.mozilla.org/es/" target="_blank">MDN</a></li>
> </ul>
> ```

### Ejercicio 4: rutas (reto)

Con la carpeta de abajo, escribe el `href` para ir: a) de `index.html` a `foto.html`; b) de `foto.html` a `index.html`; c) de `foto.html` a `contacto.html`.

```text
mi-web/
├── index.html
├── contacto.html
└── galeria/
    └── foto.html
```

> [!HINT] Pista
> Para salir de la carpeta `galeria` hacia la de arriba se usa `../`.

> [!HINT] Solución
> a) `galeria/foto.html` · b) `../index.html` · c) `../contacto.html`

## Ficha resumen

- `<ul>` = lista sin orden (viñetas). `<ol>` = lista ordenada (números). Cada elemento, en un `<li>`.
- Las sublistas van **dentro** de un `<li>`.
- Enlace: `<a href="destino">texto que describe el destino</a>`.
- Ruta **absoluta**: `https://…`, para otras webs. Ruta **relativa**: `pagina.html`, `carpeta/pagina.html`, `../pagina.html`, para tus páginas.
- `href="#id"` salta a un elemento de la misma página. `mailto:` y `tel:` abren el correo y el teléfono.
- `target="_blank"` abre en otra pestaña (con moderación).

## Glosario

| Término | Definición |
| --- | --- |
| `<ul>` | Lista sin orden, con viñetas (*unordered list*). |
| `<ol>` | Lista ordenada, numerada automáticamente (*ordered list*). |
| `<li>` | Cada elemento de una lista (*list item*). |
| Enlace | Elemento `<a>` que lleva a otra página, a otra parte de la misma página, a un correo o a un teléfono. |
| `href` | Atributo de `<a>` con la dirección de destino del enlace. |
| URL | Dirección de un recurso en la web, como `https://es.wikipedia.org/wiki/HTML`. |
| Ruta absoluta | Dirección completa, con protocolo y dominio. Sirve para enlazar a otras webs. |
| Ruta relativa | Dirección calculada desde la carpeta del archivo actual. Sirve para enlazar tus propias páginas. |
| `id` | Atributo con un nombre único para un elemento, que permite enlazarlo con `#nombre`. |
