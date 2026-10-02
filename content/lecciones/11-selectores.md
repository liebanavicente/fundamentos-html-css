---
title: "Selectores: a quién le das estilo"
summary: "Elige exactamente qué elementos cambiar con clases, ids, combinaciones y estados como el paso del ratón."
part: css
minutes: 35
goals:
  - "Usar selectores de etiqueta, de clase y de id."
  - "Combinar selectores: agrupar, descendientes y varias clases."
  - "Dar estilo a estados como `:hover` y `:focus`."
  - "Entender la especificidad: por qué una regla gana a otra."
quiz:
  - question: "¿Cómo seleccionas todos los elementos con `class=\"destacado\"`?"
    options:
      - "`destacado { }`"
      - "`#destacado { }`"
      - "`.destacado { }`"
      - "`class=destacado { }`"
    correct: 2
    explanation: "El punto selecciona por clase. La almohadilla `#` es para el id."
  - question: "¿Qué selecciona `nav a`?"
    options:
      - "Los `<nav>` y los `<a>`"
      - "Los `<a>` que están dentro de un `<nav>`"
      - "Los `<nav>` que están dentro de un `<a>`"
      - "Solo el primer enlace del `<nav>`"
    correct: 1
    explanation: "Un espacio entre selectores significa «que esté dentro de». Selecciona los enlaces descendientes de un `nav`."
  - question: "¿Y `h1, h2`?"
    options:
      - "Los `h2` dentro de un `h1`"
      - "Los `h1` y también los `h2`"
      - "Ninguno, es un error"
      - "El primer `h1` y el primer `h2`"
    correct: 1
    explanation: "La coma agrupa: aplica las mismas declaraciones a varios selectores a la vez."
  - question: "Hay dos reglas para el mismo párrafo: `p { color: red; }` y `.nota { color: blue; }`, en ese orden. El párrafo tiene `class=\"nota\"`. ¿De qué color sale?"
    options:
      - "Rojo"
      - "Azul"
      - "Depende del navegador"
      - "Morado"
    correct: 1
    explanation: "Una clase es más específica que una etiqueta, así que gana `.nota`, esté antes o después."
  - question: "¿Cuál es la diferencia principal entre clase e id?"
    options:
      - "No hay diferencia"
      - "Una clase se puede repetir en muchos elementos; un id es único en la página"
      - "El id es más moderno"
      - "La clase solo funciona en `<div>`"
    correct: 1
    explanation: "Las clases son para reutilizar estilos; un id identifica un único elemento (por ejemplo, para enlazarlo con `#`)."
  - question: "¿Qué hace `a:hover`?"
    options:
      - "Da estilo a los enlaces ya visitados"
      - "Da estilo a un enlace mientras tiene el ratón encima"
      - "Oculta los enlaces"
      - "Da estilo al primer enlace"
    correct: 1
    explanation: "`:hover` es una pseudoclase: se aplica solo mientras el puntero está encima del elemento."
cards:
  - front: "Selector de clase"
    back: "`.nombre { }` selecciona los elementos con `class=\"nombre\"`. Se pueden repetir."
  - front: "Selector de id"
    back: "`#nombre { }` selecciona el elemento con `id=\"nombre\"`. Es único."
  - front: "Selector descendiente"
    back: "`nav a`: los `a` que están dentro de un `nav` (con espacio)."
  - front: "Agrupar selectores"
    back: "`h1, h2, h3 { }` aplica lo mismo a todos (con coma)."
  - front: "Varias clases en un elemento"
    back: "`class=\"boton grande\"`. En CSS, `.boton.grande` (sin espacio) selecciona los que tienen las dos."
  - front: "Pseudoclases más útiles"
    back: "`:hover` (ratón encima), `:focus` (seleccionado con teclado o clic), `:first-child`, `:nth-child(2)`."
  - front: "Orden de especificidad"
    back: "Etiqueta < clase < id < atributo `style`. A igualdad, gana la última regla."
---

## Selector de etiqueta

Es el que has usado hasta ahora: el nombre de la etiqueta selecciona **todos** los elementos de ese tipo.

```css
p { color: gray; }      /* todos los párrafos */
h2 { color: teal; }     /* todos los h2 */
```

Es útil para los estilos generales, pero se queda corto en cuanto quieres que **solo algunos** párrafos sean distintos. Para eso están las clases.

## Selector de clase: `.nombre`

Una **clase** es una etiqueta que tú pones a los elementos con el atributo `class`. Luego, en CSS, la seleccionas con un **punto** delante:

```playground Clases
<p>Un párrafo normal.</p>
<p class="aviso">¡Cuidado! Este párrafo es un aviso.</p>
<p>Otro párrafo normal.</p>
<p class="aviso">Y este es otro aviso.</p>
<!-- css -->
.aviso {
  color: darkred;
  background: mistyrose;
  font-weight: bold;
}
```

