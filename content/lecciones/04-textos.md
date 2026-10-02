---
title: "Títulos, párrafos y énfasis"
summary: "Organiza el texto con encabezados y párrafos, destaca lo importante y deja notas en tu código con comentarios."
part: html
minutes: 25
goals:
  - "Usar los encabezados de `<h1>` a `<h6>` en el orden correcto."
  - "Destacar texto con `<strong>` y `<em>` sabiendo en qué se diferencian."
  - "Entender por qué el navegador ignora los espacios y saltos de línea de más."
  - "Escribir comentarios en HTML."
quiz:
  - question: "¿Cuántos `<h1>` debería tener normalmente una página?"
    options:
      - "Ninguno"
      - "Uno"
      - "Uno por párrafo"
      - "Todos los que quieras"
    correct: 1
    explanation: "El `<h1>` es el título principal de la página, como el título de un libro. Lo habitual es que haya uno."
  - question: "Escribes un párrafo con tres saltos de línea seguidos en el código. ¿Qué muestra el navegador?"
    options:
      - "Tres saltos de línea"
      - "Todo seguido, como si hubiera un solo espacio"
      - "Un error"
      - "Un salto de línea"
    correct: 1
    explanation: "El navegador junta los espacios, tabulaciones y saltos de línea seguidos en un solo espacio. Para separar, se usan elementos como `<p>`."
  - question: "¿Qué etiqueta usarías para un texto que es importante, como un aviso?"
    options:
      - "`<em>`"
      - "`<strong>`"
      - "`<h6>`"
      - "`<big>`"
    correct: 1
    explanation: "`<strong>` marca importancia (se ve en negrita). `<em>` marca énfasis al leer (se ve en cursiva)."
  - question: "¿Por qué no hay que elegir el encabezado por su tamaño?"
    options:
      - "Porque todos tienen el mismo tamaño"
      - "Porque el tamaño se cambia con CSS; el número indica el nivel en el índice"
      - "Porque los tamaños grandes no funcionan en móvil"
      - "Sí hay que elegirlo por su tamaño"
    correct: 1
    explanation: "Los encabezados forman el índice de la página. El aspecto es cosa de CSS."
  - question: "¿Cómo se escribe un comentario en HTML?"
    options:
      - "`// comentario`"
      - "`/* comentario */`"
      - "`<!-- comentario -->`"
      - "`# comentario`"
    correct: 2
    explanation: "Los comentarios de HTML van entre `<!--` y `-->`. El navegador no los muestra."
cards:
  - front: "Niveles de encabezado"
    back: "Del `<h1>` (el más importante) al `<h6>`. Forman el índice de la página."
  - front: "`<strong>` frente a `<em>`"
    back: "`<strong>`: importante (negrita). `<em>`: énfasis, como cuando cambias el tono al hablar (cursiva)."
  - front: "¿Qué hace el navegador con muchos espacios seguidos?"
    back: "Los convierte en uno solo. Los saltos de línea del código tampoco se ven."
  - front: "¿Para qué sirve `<br>`?"
    back: "Para un salto de línea dentro del mismo párrafo, como en poemas o direcciones postales."
  - front: "¿Para qué sirve `<hr>`?"
    back: "Para separar temas o secciones; se ve como una línea horizontal."
  - front: "Sintaxis de un comentario HTML"
    back: "`<!-- esto no se ve en la página -->`"
---

## Encabezados: el índice de tu página

Piensa en un libro: tiene un título, capítulos, apartados dentro de cada capítulo… HTML organiza el texto igual, con seis niveles de **encabezados**:

```playground Los seis niveles
<h1>Título de la página (nivel 1)</h1>
<h2>Capítulo (nivel 2)</h2>
<h3>Apartado (nivel 3)</h3>
<h4>Subapartado (nivel 4)</h4>
<h5>Nivel 5</h5>
<h6>Nivel 6</h6>
```

Las reglas para usarlos bien:

1. **Un solo `<h1>`** por página: el título principal, como el título del libro.
2. **No te saltes niveles**: después de un `<h2>` puede venir un `<h3>`, pero no un `<h5>`.
3. **Elígelos por su importancia, no por su tamaño.** Si quieres un título pequeño, usa el nivel correcto y cambia el tamaño con CSS más adelante.

```html
<h1>Recetas de mi abuela</h1>
  <h2>Primeros platos</h2>
    <h3>Gazpacho</h3>
    <h3>Lentejas</h3>
  <h2>Postres</h2>
    <h3>Arroz con leche</h3>
```

