---
title: "Formularios"
summary: "Pide datos con campos de texto, casillas, desplegables y botones, bien etiquetados y con validación incluida."
part: html
minutes: 40
goals:
  - "Crear un formulario con `<form>`, `<label>`, `<input>` y `<button>`."
  - "Elegir el tipo de `<input>` adecuado para cada dato."
  - "Usar `<textarea>`, `<select>`, casillas y botones de opción."
  - "Validar campos sin programar con `required`, `minlength` y compañía."
quiz:
  - question: "¿Para qué sirve `<label>`?"
    options:
      - "Para poner un texto de ayuda dentro del campo"
      - "Para dar nombre visible y accesible a un campo"
      - "Para enviar el formulario"
      - "Para validar el campo"
    correct: 1
    explanation: "La etiqueta dice qué hay que escribir, la leen los lectores de pantalla y, al hacer clic en ella, se activa el campo."
  - question: "¿Cómo se conecta un `<label>` con su `<input>`?"
    options:
      - "Con `for` en el label y el mismo `id` en el input"
      - "Con `name` en los dos"
      - "Poniéndolos uno al lado del otro"
      - "Con `href`"
    correct: 0
    explanation: "`<label for=\"email\">` se conecta con `<input id=\"email\">`. También vale meter el input dentro del label."
  - question: "¿Qué tipo de `<input>` usarías para pedir un correo?"
    options:
      - "`type=\"text\"`"
      - "`type=\"mail\"`"
      - "`type=\"email\"`"
      - "`type=\"at\"`"
    correct: 2
    explanation: "`type=\"email\"` comprueba que tenga forma de correo y muestra el teclado con @ en el móvil."
  - question: "Quieres que la persona elija UNA talla entre S, M y L. ¿Qué usas?"
    options:
      - "Tres `checkbox`"
      - "Tres `radio` con el mismo `name`"
      - "Tres `radio` con distinto `name`"
      - "Un `textarea`"
    correct: 1
    explanation: "Los botones de opción (`radio`) con el mismo `name` forman un grupo en el que solo se puede marcar uno."
  - question: "¿Qué hace el atributo `required`?"
    options:
      - "Pone el campo en rojo"
      - "Impide enviar el formulario si el campo está vacío"
      - "Rellena el campo automáticamente"
      - "Oculta el campo"
    correct: 1
    explanation: "El navegador no deja enviar el formulario y muestra un aviso hasta que el campo se rellena."
  - question: "¿Por qué no basta con un `placeholder` en lugar de un `<label>`?"
    options:
      - "Porque el placeholder no funciona en Chrome"
      - "Porque desaparece al escribir y no todos los lectores de pantalla lo leen"
      - "Porque es más largo"
      - "Sí basta"
    correct: 1
    explanation: "El placeholder es solo una pista de ejemplo. El nombre del campo debe estar siempre en un `<label>`."
cards:
  - front: "`<form>`"
    back: "Envuelve todos los campos de un formulario. `action` dice a dónde se envían y `method` cómo."
  - front: "Conectar etiqueta y campo"
    back: "`<label for=\"nombre\">Nombre</label> <input id=\"nombre\">`"
  - front: "¿Para qué sirve `name` en un campo?"
    back: "Es el nombre con el que se envía el dato. Sin `name`, el dato no se envía."
  - front: "Tipos de input útiles"
    back: "`text`, `email`, `password`, `number`, `tel`, `date`, `checkbox`, `radio`."
  - front: "`checkbox` frente a `radio`"
    back: "`checkbox`: puedes marcar varias. `radio`: solo una del grupo (mismo `name`)."
  - front: "Texto largo de varias líneas"
    back: "`<textarea>`, que sí lleva etiqueta de cierre."
  - front: "Lista desplegable"
    back: "`<select>` con varias `<option>` dentro."
  - front: "Validación sin programar"
    back: "`required`, `minlength`, `maxlength`, `min`, `max` y el `type` adecuado."
---

## Para qué sirven los formularios

Cada vez que inicias sesión, buscas en Google, compras algo o te apuntas a un boletín, estás usando un **formulario**. Es la forma en que una web te pide datos.

Con HTML construyes el formulario: los campos, las etiquetas y el botón. Lo que pasa con los datos al enviarlos (guardarlos, mandar un correo…) lo hace un programa en el servidor, que no es parte de este curso. Aun así, verás que HTML ya hace mucho trabajo por su cuenta.

