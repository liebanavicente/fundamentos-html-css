---
title: "Qué es una página web"
summary: "Lo que pasa cuando abres una web y el papel de HTML, CSS y JavaScript, explicado sin tecnicismos."
part: empezar
minutes: 15
goals:
  - "Explicar con tus palabras qué ocurre cuando escribes una dirección en el navegador."
  - "Distinguir qué hace HTML, qué hace CSS y qué hace JavaScript."
  - "Ver el código de cualquier página web desde tu navegador."
quiz:
  - question: "¿Qué hace el navegador cuando recibe un archivo HTML?"
    options:
      - "Lo guarda en una base de datos"
      - "Lo lee y lo dibuja en pantalla como una página"
      - "Lo envía a otro servidor"
      - "Lo convierte en una imagen y la descarga"
    correct: 1
    explanation: "El navegador es un programa que sabe leer HTML (y CSS) y convertirlo en lo que ves: textos, imágenes, botones…"
  - question: "Si una web fuera una casa, ¿qué sería el CSS?"
    options:
      - "Los cimientos y las paredes"
      - "La electricidad que hace que las cosas funcionen"
      - "La pintura, los muebles y la decoración"
      - "La dirección postal"
    correct: 2
    explanation: "HTML es la estructura (paredes), CSS es el aspecto (pintura y decoración) y JavaScript es el comportamiento (la electricidad)."
  - question: "¿Qué lenguaje decide que un texto sea un título y otro un párrafo?"
    options:
      - "CSS"
      - "HTML"
      - "JavaScript"
      - "El servidor"
    correct: 1
    explanation: "HTML dice qué es cada cosa: esto es un título, esto un párrafo, esto una imagen. CSS dirá después cómo se ve."
  - question: "¿Qué es un servidor?"
    options:
      - "El programa con el que navegas, como Chrome o Firefox"
      - "Un ordenador conectado a Internet que guarda las webs y las envía cuando se las piden"
      - "Un tipo de archivo HTML"
      - "La pantalla del ordenador"
    correct: 1
    explanation: "El servidor guarda los archivos de la web. Tu navegador se los pide y él se los manda."
  - question: "¿Necesitas instalar algo especial para ver una página HTML que has escrito tú?"
    options:
      - "Sí, un servidor profesional"
      - "Sí, un programa de pago"
      - "No, basta con abrir el archivo con cualquier navegador"
      - "No, pero hay que subirlo antes a Internet"
    correct: 2
    explanation: "Un archivo .html se abre directamente con el navegador, sin Internet y sin instalar nada."
cards:
  - front: "¿Qué es el navegador?"
    back: "El programa que pide las páginas y las dibuja en pantalla (Chrome, Firefox, Safari, Edge…)."
  - front: "¿Qué es un servidor?"
    back: "Un ordenador conectado a Internet que guarda los archivos de una web y los envía a quien los pide."
  - front: "HTML en una frase"
    back: "Describe el contenido y su estructura: qué es cada cosa (título, párrafo, imagen, enlace…)."
  - front: "CSS en una frase"
    back: "Decide cómo se ve cada cosa: colores, tamaños, tipografías, posiciones."
  - front: "JavaScript en una frase"
    back: "Añade comportamiento: reaccionar a clics, cambiar cosas sin recargar, hacer cálculos…"
  - front: "¿Cómo ves el código HTML de cualquier web?"
    back: "Clic derecho → «Ver código fuente de la página» (o Ctrl + U / Cmd + Opción + U)."
---

## Lo que pasa cuando abres una web

Cada día abres decenas de páginas web sin pensar en cómo funcionan. Vamos a ver qué ocurre, paso a paso, cuando escribes `wikipedia.org` en el navegador y pulsas Enter:

1. **Tu navegador pide la página.** El navegador (Chrome, Firefox, Safari, Edge…) envía un mensaje por Internet: «Hola, quiero la página principal de wikipedia.org».
2. **Un servidor responde.** En algún lugar del mundo hay un ordenador encendido día y noche, el **servidor**, que guarda los archivos de Wikipedia. Recibe la petición y te envía los archivos.
3. **El navegador los lee y los dibuja.** Esos archivos son texto escrito en unos lenguajes especiales. El navegador los lee y los convierte en lo que ves: títulos, fotos, enlaces, botones…

