---
title: "Tu primera página HTML"
summary: "Etiquetas, elementos y atributos: las piezas de HTML, y el esqueleto que toda página necesita."
part: html
minutes: 30
goals:
  - "Distinguir etiqueta de apertura, etiqueta de cierre, contenido y elemento."
  - "Añadir atributos a un elemento y saber para qué sirven."
  - "Escribir de memoria el esqueleto básico de una página HTML."
quiz:
  - question: "En `<p>Hola</p>`, ¿qué es `</p>`?"
    options:
      - "La etiqueta de apertura"
      - "La etiqueta de cierre"
      - "Un atributo"
      - "El contenido"
    correct: 1
    explanation: "La barra `/` indica cierre. `<p>` abre, `Hola` es el contenido y `</p>` cierra. Todo junto es el elemento."
  - question: "¿Cuál de estos anidamientos es correcto?"
    options:
      - "`<p><strong>Hola</p></strong>`"
      - "`<p><strong>Hola</strong></p>`"
      - "`<strong><p>Hola</strong></p>`"
      - "`<p>Hola<strong></p>`"
    correct: 1
    explanation: "Lo último que se abre es lo primero que se cierra, como unas cajas que se meten unas dentro de otras."
  - question: "¿Dónde va el contenido que se ve en la página?"
    options:
      - "Dentro de `<head>`"
      - "Dentro de `<title>`"
      - "Dentro de `<body>`"
      - "Antes de `<!DOCTYPE html>`"
    correct: 2
    explanation: "`<body>` contiene todo lo visible. `<head>` guarda información sobre la página que no se ve dentro de ella."
  - question: "¿Qué hace `<meta charset=\"UTF-8\">`?"
    options:
      - "Pone la página en español"
      - "Hace que tildes, eñes y emojis se vean bien"
      - "Cambia el tipo de letra"
      - "Indica el autor de la página"
    correct: 1
    explanation: "UTF-8 es la codificación de caracteres que incluye todos los alfabetos. Sin ella, «España» podría verse como «EspaÃ±a»."
  - question: "En `<html lang=\"es\">`, ¿qué es `lang=\"es\"`?"
    options:
      - "Una etiqueta"
      - "Un elemento vacío"
      - "Un atributo con su valor"
      - "Un comentario"
    correct: 2
    explanation: "Los atributos van dentro de la etiqueta de apertura y añaden información: nombre=\"valor\". Aquí dice que la página está en español."
cards:
  - front: "Partes de un elemento HTML"
    back: "Etiqueta de apertura `<p>` + contenido + etiqueta de cierre `</p>`."
  - front: "¿Qué es un atributo?"
    back: "Información extra que va en la etiqueta de apertura con la forma `nombre=\"valor\"`. Ej.: `lang=\"es\"`."
  - front: "¿Qué es un elemento vacío?"
    back: "Un elemento sin contenido ni etiqueta de cierre, como `<br>`, `<img>` o `<meta>`."
  - front: "¿Para qué sirve `<!DOCTYPE html>`?"
    back: "Avisa al navegador de que la página usa HTML moderno. Va siempre en la primera línea."
  - front: "`<head>` frente a `<body>`"
    back: "`<head>`: información sobre la página (título, codificación…), no se ve dentro. `<body>`: todo el contenido visible."
  - front: "¿Dónde se ve el texto de `<title>`?"
    back: "En la pestaña del navegador, en los favoritos y en los resultados de los buscadores."
  - front: "Regla de oro del anidamiento"
    back: "Lo último que abres es lo primero que cierras."
---

## Etiquetas: las marcas de HTML

HTML significa *HyperText Markup Language*, «lenguaje de marcado de hipertexto». **Marcado** quiere decir que marcas el texto para decir qué es cada trozo, igual que harías con un subrayador de colores en unos apuntes: amarillo para títulos, verde para definiciones…

En HTML, las marcas son las **etiquetas**: palabras entre los signos `<` y `>`.

```html
<p>Me gusta el chocolate.</p>
```

Esto tiene tres partes:

| Parte | Qué es | En el ejemplo |
| --- | --- | --- |
| Etiqueta de apertura | Dónde empieza | `<p>` |
| Contenido | Lo que se marca | `Me gusta el chocolate.` |
| Etiqueta de cierre | Dónde acaba; lleva una barra `/` | `</p>` |

Las tres juntas forman un **elemento**: el elemento párrafo. La `p` viene de *paragraph*, párrafo en inglés. Casi todas las etiquetas son abreviaturas de palabras inglesas, así que son más fáciles de recordar de lo que parece.

```playground Etiquetas en acción
<h1>Esto es un título</h1>
<p>Esto es un párrafo.</p>
<p>Y esto, <strong>un texto importante</strong> dentro de otro párrafo.</p>
```