## Las piezas básicas

```playground Formulario mínimo
<form>
  <label for="nombre">Tu nombre</label>
  <input type="text" id="nombre" name="nombre">

  <button type="submit">Enviar</button>
</form>
```

- `<form>` envuelve todo el formulario.
- `<label>` es la **etiqueta** del campo: el texto que dice qué hay que escribir.
- `<input>` es el **campo** donde se escribe. Es un elemento vacío.
- `<button type="submit">` es el botón que **envía** el formulario.

### `for` e `id`: etiqueta y campo, conectados

El `for` del `<label>` debe coincidir con el `id` del `<input>`. Así quedan conectados:

- Al **hacer clic en la etiqueta**, el cursor salta al campo (pruébalo en el ejemplo: es muy útil en el móvil, donde los campos son pequeños).
- Los **lectores de pantalla** leen «Tu nombre, campo de texto» al llegar al campo.

### `name`: el nombre del dato

El atributo `name` es el nombre con el que se envía el dato. Si un campo no tiene `name`, su valor **no se envía**. Suele coincidir con el `id`, pero cada uno tiene su función: `id` conecta con la etiqueta y `name` identifica el dato al enviarlo.

## Tipos de campo

El atributo `type` de `<input>` cambia por completo el campo. Elegir bien el tipo ayuda muchísimo: el móvil muestra el teclado adecuado y el navegador comprueba que el dato tenga sentido.

```playground Tipos de input
<form>
  <p>
    <label for="correo">Correo</label><br>
    <input type="email" id="correo" name="correo" placeholder="ana@ejemplo.com">
  </p>
  <p>
    <label for="clave">Contraseña</label><br>
    <input type="password" id="clave" name="clave">
  </p>
  <p>
    <label for="edad">Edad</label><br>
    <input type="number" id="edad" name="edad" min="0" max="120">
  </p>
  <p>
    <label for="telefono">Teléfono</label><br>
    <input type="tel" id="telefono" name="telefono">
  </p>
  <p>
    <label for="fecha">Fecha de la reserva</label><br>
    <input type="date" id="fecha" name="fecha">
  </p>
  <p>
    <label for="color">Tu color favorito</label><br>
    <input type="color" id="color" name="color">
  </p>
</form>
```

| `type` | Para pedir | Ventaja |
| --- | --- | --- |
| `text` | Texto corto: nombre, ciudad… | El tipo por defecto |
| `email` | Un correo | Comprueba que tenga @ y muestra el teclado con @ |
| `password` | Una contraseña | Oculta lo que escribes |
| `number` | Un número | Flechas para subir y bajar; admite `min` y `max` |
| `tel` | Un teléfono | Teclado numérico en el móvil |
| `date` | Una fecha | Muestra un calendario |
| `checkbox` | Sí o no, o varias opciones | Se pueden marcar varias |
| `radio` | Una opción entre varias | Solo se puede marcar una del grupo |

> [!NOTE]
> El atributo `placeholder` muestra un texto de ejemplo en gris dentro del campo. Es útil como pista, pero **nunca sustituye al `<label>`**: desaparece en cuanto empiezas a escribir.

## Elegir opciones

### Casillas: `checkbox`

Para marcar **varias** opciones (o ninguna). Aquí el `<input>` va **dentro** del `<label>`, otra forma válida de conectarlos sin `for` ni `id`:

```playground Casillas
<form>
  <p>¿Qué te gusta?</p>
  <label><input type="checkbox" name="gustos" value="musica"> Música</label><br>
  <label><input type="checkbox" name="gustos" value="deporte"> Deporte</label><br>
  <label><input type="checkbox" name="gustos" value="cine" checked> Cine</label>
</form>
```

- `value` es lo que se envía si la casilla está marcada.
- `checked` la deja marcada desde el principio.

### Botones de opción: `radio`

Para elegir **solo una**. Todos los `radio` de un grupo deben tener **el mismo `name`**: así el navegador sabe que van juntos y, al marcar uno, desmarca el resto. Se agrupan con `<fieldset>` y el título del grupo va en `<legend>`:

```playground Botones de opción
<form>
  <fieldset>
    <legend>Elige tu talla</legend>
    <label><input type="radio" name="talla" value="s"> S</label>
    <label><input type="radio" name="talla" value="m"> M</label>
    <label><input type="radio" name="talla" value="l"> L</label>
  </fieldset>
</form>
```