Es como pedir comida a domicilio: tú (el navegador) haces el pedido, el restaurante (el servidor) lo prepara y lo envía, y cuando llega lo emplatas para comértelo (el navegador lo dibuja en pantalla).

> [!IMPORTANT]
> Una página web es, en el fondo, **un archivo de texto**. No es magia ni un programa complicado: es texto escrito siguiendo unas reglas que el navegador entiende. Y ese texto lo vas a escribir tú.

## Los tres lenguajes de la web

Casi todas las webs del mundo se construyen con tres lenguajes que trabajan en equipo. La comparación más útil es la de una casa:

| Lenguaje | En la casa sería… | Para qué sirve | Ejemplo |
| --- | --- | --- | --- |
| **HTML** | Las paredes, las habitaciones y los muebles | Dice **qué es** cada cosa: un título, un párrafo, una imagen, un enlace | «Esto es el título principal» |
| **CSS** | La pintura, la decoración y la distribución | Dice **cómo se ve**: colores, tamaños, tipografías, posiciones | «El título es azul y grande» |
| **JavaScript** | La electricidad y los electrodomésticos | Dice **qué hace**: reaccionar a clics, cambiar cosas, hacer cálculos | «Al pulsar el botón, abre el menú» |

En este curso aprenderás los dos primeros: **HTML y CSS**. Son la base de todo y, con ellos, ya puedes construir páginas completas y bonitas. JavaScript será tu siguiente paso cuando termines.

> [!NOTE]
> A HTML y CSS a veces no se les llama «lenguajes de programación», porque no dan órdenes ni hacen cálculos: describen contenido y aspecto. Da igual cómo los llames: son lo primero que aprende cualquier persona que se dedica a la web.

## Tu primer vistazo a HTML

Así se ve un trozo de HTML. No te preocupes por entenderlo todo todavía; fíjate solo en la idea: hay **texto normal** rodeado de **marcas entre `<` y `>`** que le dicen al navegador qué es cada cosa.

```html
<h1>Mi receta favorita</h1>
<p>Esta tortilla de patatas es la mejor del mundo.</p>
```

- `<h1>` … `</h1>` significa «esto es un título principal».
- `<p>` … `</p>` significa «esto es un párrafo».

Y aquí lo tienes funcionando. A la izquierda está el código y a la derecha, el resultado que dibuja el navegador. **Puedes cambiar el código**: prueba a escribir otra receta y mira cómo cambia el resultado al momento.

```playground Tu primer HTML
<h1>Mi receta favorita</h1>
<p>Esta tortilla de patatas es la mejor del mundo.</p>
```

> [!TIP]
> En este curso vas a ver muchos recuadros como este, llamados **zonas de pruebas**. Úsalos siempre: cambia cosas, borra, rompe. Si algo se estropea, el botón «Restablecer» lo deja como estaba. Se aprende mucho más tocando que leyendo.

## Ahora con CSS

Ahora añadimos CSS a ese mismo HTML. En la zona de pruebas hay dos pestañas: **HTML** y **CSS**. Pulsa la de CSS para ver las reglas de estilo.

```playground El mismo HTML, con estilo
<h1>Mi receta favorita</h1>
<p>Esta tortilla de patatas es la mejor del mundo.</p>
<!-- css -->
h1 {
  color: darkorange;
  font-family: Georgia, serif;
}

p {
  font-size: 20px;
}
```

El contenido es exactamente el mismo; lo único que cambia es el aspecto. Esa es la gran idea: **HTML para el contenido, CSS para el aspecto**. Prueba a cambiar `darkorange` por `green` o `20px` por `40px`.

## Mira el código de cualquier web

Todas las webs que visitas están hechas de HTML, y puedes verlo. Abre cualquier página en otra pestaña (por ejemplo, Wikipedia) y:

1. Haz **clic derecho** en una zona vacía de la página.
2. Elige **«Ver código fuente de la página»**. También funciona el atajo **Ctrl + U** en Windows o **Cmd + Opción + U** en Mac.