> [!IMPORTANT]
> ¿Por qué tanto cuidado? Porque los encabezados **no son solo texto grande**. Los buscadores como Google los usan para entender de qué trata tu página, y las personas ciegas que usan un **lector de pantalla** saltan de encabezado en encabezado para moverse por ella, igual que tú miras el índice de un libro.

## Párrafos

Cada bloque de texto va en su propio `<p>`. El navegador separa los párrafos con un pequeño espacio:

```html
<p>Primer párrafo. Puede ser tan largo como quieras.</p>
<p>Segundo párrafo, sobre otra idea.</p>
```

### El navegador ignora tus espacios

Esto sorprende a todo el mundo al principio. Mira el código de este ejemplo y luego el resultado:

```playground ¿Dónde están mis espacios?
<p>Este      texto      tiene
muchos     espacios


y saltos de línea.</p>
```

El navegador **junta todos los espacios, tabulaciones y saltos de línea seguidos en un solo espacio**. Es una ventaja: puedes ordenar tu código como quieras sin que cambie la página. Si quieres separar textos, usa elementos (`<p>`, encabezados…).

### Saltos de línea y separadores

A veces sí necesitas cortar una línea sin empezar otro párrafo, como en un poema o una dirección. Para eso está `<br>` (*break*). Y para separar dos temas distintos, `<hr>` (*horizontal rule*), que se ve como una línea:

```playground br y hr
<p>
  Calle Mayor, 1<br>
  28013 Madrid<br>
  España
</p>
<hr>
<p>Aquí empieza otro tema.</p>
```

> [!WARNING]
> No uses varios `<br>` seguidos para hacer espacio entre cosas. Para eso existe CSS, con `margin`, que verás en la lección del modelo de caja.

## Destacar texto: `<strong>` y `<em>`

Dentro de un párrafo puedes marcar palabras:

| Etiqueta | Significado | Se ve como | Ejemplo de uso |
| --- | --- | --- | --- |
| `<strong>` | **Importante**, serio, urgente | Negrita | «**No toques** el cable rojo.» |
| `<em>` | **Énfasis**: cambia el sentido de la frase al leerla | Cursiva | «Yo *no* dije eso» (lo dijo otra persona) |

```playground strong y em
<p><strong>Atención:</strong> la piscina cierra a las 20:00.</p>
<p>Me <em>encanta</em> madrugar los lunes. (Ironía, claro).</p>
<p>Puedes combinarlas: <strong>es <em>muy</em> importante</strong>.</p>
```

> [!NOTE]
> También existen `<b>` (negrita) e `<i>` (cursiva), pero solo cambian el aspecto, sin decir nada del significado. Prefiere `<strong>` y `<em>`: un lector de pantalla puede cambiar la entonación con ellas.

## Comentarios: notas que no se ven

Puedes dejar notas en tu código para ti o para otras personas. El navegador las ignora:

```html
<!-- Esto es un comentario: no aparece en la página -->
<h1>Mi web</h1>

<!-- TODO: añadir una foto aquí -->
<p>Bienvenida.</p>
```