> [!TIP]
> Cambia el `name` de uno de los botones del ejemplo por otro distinto. ¿Ves que ahora puedes marcar dos a la vez? Ya no pertenecen al mismo grupo.

### Listas desplegables: `<select>`

Para elegir una opción de una lista larga, sin ocupar mucho sitio:

```playground Desplegable
<form>
  <label for="provincia">Provincia</label>
  <select id="provincia" name="provincia">
    <option value="">Elige una…</option>
    <option value="madrid">Madrid</option>
    <option value="sevilla">Sevilla</option>
    <option value="valencia">Valencia</option>
  </select>
</form>
```

### Texto largo: `<textarea>`

Para mensajes de varias líneas. A diferencia de `<input>`, **sí lleva etiqueta de cierre**:

```html
<label for="mensaje">Mensaje</label>
<textarea id="mensaje" name="mensaje" rows="5"></textarea>
```

## Validación sin programar

HTML puede comprobar los datos **antes de enviarlos**, sin una sola línea de programación:

| Atributo | Qué comprueba |
| --- | --- |
| `required` | Que el campo no esté vacío |
| `minlength="3"` / `maxlength="20"` | Longitud mínima / máxima del texto |
| `min="18"` / `max="99"` | Valor mínimo / máximo de un número o una fecha |
| `type="email"` | Que tenga forma de correo |

Prueba a pulsar «Crear cuenta» con los campos vacíos o mal rellenados:

```playground Validación
<form>
  <p>
    <label for="usuario">Usuario (mínimo 3 letras)</label><br>
    <input type="text" id="usuario" name="usuario" required minlength="3">
  </p>
  <p>
    <label for="email">Correo</label><br>
    <input type="email" id="email" name="email" required>
  </p>
  <p>
    <label for="anios">Edad (18 o más)</label><br>
    <input type="number" id="anios" name="anios" required min="18">
  </p>
  <p>
    <label><input type="checkbox" name="condiciones" required> Acepto las condiciones</label>
  </p>
  <button type="submit">Crear cuenta</button>
</form>
```

> [!WARNING]
> Esta validación es una **ayuda para quien rellena el formulario**, no una medida de seguridad: cualquiera podría saltársela. El servidor siempre tiene que volver a comprobar los datos.

## A dónde van los datos

`<form>` tiene dos atributos para decir qué hacer al enviar:

```html
<form action="https://ejemplo.com/contacto" method="post">
```

- `action`: la dirección del programa que recibirá los datos.
- `method`: cómo se envían. `get` los pone en la dirección (lo que hace un buscador); `post` los envía «por dentro» (lo normal para datos personales).

Mientras aprendes, puedes dejarlos sin poner. Cuando hagas webs reales, hay servicios como **Formspree** o **Netlify Forms** que te dan una dirección de `action` y te reenvían los mensajes por correo, sin necesidad de programar el servidor.

## Errores típicos

- **Campos sin `<label>`**, o con la etiqueta sin conectar (`for` e `id` distintos).
- **Usar `placeholder` como única etiqueta.**
- **Olvidar `name`**: el dato no se envía.
- **Botones de opción con `name` distintos**: dejan marcar varios.
- **Escribir `<textarea/>` o `<textarea>` sin cierre**: el resto de la página acaba dentro del campo.
- **Usar `type="text"` para todo**, perdiendo la ayuda del teclado móvil y la validación.

## Ejercicios

### Ejercicio 1: etiqueta cada campo (fácil)

Este formulario no tiene etiquetas. Añade un `<label>` conectado a cada campo y pon el tipo correcto en el del correo.

```playground Ejercicio 1
<form>
  <input type="text" id="nombre" name="nombre" placeholder="Nombre">
  <input type="text" id="correo" name="correo" placeholder="Correo">
  <button type="submit">Suscribirme</button>
</form>
```

> [!HINT] Pista
> Cada `<label>` necesita un `for` igual al `id` de su campo. El correo debería ser `type="email"`.

> [!HINT] Solución
> ```html
> <form>
>   <label for="nombre">Nombre</label>
>   <input type="text" id="nombre" name="nombre">
>   <label for="correo">Correo</label>
>   <input type="email" id="correo" name="correo">
>   <button type="submit">Suscribirme</button>
> </form>
> ```

### Ejercicio 2: formulario de contacto (medio)