Verás muchísimo texto con marcas `<` `>`. Es normal que parezca un lío: las webs grandes tienen miles de líneas. Lo importante es que compruebes que, por dentro, todas son texto como el que vas a escribir.

> [!TIP]
> Hay otra herramienta todavía más útil: haz clic derecho sobre cualquier elemento y elige **«Inspeccionar»**. Se abren las **herramientas de desarrollo**, que te muestran el HTML y el CSS de ese trozo concreto. Las usarás mucho a partir de la lección 2.

## Errores típicos

- **Pensar que necesitas Internet o un servidor para empezar.** Para aprender, basta con un archivo en tu ordenador y un navegador. El servidor solo hace falta cuando quieres que otras personas vean tu web.
- **Confundir el navegador con el buscador.** El navegador es el programa (Chrome, Firefox…). El buscador es una web que busca cosas (Google, DuckDuckGo…).
- **Querer aprender HTML, CSS y JavaScript a la vez.** Ve paso a paso: primero HTML, luego CSS. Cuando los domines, JavaScript te resultará mucho más fácil.

## Ejercicios

### Ejercicio 1: cambia el contenido (fácil)

En esta zona de pruebas, cambia el título por tu nombre y el párrafo por una frase sobre ti.

```playground Ejercicio 1
<h1>Aquí va tu nombre</h1>
<p>Aquí va una frase sobre ti.</p>
```

> [!HINT] Pista
> Cambia solo el texto que está **entre** las marcas. No toques `<h1>`, `</h1>`, `<p>` ni `</p>`.

> [!HINT] Solución
> ```html
> <h1>Lucía Pérez</h1>
> <p>Me encanta la fotografía y quiero hacer mi propia web.</p>
> ```

### Ejercicio 2: añade otro párrafo (fácil)

Debajo del párrafo que hay, añade un segundo párrafo con tu comida favorita.

```playground Ejercicio 2
<h1>Sobre mí</h1>
<p>Vivo en Madrid.</p>
```

> [!HINT] Pista
> Copia la línea entera del párrafo, desde `<p>` hasta `</p>`, pégala debajo y cambia el texto.

> [!HINT] Solución
> ```html
> <h1>Sobre mí</h1>
> <p>Vivo en Madrid.</p>
> <p>Mi comida favorita es la paella.</p>
> ```

### Ejercicio 3: espía una web (medio)

Abre la web que más uses (un periódico, una tienda…), mira su código fuente con **Ctrl + U** y busca con **Ctrl + F** el texto `<h1`. ¿Qué texto hay dentro? ¿Coincide con el título que ves en la página?

> [!HINT] Pista
> No todas las webs tienen un `<h1>`, y algunas lo tienen escondido o con atributos dentro, como `<h1 class="titulo">`. Por eso buscamos `<h1` sin cerrar el `>`.

> [!HINT] Solución
> Lo normal es que el texto del `<h1>` sea el título principal de la página o el nombre de la web. Si lo has encontrado, acabas de leer HTML de una web real. ¡Enhorabuena!

## Ficha resumen

- Una página web es un **archivo de texto** que el **navegador** lee y dibuja.
- Las webs viven en **servidores**, que las envían cuando el navegador las pide.
- **HTML** = qué es cada cosa (estructura). **CSS** = cómo se ve (estilo). **JavaScript** = qué hace (comportamiento).
- Puedes ver el código de cualquier web con **clic derecho → Ver código fuente** o **Inspeccionar**.

## Glosario

| Término | Definición |
| --- | --- |
| Navegador | Programa que pide las páginas web y las dibuja en pantalla, como Chrome, Firefox, Safari o Edge. |
| Servidor | Ordenador conectado a Internet que guarda los archivos de una web y los envía a quien los pide. |
| HTML | Lenguaje que describe el contenido de una página y qué es cada cosa: títulos, párrafos, imágenes, enlaces… |
| CSS | Lenguaje que decide el aspecto de una página: colores, tamaños, tipografías y posiciones. |
| JavaScript | Lenguaje de programación que añade comportamiento a una página, como reaccionar a clics. |
| Código fuente | El texto (HTML, CSS…) con el que está hecha una página. |