- Una clase **se puede repetir** en todos los elementos que quieras, aunque sean de etiquetas distintas.
- Un elemento puede tener **varias clases**, separadas por espacios: `class="aviso grande"`.

```playground Varias clases
<button class="boton">Normal</button>
<button class="boton grande">Grande</button>
<button class="boton peligro">Borrar</button>
<!-- css -->
.boton {
  padding: 8px 16px;
  border: 2px solid black;
  background: white;
}

.grande {
  font-size: 24px;
}

.peligro {
  background: crimson;
  color: white;
}
```

> [!TIP]
> Elige nombres de clase que digan **qué es** el elemento, no cómo se ve: `.aviso` mejor que `.rojo`. Si mañana los avisos pasan a ser naranjas, `.rojo` se quedaría con un nombre que miente. Usa minúsculas y guiones: `.tarjeta-producto`.

## Selector de id: `#nombre`

El atributo `id` es un nombre **único** en la página (ya lo usaste para los enlaces internos y los formularios). En CSS se selecciona con **almohadilla**:

```css
#portada {
  background: black;
  color: white;
}
```

> [!NOTE]
> Puedes dar estilo con ids, pero la costumbre es **usar clases para el estilo** y dejar los ids para los enlaces internos y los formularios. El motivo lo verás enseguida, en la especificidad.

## Combinar selectores

### Agrupar con coma

Si varios selectores comparten estilo, sepáralos con comas y escríbelo una sola vez:

```css
h1, h2, h3 {
  font-family: Georgia, serif;
}
```

### Descendientes con espacio

Un espacio entre dos selectores significa **«que esté dentro de»**:

```playground Descendientes
<nav>
  <a href="#">Inicio</a>
  <a href="#">Blog</a>
</nav>
<p>Este <a href="#">enlace</a> está en un párrafo, no en el nav.</p>
<!-- css -->
nav a {
  color: white;
  background: black;
  padding: 4px 8px;
  text-decoration: none;
}
```

Solo cambian los enlaces que están dentro del `<nav>`. Igual funciona con clases: `.tarjeta h2` selecciona los `h2` que hay dentro de algo con clase `tarjeta`.

### Las dos cosas a la vez, sin espacio

Sin espacio, el selector exige que **el mismo elemento** cumpla las dos condiciones:

```css
p.aviso { }          /* párrafos que además tienen la clase aviso */
.boton.peligro { }   /* elementos con la clase boton Y la clase peligro */
```

> [!WARNING]
> Un espacio cambia el significado por completo. `.boton .peligro` (con espacio) busca algo con clase `peligro` **dentro** de un `.boton`; `.boton.peligro` (sin espacio) busca **un elemento** con las dos clases.

## Estados: las pseudoclases

Las **pseudoclases** seleccionan elementos según su **estado** o su posición. Se escriben con dos puntos:

| Pseudoclase | Se aplica cuando… |
| --- | --- |
| `:hover` | El ratón está encima |
| `:focus` | El elemento está activo, por ejemplo un campo en el que escribes o un enlace al que llegas con Tab |
| `:active` | Mientras se hace clic |
| `:first-child` / `:last-child` | Es el primer / último hijo de su padre |
| `:nth-child(2)` | Es el segundo hijo (`odd` y `even` para impares y pares) |

```playground Pseudoclases
<ul>
  <li><a href="#">Primer enlace</a></li>
  <li><a href="#">Segundo enlace</a></li>
  <li><a href="#">Tercer enlace</a></li>
  <li><a href="#">Cuarto enlace</a></li>
</ul>
<input type="text" placeholder="Haz clic aquí">
<!-- css -->
a:hover {
  color: white;
  background: rebeccapurple;
}

li:nth-child(even) {
  background: #eee;
}

input:focus {
  outline: 3px solid gold;
}
```

> [!IMPORTANT]
> Si cambias el aspecto de `:hover`, cambia también el de `:focus` (o usa `a:hover, a:focus`). Muchas personas navegan **solo con el teclado** y necesitan ver dónde están. Nunca quites el contorno del foco sin poner otro.

## Especificidad: qué regla gana

En la lección anterior viste que, a igual importancia, gana la última regla. Pero no todos los selectores son igual de importantes. Cuanto más **específico** es un selector, más fuerza tiene:

| Selector | Fuerza |
| --- | --- |
| Etiqueta (`p`) | Poca |
| Clase (`.aviso`), pseudoclase (`:hover`) | Media |
| Id (`#portada`) | Mucha |
| Atributo `style="…"` en el HTML | Muchísima |

```playground La clase gana a la etiqueta
<p class="nota">¿Soy rojo o azul?</p>
<!-- css -->
.nota {
  color: blue;
}

p {
  color: red;
}
```

Aunque la regla de `p` está después, gana `.nota` porque es más específica. Solo cuando la fuerza es la misma decide el orden.

> [!TIP]
> Por eso conviene dar estilo **casi siempre con clases**: todas tienen la misma fuerza y el orden manda, que es fácil de entender. Si usas ids, luego te costará «ganarles» con otras reglas. Y si alguna vez ves `!important` en un CSS, es un parche para forzar una regla: evítalo mientras aprendes.

