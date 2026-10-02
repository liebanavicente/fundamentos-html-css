---
title: "Tu kit de trabajo"
summary: "Prepara tu ordenador: un editor de código, una carpeta para tu proyecto y el navegador con sus herramientas de desarrollo."
part: empezar
minutes: 25
goals:
  - "Instalar Visual Studio Code y abrir con él una carpeta de proyecto."
  - "Crear tu primer archivo index.html y abrirlo en el navegador."
  - "Usar las herramientas de desarrollo para inspeccionar cualquier elemento."
quiz:
  - question: "¿Por qué no conviene escribir HTML con Word?"
    options:
      - "Porque Word no deja escribir los símbolos < y >"
      - "Porque Word añade formato oculto y no guarda texto plano"
      - "Porque Word es de pago"
      - "Porque Word solo funciona en Windows"
    correct: 1
    explanation: "Word guarda negritas, márgenes y más información invisible. El navegador necesita texto plano, que es lo que guarda un editor de código."
  - question: "¿Qué nombre se suele dar al archivo de la página principal de una web?"
    options:
      - "`principal.html`"
      - "`home.htm`"
      - "`index.html`"
      - "`pagina1.html`"
    correct: 2
    explanation: "Por convenio, `index.html` es la página que se abre por defecto al entrar en una carpeta o en una web."
  - question: "Has cambiado tu archivo HTML pero el navegador sigue mostrando lo de antes. ¿Qué es lo más probable?"
    options:
      - "Que el HTML tiene un error grave"
      - "Que no has guardado el archivo o no has recargado la página"
      - "Que el navegador no es compatible"
      - "Que hace falta Internet"
    correct: 1
    explanation: "El navegador muestra lo que hay guardado en el disco. Guarda (Ctrl + S) y recarga (F5). Con Live Server la recarga es automática."
  - question: "¿Qué hace la opción «Inspeccionar» del navegador?"
    options:
      - "Busca virus en la página"
      - "Abre las herramientas de desarrollo con el HTML y el CSS del elemento"
      - "Descarga la página entera"
      - "Traduce la página"
    correct: 1
    explanation: "Inspeccionar abre las DevTools, donde ves y puedes probar cambios en el HTML y el CSS de cualquier elemento."
  - question: "¿Qué nombre de archivo es más recomendable?"
    options:
      - "`Mi Página Nueva.html`"
      - "`mi-página-nueva.HTML`"
      - "`mi-pagina-nueva.html`"
      - "`MI_PAGINA (1).html`"
    correct: 2
    explanation: "Minúsculas, sin espacios, sin tildes y con guiones. Así el archivo funciona igual en cualquier ordenador y servidor."
cards:
  - front: "¿Qué es un editor de código?"
    back: "Un programa para escribir texto plano con ayudas para programar: colores, autocompletado, numeración de líneas. Ej.: VS Code."
  - front: "¿Cómo se llama el archivo principal de una web?"
    back: "`index.html`"
  - front: "Atajo para guardar"
    back: "Ctrl + S (Windows/Linux) o Cmd + S (Mac)."
  - front: "¿Qué hace la extensión Live Server?"
    back: "Abre tu página en el navegador y la recarga sola cada vez que guardas."
  - front: "¿Cómo abres las herramientas de desarrollo?"
    back: "Clic derecho → Inspeccionar, o F12 (Cmd + Opción + I en Mac)."
  - front: "Reglas para nombrar archivos"
    back: "Minúsculas, sin espacios ni tildes, palabras separadas con guiones: `sobre-mi.html`."
---

## Lo que necesitas (y lo que no)

Para hacer páginas web no hace falta un ordenador potente ni programas de pago. Solo necesitas tres cosas:

1. **Un editor de código**, para escribir los archivos.
2. **Un navegador**, para ver el resultado. El que ya usas sirve (Chrome, Firefox, Edge o Safari).
3. **Una carpeta** donde guardar tu proyecto.

> [!NOTE]
> Mientras aprendes, las zonas de pruebas de este curso son suficientes. Pero en algún momento querrás tener tus páginas en tu propio ordenador, y para eso es esta lección. Si ahora mismo no puedes instalar nada, léela igualmente y vuelve a ella cuando puedas.