> [!TIP]
> Prueba a borrar la etiqueta de cierre `</strong>` en el ejemplo. ¿Qué pasa con el resto del texto? El navegador intenta adivinar dónde termina, y no siempre acierta. Por eso hay que **cerrar siempre** lo que se abre.

## Elementos dentro de elementos

En el ejemplo anterior, `<strong>` está **dentro** de `<p>`. A esto se le llama **anidar**, y es la base de HTML: los elementos se meten unos dentro de otros como cajas o como muñecas rusas.

La regla es sencilla: **lo último que abres es lo primero que cierras**.

```html
<!-- ✅ Bien: strong se abre dentro de p y se cierra antes que p -->
<p>Hoy hace <strong>mucho</strong> calor.</p>

<!-- ❌ Mal: las etiquetas se cruzan -->
<p>Hoy hace <strong>mucho calor.</p></strong>
```

Para ver bien qué está dentro de qué, se usa la **sangría**: los elementos de dentro se escriben un poco más a la derecha (dos espacios o una tabulación).

```html
<body>
  <h1>Mi blog</h1>
  <p>Bienvenida a mi blog.</p>
</body>
```

Al elemento que contiene a otro se le llama **padre**, y al de dentro, **hijo**. En el ejemplo, `<body>` es el padre de `<h1>` y de `<p>`, que son hermanos entre sí. Este vocabulario familiar lo usarás mucho con CSS.

## Atributos: información extra

Algunas etiquetas necesitan más información. Por ejemplo, un enlace necesita saber a dónde lleva. Esa información se añade con **atributos**, que se escriben dentro de la etiqueta de apertura:

```html
<a href="https://es.wikipedia.org">Ir a Wikipedia</a>
```

- `href` es el **nombre** del atributo (de *hypertext reference*, la dirección del enlace).
- `"https://es.wikipedia.org"` es su **valor**, siempre entre comillas.
- Se escriben así: `nombre="valor"`, y si hay varios, se separan con espacios.

```playground Un enlace con su atributo
<p>Mi web favorita es <a href="https://es.wikipedia.org" title="La enciclopedia libre">Wikipedia</a>.</p>
<p>Pasa el ratón por encima del enlace: el atributo <strong>title</strong> muestra una ayuda.</p>
```

## Elementos vacíos

Unos pocos elementos no tienen contenido, así que **no llevan etiqueta de cierre**. Se llaman **elementos vacíos**. Por ejemplo, `<br>` hace un salto de línea e `<img>` muestra una imagen:

```html
<p>Primera línea<br>Segunda línea</p>
<img src="gato.jpg" alt="Un gato dormido">
```

> [!NOTE]
> Quizá veas en otros sitios `<br />` con una barra al final. Es una forma antigua que sigue funcionando, pero en HTML moderno no hace falta.

## El esqueleto de toda página

Hasta ahora hemos escrito trozos sueltos. Una página completa necesita un **esqueleto** que siempre es igual. Apréndelo bien, porque lo escribirás al empezar cada proyecto:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi primera página</title>
  </head>
  <body>
    <h1>¡Hola, mundo!</h1>
    <p>Esta es mi primera página web.</p>
  </body>
</html>
```

Línea por línea:

| Código | Para qué sirve |
| --- | --- |
| `<!DOCTYPE html>` | Le dice al navegador: «esto es HTML moderno». No es una etiqueta, es un aviso. Va siempre en la primera línea. |
| `<html lang="es">` | El elemento raíz: envuelve toda la página. `lang="es"` indica que está en español (ayuda a lectores de pantalla y traductores). |
| `<head>` | La «cabeza»: información **sobre** la página que no se ve dentro de ella. |
| `<meta charset="UTF-8">` | Codificación de caracteres: hace que tildes, eñes y emojis se vean bien. |
| `<meta name="viewport" …>` | Hace que la página se vea bien en móviles. Lo entenderás del todo en la lección de responsive. |
| `<title>` | El título de la pestaña del navegador y de los resultados de Google. |
| `<body>` | El «cuerpo»: **todo lo que se ve** en la página. |

```playground Una página completa
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi primera página</title>
  </head>
  <body>
    <h1>¡Hola, mundo!</h1>
    <p>Esta es mi primera página web. Tiene tildes y eñes: España, café, ñandú. 🎉</p>
  </body>