## Errores típicos

- **Olvidar el punto** de la clase en CSS (`aviso { }`) o ponerlo en el HTML (`class=".aviso"`).
- **Escribir `class="aviso, grande"`** con coma. En el HTML, las clases se separan con espacios.
- **Confundir `.a .b` con `.a.b`**: el espacio significa «dentro de».
- **Nombres de clase con espacios o mayúsculas raras** (`class="Mi Clase"` son dos clases: `Mi` y `Clase`).
- **No entender por qué una regla no se aplica.** Inspecciona el elemento: la regla perdedora aparece tachada.

## Ejercicios

### Ejercicio 1: clases para los precios (fácil)

Haz que los dos precios se vean en verde y negrita, y que la oferta tenga además fondo amarillo. No toques las reglas de etiqueta.

```playground Ejercicio 1
<h2>Camiseta</h2>
<p>Precio: <span>15 €</span></p>
<h2>Sudadera</h2>
<p>Precio: <span>30 €</span></p>
<p>¡Oferta! Llévate las dos por 40 €.</p>
<!-- css -->
body {
  font-family: sans-serif;
}
```

> [!HINT] Pista
> Pon una clase, por ejemplo `precio`, a los dos `<span>`, y otra, `oferta`, al último párrafo.

> [!HINT] Solución
> ```html
> <p>Precio: <span class="precio">15 €</span></p>
> <p>Precio: <span class="precio">30 €</span></p>
> <p class="oferta">¡Oferta! Llévate las dos por 40 €.</p>
> ```
>
> ```css
> .precio {
>   color: green;
>   font-weight: bold;
> }
>
> .oferta {
>   background: yellow;
> }
> ```

### Ejercicio 2: el menú (medio)

Sin añadir clases, haz que los enlaces del `<nav>` sean blancos sobre fondo negro, sin subrayado (`text-decoration: none`), y que al pasar el ratón cambien a fondo `gold` y texto negro. El enlace del párrafo no debe cambiar. Recuerda el foco.

```playground Ejercicio 2
<nav>
  <a href="#">Inicio</a>
  <a href="#">Tienda</a>
  <a href="#">Contacto</a>
</nav>
<p>Lee nuestro <a href="#">aviso legal</a>.</p>
<!-- css -->

```

> [!HINT] Pista 1
> Necesitas un selector descendiente: los `a` dentro del `nav`.

> [!HINT] Pista 2
> Para el ratón y el teclado, agrupa dos selectores: `nav a:hover, nav a:focus`.

> [!HINT] Solución
> ```css
> nav a {
>   color: white;
>   background: black;
>   padding: 6px 10px;
>   text-decoration: none;
> }
>
> nav a:hover,
> nav a:focus {
>   background: gold;
>   color: black;
> }
> ```

### Ejercicio 3: ¿quién gana? (reto)

Sin probarlo, di de qué color saldrá cada párrafo. Luego cópialo en la zona de pruebas y comprueba.

```css
p { color: black; }
.importante { color: red; }
#especial { color: blue; }
p { color: green; }
```

```html
<p>Párrafo A</p>
<p class="importante">Párrafo B</p>
<p class="importante" id="especial">Párrafo C</p>
```

> [!HINT] Pista
> Primero mira la fuerza de cada selector; solo si empatan, mira el orden.

> [!HINT] Solución
> - **A: verde.** Solo le afectan las dos reglas de `p`, con la misma fuerza: gana la última.
> - **B: rojo.** La clase `.importante` es más específica que `p`.
> - **C: azul.** El id `#especial` es lo más específico de todo.

## Ficha resumen

- `p` = etiqueta · `.clase` = clase (reutilizable) · `#id` = id (único).
- `a, b` = los dos · `a b` = b dentro de a · `a.b` = el mismo elemento con las dos condiciones.
- Pseudoclases: `:hover`, `:focus`, `:active`, `:first-child`, `:nth-child()`.
- **Especificidad**: etiqueta < clase < id < `style`. A igual fuerza, gana la última.
- Da estilo **con clases** y nombres que digan qué es el elemento.

## Glosario

| Término | Definición |
| --- | --- |
| Clase | Nombre que se da a uno o varios elementos con el atributo `class` para darles estilo. En CSS se escribe con punto: `.nombre`. |
| Selector de id | Selector que elige el único elemento con un `id`. Se escribe con almohadilla: `#nombre`. |
| Selector descendiente | Selector con un espacio, como `nav a`, que elige elementos que están dentro de otros. |
| Pseudoclase | Selector que elige elementos según su estado o posición, como `:hover` o `:first-child`. |
| Especificidad | Fuerza de un selector, que decide qué regla gana cuando varias chocan. |
| Foco | Estado del elemento activo, el que recibe lo que escribes o al que llegas con la tecla Tab. |