Los comentarios también sirven para **desactivar** un trozo de código sin borrarlo. En VS Code, selecciona unas líneas y pulsa **Ctrl + /** (Cmd + / en Mac) para comentarlas o descomentarlas.

> [!CAUTION]
> Cualquiera puede ver tus comentarios con «Ver código fuente». No escribas nunca contraseñas ni nada privado en ellos.

## Caracteres especiales

¿Y si quieres escribir literalmente `<p>` en tu página? El navegador pensaría que es una etiqueta. Para eso se usan las **entidades**, códigos que empiezan por `&` y acaban en `;`:

| Quieres mostrar | Escribe |
| --- | --- |
| `<` | `&lt;` (*less than*, menor que) |
| `>` | `&gt;` (*greater than*, mayor que) |
| `&` | `&amp;` |
| Un espacio que no se junta ni se corta | `&nbsp;` |

```playground Entidades
<p>Para un párrafo se usa la etiqueta &lt;p&gt;.</p>
<p>Tom &amp; Jerry</p>
```

## Errores típicos

- **Usar `<h1>`, `<h2>`… para hacer texto grande** en lugar de para indicar la estructura.
- **Saltarse niveles**: pasar de `<h1>` a `<h4>` porque «se ve mejor».
- **Usar varios `<br>` para separar** párrafos o dejar espacios. Usa `<p>` y, más adelante, CSS.
- **Esperar que se vean los espacios** o los saltos de línea del código.
- **Olvidar cerrar `<strong>`**: todo el texto que viene después sale en negrita.

## Ejercicios

### Ejercicio 1: ordena los encabezados (fácil)

Esta página de una academia usa los encabezados según el tamaño que le gustaba a quien la escribió. Corrígela para que tenga un único `<h1>` y no se salte niveles.

```playground Ejercicio 1
<h3>Academia de baile Ritmo</h3>
<h1>Nuestras clases</h1>
<h5>Salsa</h5>
<p>Los lunes y miércoles.</p>
<h5>Bachata</h5>
<p>Los martes y jueves.</p>
<h1>Contacto</h1>
<p>Llámanos al 600 000 000.</p>
```

> [!HINT] Pista
> ¿Cuál es el título de toda la página? Ese es el `<h1>`. Las secciones grandes («Nuestras clases», «Contacto») son `<h2>`, y lo que hay dentro de ellas, `<h3>`.

> [!HINT] Solución
> ```html
> <h1>Academia de baile Ritmo</h1>
> <h2>Nuestras clases</h2>
> <h3>Salsa</h3>
> <p>Los lunes y miércoles.</p>
> <h3>Bachata</h3>
> <p>Los martes y jueves.</p>
> <h2>Contacto</h2>
> <p>Llámanos al 600 000 000.</p>
> ```

### Ejercicio 2: un poema (fácil)

Escribe un poema o la letra de una canción corta con un título `<h1>`, cada estrofa en un `<p>` y los versos separados con `<br>`. Añade un comentario con el nombre de quien lo escribió.

```playground Ejercicio 2
<h1>Título del poema</h1>
```

> [!HINT] Pista
> Cada estrofa es un párrafo. Dentro, pon un `<br>` al final de cada verso excepto el último.

> [!HINT] Solución
> ```html
> <!-- Poema de Antonio Machado -->
> <h1>Caminante, no hay camino</h1>
> <p>
>   Caminante, son tus huellas<br>
>   el camino y nada más;<br>
>   caminante, no hay camino,<br>
>   se hace camino al andar.
> </p>
> ```

### Ejercicio 3: la noticia (medio)

Escribe una noticia inventada con: un titular, un subtítulo para cada una de sus dos partes, al menos tres párrafos, una frase importante con `<strong>`, una palabra con énfasis con `<em>` y un `<hr>` antes de la firma del periodista.

```playground Ejercicio 3

```

> [!HINT] Pista
> El titular es el `<h1>` y los subtítulos, `<h2>`. La firma puede ser un último `<p>` después del `<hr>`.

> [!HINT] Solución
> ```html
> <h1>Un gato se convierte en alcalde de un pueblo</h1>
> <h2>Una elección sorprendente</h2>
> <p>Los vecinos de Villagatos han elegido a Michi como alcalde.</p>
> <p><strong>Es la primera vez que un animal gana unas elecciones en la comarca.</strong></p>
> <h2>Sus primeras medidas</h2>
> <p>Michi ha prometido siestas <em>obligatorias</em> después de comer.</p>
> <hr>
> <p>Por Ana García, corresponsal.</p>
> ```

## Ficha resumen

- **Encabezados** `<h1>`…`<h6>`: un solo `<h1>`, sin saltar niveles, elegidos por importancia y no por tamaño.
- **Párrafos** `<p>`: un bloque de texto cada uno.
- El navegador **junta los espacios y saltos de línea** del código en un solo espacio.
- `<br>` = salto de línea dentro de un párrafo. `<hr>` = cambio de tema.
- `<strong>` = importante (negrita). `<em>` = énfasis (cursiva).
- Comentarios: `<!-- … -->`. Atajo en VS Code: **Ctrl + /**.
- Entidades para caracteres especiales: `&lt;`, `&gt;`, `&amp;`, `&nbsp;`.

## Glosario

| Término | Definición |
| --- | --- |
| Encabezado | Título de una sección de la página. Hay seis niveles, de `<h1>` a `<h6>`. |
| `<p>` | Elemento que marca un párrafo de texto. |
| `<strong>` | Elemento que marca un texto importante. Se ve en negrita. |
| `<em>` | Elemento que marca énfasis, como un cambio de entonación al leer. Se ve en cursiva. |
| `<br>` | Elemento vacío que hace un salto de línea dentro del mismo párrafo. |
| `<hr>` | Elemento vacío que separa dos temas. Se ve como una línea horizontal. |
| Comentario | Nota en el código, entre `<!--` y `-->`, que el navegador no muestra. |
| Entidad | Código que empieza por `&` y acaba en `;` para mostrar caracteres especiales, como `&lt;` para `<`. |
| Lector de pantalla | Programa que lee en voz alta el contenido de la pantalla para personas ciegas o con baja visión. |