## Instala un editor de código

Un **editor de código** es como un bloc de notas pensado para programar: colorea el código para que se lea mejor, numera las líneas, te sugiere cómo terminar lo que escribes y te avisa de algunos errores.

El más usado del mundo es **Visual Studio Code** (VS Code). Es gratuito y funciona en Windows, Mac y Linux.

1. Entra en `code.visualstudio.com`.
2. Descarga la versión para tu sistema e instálala como cualquier otro programa.
3. Ábrelo. Si quieres ponerlo en español: pulsa **Ctrl + Mayús + P** (Cmd + Mayús + P en Mac), escribe `Configure Display Language`, elige **Español** y reinicia.

> [!WARNING]
> **No uses Word, Pages ni Google Docs para escribir HTML.** Guardan formato invisible (márgenes, fuentes, comillas «curvas») que estropea el código. Un archivo HTML debe ser **texto plano**, y eso es lo que guarda un editor de código.

## Crea la carpeta de tu proyecto

Una web es una carpeta con archivos dentro. Vamos a crear la tuya:

1. En tu ordenador, crea una carpeta llamada `mi-primera-web` (por ejemplo, en Documentos).
2. En VS Code, ve a **Archivo → Abrir carpeta…** y elige esa carpeta.
3. En el panel de la izquierda (el **Explorador**), pulsa el icono de **Nuevo archivo** y llámalo `index.html`.

¿Por qué `index.html`? Porque es el nombre que los navegadores y servidores buscan por defecto: cuando entras en una web sin indicar ninguna página, te muestran su `index.html`.

### Cómo nombrar archivos y carpetas

Sigue estas reglas desde el primer día y te ahorrarás muchos problemas:

| ✅ Bien | ❌ Evita | Por qué |
| --- | --- | --- |
| `sobre-mi.html` | `Sobre Mí.html` | Los espacios y las tildes dan problemas en direcciones web |
| `foto-perfil.jpg` | `Foto Perfil (1).JPG` | Mayúsculas y minúsculas cuentan en muchos servidores |
| `estilos.css` | `estilos css final DEFINITIVO.css` | Nombres cortos y claros |

En resumen: **minúsculas, sin espacios, sin tildes ni eñes, y palabras separadas con guiones**.

## Tu primer archivo, de verdad

Escribe esto en `index.html` y guarda con **Ctrl + S** (Cmd + S en Mac):

```html
<h1>¡Hola, mundo!</h1>
<p>Esta es mi primera página web.</p>
```

Ahora ábrelo en el navegador. Hay dos formas:

- **La sencilla:** ve a la carpeta en tu ordenador y haz doble clic en `index.html`. Se abrirá en tu navegador.
- **La cómoda (recomendada):** instala la extensión **Live Server** en VS Code (icono de cuadraditos de la barra izquierda → busca «Live Server» → Instalar). Luego haz clic derecho en `index.html` → **Open with Live Server**. Cada vez que guardes, la página se recargará sola.

> [!TIP]
> El ciclo de trabajo de cualquier persona que hace webs es siempre el mismo: **escribir → guardar → mirar el navegador**. Si un cambio no aparece, casi siempre es porque no has guardado (fíjate si la pestaña del archivo en VS Code tiene un punto blanco: significa «sin guardar») o porque no has recargado la página con **F5**.

## Las herramientas de desarrollo

Todos los navegadores traen unas herramientas para profesionales, las **DevTools** (herramientas de desarrollo). Ábrelas así:

- Clic derecho sobre cualquier cosa de la página → **Inspeccionar**.
- O pulsa **F12** (en Mac, **Cmd + Opción + I**).

Verás un panel con dos zonas importantes:

- **Elementos:** el HTML de la página. Al pasar el ratón por encima de una línea, se resalta ese elemento en la página.
- **Estilos:** el CSS que se aplica al elemento seleccionado. Puedes cambiar valores y ver el efecto al momento.

Prueba esto en cualquier web: inspecciona un título, haz doble clic sobre su texto en el panel de Elementos y escribe otra cosa. ¡Acabas de «hackear» la web! Tranquilidad: solo cambia en tu pantalla, y al recargar vuelve a estar como antes.