</html>
```

> [!TIP]
> En VS Code no hace falta escribir el esqueleto a mano: en un archivo `.html` vacío, escribe `!` y pulsa **Tab** o **Enter**. VS Code lo escribe por ti. Cambia `lang="en"` por `lang="es"` y listo.

## Errores típicos

- **Olvidar cerrar una etiqueta.** El navegador intenta arreglarlo, pero el resultado puede ser raro. Cierra siempre lo que abres.
- **Cruzar etiquetas**, como `<p><strong>…</p></strong>`. Cierra en orden inverso al que abriste.
- **Poner contenido visible dentro de `<head>`.** Los títulos y párrafos van en `<body>`.
- **Olvidar las comillas de los atributos** o usar comillas «curvas» copiadas de Word. Usa siempre comillas rectas: `"…"`.
- **Escribir `<title>` en el `<body>` pensando que es un título visible.** Para el título visible de la página se usa `<h1>`.

## Ejercicios

### Ejercicio 1: arregla el anidamiento (fácil)

Este código tiene dos errores de anidamiento. Corrígelos.

```playground Ejercicio 1
<p>Me encanta <strong>el verano.</p></strong>
<p>Mi color favorito es el <strong>azul</p>.</strong>
```

> [!HINT] Pista
> Busca dónde se cierra cada `<strong>`. Debe cerrarse **antes** que el `</p>` que lo contiene.

> [!HINT] Solución
> ```html
> <p>Me encanta <strong>el verano.</strong></p>
> <p>Mi color favorito es el <strong>azul</strong>.</p>
> ```

### Ejercicio 2: el esqueleto de memoria (medio)

Sin mirar arriba, escribe el esqueleto completo de una página en español con el título de pestaña «Mis aficiones», un `<h1>` y un párrafo. Después compara con la solución.

```playground Ejercicio 2

```

> [!HINT] Pista 1
> Empieza por el aviso `<!DOCTYPE html>`. Después, `<html>` envuelve a dos hijos: `<head>` y `<body>`.

> [!HINT] Pista 2
> En `<head>` van las dos etiquetas `<meta>` y el `<title>`. En `<body>`, lo que se ve.

> [!HINT] Solución
> ```html
> <!DOCTYPE html>
> <html lang="es">
>   <head>
>     <meta charset="UTF-8">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>Mis aficiones</title>
>   </head>
>   <body>
>     <h1>Mis aficiones</h1>
>     <p>Me gusta leer, nadar y cocinar.</p>
>   </body>
> </html>
> ```

### Ejercicio 3: encuentra las partes (medio)

En el código de abajo, identifica: una etiqueta de apertura, una de cierre, un atributo con su valor y un elemento vacío. Después, añade al enlace un atributo `title` con el texto «Abre el buscador».

```playground Ejercicio 3
<p>Busca lo que quieras en <a href="https://duckduckgo.com">DuckDuckGo</a>.<br>Es un buscador.</p>
```

> [!HINT] Pista
> El elemento vacío es el que no tiene pareja de cierre. El atributo está dentro de `<a …>`.

> [!HINT] Solución
> - Apertura: `<p>` o `<a href="…">`. Cierre: `</p>` o `</a>`.
> - Atributo: `href`, con el valor `"https://duckduckgo.com"`.
> - Elemento vacío: `<br>`.
>
> ```html
> <p>Busca lo que quieras en <a href="https://duckduckgo.com" title="Abre el buscador">DuckDuckGo</a>.<br>Es un buscador.</p>
> ```

## Ficha resumen

- **Elemento** = etiqueta de apertura + contenido + etiqueta de cierre: `<p>Hola</p>`.
- Los elementos se **anidan**: lo último que abres es lo primero que cierras. Usa **sangría** para verlo claro.
- Los **atributos** añaden información en la etiqueta de apertura: `nombre="valor"`.
- Los **elementos vacíos** no tienen cierre: `<br>`, `<img>`, `<meta>`.
- Esqueleto: `<!DOCTYPE html>` → `<html lang="es">` → `<head>` (meta charset, meta viewport, title) + `<body>` (lo visible).

## Glosario

| Término | Definición |
| --- | --- |
| Etiqueta | Marca de HTML escrita entre `<` y `>` que indica dónde empieza o acaba un elemento. |
| Elemento | Una pieza de la página: etiqueta de apertura, contenido y etiqueta de cierre. |
| Atributo | Información extra de un elemento, escrita en la etiqueta de apertura como `nombre="valor"`. |
| Elemento vacío | Elemento sin contenido ni etiqueta de cierre, como `<br>` o `<img>`. |
| Anidar | Meter un elemento dentro de otro. El de fuera es el padre y el de dentro, el hijo. |
| `<!DOCTYPE html>` | Aviso de la primera línea que indica al navegador que la página usa HTML moderno. |
| `<head>` | Parte de la página con información sobre ella (título, codificación…) que no se muestra dentro. |
| `<body>` | Parte de la página que contiene todo lo visible. |
| UTF-8 | Codificación de caracteres que incluye tildes, eñes, emojis y todos los alfabetos. |