Crea un formulario de contacto con: nombre (obligatorio), correo (obligatorio y con el tipo adecuado), un desplegable «Motivo» con tres opciones, un mensaje de varias líneas (obligatorio, mínimo 10 caracteres) y un botón «Enviar».

```playground Ejercicio 2

```

> [!HINT] Pista 1
> Necesitas dos `<input>`, un `<select>` con `<option>`, un `<textarea>` y un `<button>`. Cada campo, con su `<label>`.

> [!HINT] Pista 2
> `minlength` también funciona en `<textarea>`.

> [!HINT] Solución
> ```html
> <form>
>   <p>
>     <label for="nombre">Nombre</label><br>
>     <input type="text" id="nombre" name="nombre" required>
>   </p>
>   <p>
>     <label for="correo">Correo</label><br>
>     <input type="email" id="correo" name="correo" required>
>   </p>
>   <p>
>     <label for="motivo">Motivo</label><br>
>     <select id="motivo" name="motivo">
>       <option value="duda">Tengo una duda</option>
>       <option value="presupuesto">Quiero un presupuesto</option>
>       <option value="otro">Otro</option>
>     </select>
>   </p>
>   <p>
>     <label for="mensaje">Mensaje</label><br>
>     <textarea id="mensaje" name="mensaje" rows="5" required minlength="10"></textarea>
>   </p>
>   <button type="submit">Enviar</button>
> </form>
> ```

### Ejercicio 3: la encuesta (reto)

Haz una encuesta de una pizzería: tamaño (pequeña, mediana o familiar, solo una), ingredientes extra (queso, champiñones, aceitunas; se pueden elegir varios), fecha de entrega y un botón «Pedir». Agrupa cada pregunta con `<fieldset>` y `<legend>`.

```playground Ejercicio 3

```

> [!HINT] Pista
> El tamaño son tres `radio` con el mismo `name`; los ingredientes, tres `checkbox`.

> [!HINT] Solución
> ```html
> <form>
>   <fieldset>
>     <legend>Tamaño</legend>
>     <label><input type="radio" name="tamano" value="pequena" required> Pequeña</label>
>     <label><input type="radio" name="tamano" value="mediana"> Mediana</label>
>     <label><input type="radio" name="tamano" value="familiar"> Familiar</label>
>   </fieldset>
>   <fieldset>
>     <legend>Ingredientes extra</legend>
>     <label><input type="checkbox" name="extra" value="queso"> Queso</label>
>     <label><input type="checkbox" name="extra" value="champinones"> Champiñones</label>
>     <label><input type="checkbox" name="extra" value="aceitunas"> Aceitunas</label>
>   </fieldset>
>   <p>
>     <label for="entrega">Fecha de entrega</label>
>     <input type="date" id="entrega" name="entrega" required>
>   </p>
>   <button type="submit">Pedir</button>
> </form>
> ```

## Ficha resumen

- `<form>` envuelve el formulario; `<button type="submit">` lo envía.
- Cada campo lleva su **`<label>`**, conectado con `for` = `id` (o con el campo dentro de la etiqueta).
- **`name`** es el nombre con el que se envía el dato.
- Elige el **`type`** adecuado: `email`, `password`, `number`, `tel`, `date`, `checkbox`, `radio`…
- `checkbox` = varias opciones; `radio` con el mismo `name` = una sola. `<select>` = desplegable. `<textarea>` = texto largo.
- Validación: `required`, `minlength`, `maxlength`, `min`, `max`. Es una ayuda, no seguridad.

## Glosario

| Término | Definición |
| --- | --- |
| Formulario | Conjunto de campos con los que una web pide datos. Se escribe con `<form>`. |
| `<label>` | Etiqueta visible y accesible que dice qué dato pide un campo. |
| `<input>` | Campo de formulario. Su atributo `type` decide qué tipo de dato recoge. |
| `name` | Atributo con el nombre con el que se envía el dato de un campo. |
| `placeholder` | Texto de ejemplo que se muestra dentro de un campo vacío. |
| `checkbox` | Casilla de verificación: se pueden marcar varias. |
| `radio` | Botón de opción: solo se puede marcar uno de los que comparten `name`. |
| `<select>` | Lista desplegable de opciones, cada una en un `<option>`. |
| `<textarea>` | Campo de texto de varias líneas. |
| Validación | Comprobación de que los datos de un formulario son correctos antes de enviarlos. |