> [!IMPORTANT]
> Las DevTools serán tu mejor amiga durante todo el curso. Cuando algo no se vea como esperas, lo primero es **inspeccionarlo**: te dirá qué HTML hay y qué CSS le está afectando.

## Errores típicos

- **No guardar antes de mirar el navegador.** El navegador lee el archivo del disco: si no guardas, no ve tus cambios.
- **Llamar al archivo `index.html.txt`.** Algunos sistemas ocultan las extensiones y el Bloc de notas añade `.txt`. Crea siempre los archivos desde VS Code.
- **Abrir el archivo suelto en VS Code en lugar de la carpeta.** Abre siempre la **carpeta** del proyecto: así ves todos los archivos y las rutas funcionan bien.
- **Tener el archivo en una carpeta con nombre raro**, como `Mi Proyecto (copia)`. Funciona, pero acabará dándote problemas con las rutas.

## Ejercicios

### Ejercicio 1: tu proyecto montado (fácil)

Crea la carpeta `mi-primera-web`, ábrela en VS Code, crea `index.html` con un título y un párrafo, y ábrelo en el navegador. Si todavía no puedes instalar nada, hazlo en esta zona de pruebas.

```playground Ejercicio 1
<h1>¡Hola, mundo!</h1>
<p>Esta es mi primera página web.</p>
```

> [!HINT] Pista
> Si al hacer doble clic en el archivo se abre con otro programa, haz clic derecho → **Abrir con** → tu navegador.

> [!HINT] Solución
> Si ves tu título y tu párrafo en el navegador, y en la barra de direcciones aparece algo como `file:///…/mi-primera-web/index.html` (o `127.0.0.1:5500` con Live Server), lo tienes.

### Ejercicio 2: el ciclo de trabajo (fácil)

Con la página abierta, cambia el texto del párrafo en VS Code, guarda y mira el navegador. Repite tres veces. Si no usas Live Server, tendrás que pulsar **F5** cada vez.

> [!HINT] Pista
> ¿No cambia nada? Mira la pestaña del archivo en VS Code: un punto blanco junto al nombre quiere decir que no has guardado.

> [!HINT] Solución
> Cada vez que guardas y recargas, el navegador muestra el texto nuevo. Si quieres que se guarde solo, en VS Code activa **Archivo → Guardado automático**.

### Ejercicio 3: detective con DevTools (medio)

Abre una web que te guste, inspecciona su título principal y responde: ¿qué etiqueta usa (`h1`, `h2`, `div`…)? ¿Qué color tiene según el panel de Estilos? Después cambia su texto desde las DevTools.

> [!HINT] Pista
> En el panel de Estilos busca la propiedad `color`. A su lado verás un cuadradito con el color: puedes hacer clic en él para cambiarlo.

> [!HINT] Solución
> La respuesta depende de la web, pero lo importante es el gesto: **clic derecho → Inspeccionar** sobre lo que te interesa. Lo vas a repetir cientos de veces.

## Ficha resumen

- Necesitas un **editor de código** (VS Code), un **navegador** y una **carpeta** de proyecto.
- La página principal se llama **`index.html`**.
- Nombres de archivo: **minúsculas, sin espacios ni tildes, con guiones**.
- Ciclo de trabajo: **escribir → guardar (Ctrl + S) → recargar (F5)**. Live Server recarga solo.
- **Inspeccionar** (o F12) abre las DevTools, donde ves el HTML y el CSS de cualquier elemento.

## Glosario

| Término | Definición |
| --- | --- |
| Editor de código | Programa para escribir código en texto plano, con colores, numeración de líneas y ayudas. Ej.: VS Code. |
| Texto plano | Texto sin formato oculto: solo los caracteres que escribes. Es lo que necesita un archivo HTML. |
| `index.html` | Nombre que recibe por convenio la página principal de una web o de una carpeta. |
| Extensión de archivo | Final del nombre de un archivo que indica su tipo: `.html`, `.css`, `.jpg`… |
| Live Server | Extensión de VS Code que abre tu página y la recarga automáticamente cada vez que guardas. |
| DevTools | Herramientas de desarrollo del navegador para ver y probar el HTML y el CSS de una página. Se abren con F12 o «Inspeccionar». |
