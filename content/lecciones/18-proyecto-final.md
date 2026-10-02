---
title: "Proyecto final: tu página personal"
summary: "Junta todo lo aprendido y construye, paso a paso, tu propia web personal lista para enseñar y publicar."
part: proyecto
minutes: 120
goals:
  - "Planificar una página antes de escribir código."
  - "Construir una web completa con HTML semántico y CSS propio."
  - "Hacerla responsive y accesible."
  - "Publicarla gratis en Internet."
quiz:
  - question: "¿Qué conviene hacer antes de empezar a escribir código?"
    options:
      - "Elegir los colores"
      - "Pensar el contenido y dibujar un boceto de las secciones"
      - "Instalar muchas librerías"
      - "Escribir todo el CSS"
    correct: 1
    explanation: "Primero qué vas a contar y cómo se organiza; el código y el estilo vienen después."
  - question: "¿En qué orden se construye una página?"
    options:
      - "Primero el CSS y luego el HTML"
      - "Primero el HTML con todo el contenido, luego el CSS"
      - "Los dos a la vez, línea a línea"
      - "Da igual"
    correct: 1
    explanation: "Con el contenido y la estructura en su sitio, dar estilo es mucho más fácil y el HTML queda limpio."
  - question: "¿Cómo compruebas que tu web se ve bien en un móvil sin tener uno a mano?"
    options:
      - "No se puede"
      - "Con el modo dispositivo de las DevTools"
      - "Haciendo zoom en el navegador"
      - "Subiéndola a Internet"
    correct: 1
    explanation: "Ctrl + Mayús + M en las DevTools simula pantallas de distintos tamaños."
  - question: "¿Qué necesitas para publicar tu web en GitHub Pages?"
    options:
      - "Un servidor de pago"
      - "Una cuenta gratuita de GitHub y subir tus archivos a un repositorio"
      - "Saber JavaScript"
      - "Comprar un dominio"
    correct: 1
    explanation: "GitHub Pages publica gratis una web estática como la tuya, con una dirección del tipo tunombre.github.io."
cards:
  - front: "Orden de trabajo de un proyecto"
    back: "Contenido → boceto → HTML → CSS base → maquetación → responsive → revisión → publicar."
  - front: "Lista de revisión de accesibilidad"
    back: "`lang`, un `<h1>`, encabezados en orden, `alt` en imágenes, `label` en formularios, buen contraste, foco visible."
  - front: "Validar el HTML"
    back: "Pega tu código en `validator.w3.org` para encontrar etiquetas mal cerradas y otros errores."
  - front: "Publicar gratis una web estática"
    back: "GitHub Pages, Netlify o Vercel: subes la carpeta y te dan una dirección pública."
---

## Lo que vas a construir

Ha llegado el momento de juntarlo todo. Vas a construir **tu página personal**: una web de una sola página con:

1. Una **cabecera** con tu nombre y un menú.
2. Una **portada** con una frase sobre ti y un botón.
3. Una sección **Sobre mí** con tu foto.
4. Una sección **Proyectos** (o aficiones) con tarjetas.
5. Un **formulario de contacto**.
6. Un **pie** con enlaces.

Y, al final, la publicarás en Internet para enseñársela a quien quieras.

> [!TIP]
> Si todavía no tienes proyectos que enseñar, usa tus aficiones, tus viajes o tus recetas favoritas. Lo importante es practicar. Y si no te apetece hablar de ti, inventa un personaje o haz la web de un negocio imaginario.

## Paso 1: planifica

Antes de escribir código, coge papel y boli:

- **El contenido**: escribe los textos de verdad (tu frase de presentación, tu párrafo «Sobre mí», tres proyectos con una línea cada uno). Con textos reales es mucho más fácil diseñar.
- **Un boceto**: dibuja cajas para cada sección, una debajo de otra, primero en formato móvil (estrecho) y luego en ordenador (ancho). No hace falta que quede bonito.
- **Tu paleta**: elige dos o tres colores y una o dos fuentes (repasa la lección 12).

## Paso 2: la estructura HTML

Crea una carpeta `mi-web-personal` con `index.html`, `estilos.css` y una carpeta `img` con tu foto. Escribe primero **todo el HTML**, sin preocuparte del aspecto.

```playground Paso 2: el HTML
<header class="cabecera">
  <a class="logo" href="#inicio">Lucía Pérez</a>
  <nav>
    <ul class="menu">
      <li><a href="#sobre-mi">Sobre mí</a></li>
      <li><a href="#proyectos">Proyectos</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
  </nav>
</header>

<main>
  <section class="portada" id="inicio">
    <h1>Hola, soy Lucía</h1>
    <p>Aprendo a crear webs y me encanta la fotografía.</p>
    <a class="boton" href="#contacto">Hablemos</a>
  </section>

  <section class="seccion sobre-mi" id="sobre-mi">
    <img src="https://picsum.photos/id/64/240/240" alt="Foto de perfil de Lucía" width="240" height="240">
    <div>
      <h2>Sobre mí</h2>
      <p>Vivo en Valencia. Después de diez años trabajando en una tienda, decidí aprender a programar. Empecé con HTML y CSS y ahora no paro.</p>
    </div>
  </section>

  <section class="seccion" id="proyectos">
    <h2>Proyectos</h2>
    <div class="tarjetas">
      <article class="tarjeta">
        <h3>Recetario familiar</h3>
        <p>Las recetas de mi abuela, en una web con fotos.</p>
      </article>
      <article class="tarjeta">
        <h3>Club de lectura</h3>
        <p>Página para el club de lectura de mi barrio.</p>
      </article>
      <article class="tarjeta">
        <h3>Portfolio de fotos</h3>
        <p>Galería con mis mejores fotos de viajes.</p>
      </article>
    </div>
  </section>

  <section class="seccion" id="contacto">
    <h2>Contacto</h2>
    <form class="formulario">
      <label for="nombre">Nombre</label>
      <input type="text" id="nombre" name="nombre" required>
      <label for="correo">Correo</label>
      <input type="email" id="correo" name="correo" required>
      <label for="mensaje">Mensaje</label>
      <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
      <button class="boton" type="submit">Enviar</button>
    </form>
  </section>
</main>

<footer class="pie">
  <p>© 2026 Lucía Pérez</p>
</footer>
```

> [!IMPORTANT]
> Antes de seguir, revisa la estructura: un solo `<h1>`, encabezados en orden, `alt` en la imagen, `label` en cada campo y cada sección con su `id` para el menú. Puedes pegar tu código en el validador oficial, **`validator.w3.org`** (pestaña *Validate by Direct Input*), para encontrar etiquetas mal cerradas.

## Paso 3: los estilos base

Ahora el CSS. Empieza por lo general: `box-sizing`, tipografía, colores y las imágenes fluidas. Lo definimos todo pensando en el **móvil** (mobile first).

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  color: #1d1d1f;
  background: #fafaf7;
}

img {
  max-width: 100%;
  height: auto;
}

h1, h2, h3 {
  line-height: 1.15;
}

a {
  color: #6a4cff;
}
```

## Paso 4: sección a sección

Ve sección por sección, de arriba abajo. Te dejamos el resultado completo para que lo compares, pero **inténtalo antes tú**: es la mejor práctica que puedes hacer.

> [!HINT] Cabecera y portada
> ```css
> .cabecera {
>   display: flex;
>   flex-direction: column;
>   align-items: center;
>   gap: 8px;
>   padding: 16px;
>   background: white;
>   border-bottom: 1px solid #e5e5e5;
> }
>
> .logo {
>   font-weight: 800;
>   color: #1d1d1f;
>   text-decoration: none;
> }
>
> .menu {
>   display: flex;
>   gap: 16px;
>   list-style: none;
>   margin: 0;
>   padding: 0;
> }
>
> .portada {
>   display: flex;
>   flex-direction: column;
>   align-items: center;
>   justify-content: center;
>   min-height: 60vh;
>   padding: 48px 16px;
>   text-align: center;
>   background: linear-gradient(135deg, #e0d8ff, #d7ff00);
> }
>
> .portada h1 {
>   margin: 0;
>   font-size: 2.5rem;
> }
>
> .boton {
>   display: inline-block;
>   padding: 12px 24px;
>   border: 0;
>   border-radius: 999px;
>   background: #1d1d1f;
>   color: white;
>   font: inherit;
>   font-weight: 700;
>   text-decoration: none;
>   cursor: pointer;
> }
>
> .boton:hover,
> .boton:focus {
>   background: #6a4cff;
> }
> ```

> [!HINT] Secciones, tarjetas y formulario
> ```css
> .seccion {
>   max-width: 1000px;
>   margin: 0 auto;
>   padding: 48px 16px;
> }
>
> .sobre-mi img {
>   display: block;
>   width: 180px;
>   margin: 0 auto;
>   border-radius: 50%;
> }
>
> .tarjetas {
>   display: grid;
>   grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
>   gap: 16px;
> }
>
> .tarjeta {
>   padding: 20px;
>   background: white;
>   border: 1px solid #e5e5e5;
>   border-radius: 16px;
> }
>
> .formulario {
>   display: flex;
>   flex-direction: column;
>   gap: 8px;
>   max-width: 500px;
> }
>
> .formulario input,
> .formulario textarea {
>   padding: 10px;
>   border: 1px solid #ccc;
>   border-radius: 8px;
>   font: inherit;
> }
>
> .formulario .boton {
>   align-self: flex-start;
>   margin-top: 8px;
> }
>
> .pie {
>   padding: 24px 16px;
>   text-align: center;
>   background: #1d1d1f;
>   color: white;
> }
> ```

## Paso 5: responsive

Con la versión móvil lista, añade lo que cambia en pantallas grandes: la cabecera en una fila, la portada más grande y la foto al lado del texto.

> [!HINT] Media queries
> ```css
> @media (min-width: 768px) {
>   .cabecera {
>     flex-direction: row;
>     justify-content: space-between;
>     padding: 16px 32px;
>   }
>
>   .portada h1 {
>     font-size: 4rem;
>   }
>
>   .sobre-mi {
>     display: flex;
>     align-items: center;
>     gap: 40px;
>   }
>
>   .sobre-mi img {
>     margin: 0;
>   }
> }
> ```

> [!TIP]
> Un detalle que da mucha calidad: añade `html { scroll-behavior: smooth; }` y, al pulsar en el menú, la página se desplazará suavemente hasta cada sección en lugar de saltar.

## El resultado

Aquí tienes la página completa. Pulsa **«Abrir en Práctica»** para verla más grande, cambiarla a tu gusto y descargarla como `index.html`.

```playground Proyecto final completo
<header class="cabecera">
  <a class="logo" href="#inicio">Lucía Pérez</a>
  <nav>
    <ul class="menu">
      <li><a href="#sobre-mi">Sobre mí</a></li>
      <li><a href="#proyectos">Proyectos</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
  </nav>
</header>

<main>
  <section class="portada" id="inicio">
    <h1>Hola, soy Lucía</h1>
    <p>Aprendo a crear webs y me encanta la fotografía.</p>
    <a class="boton" href="#contacto">Hablemos</a>
  </section>

  <section class="seccion sobre-mi" id="sobre-mi">
    <img src="https://picsum.photos/id/64/240/240" alt="Foto de perfil de Lucía" width="240" height="240">
    <div>
      <h2>Sobre mí</h2>
      <p>Vivo en Valencia. Después de diez años trabajando en una tienda, decidí aprender a programar. Empecé con HTML y CSS y ahora no paro.</p>
    </div>
  </section>

  <section class="seccion" id="proyectos">
    <h2>Proyectos</h2>
    <div class="tarjetas">
      <article class="tarjeta">
        <h3>Recetario familiar</h3>
        <p>Las recetas de mi abuela, en una web con fotos.</p>
      </article>
      <article class="tarjeta">
        <h3>Club de lectura</h3>
        <p>Página para el club de lectura de mi barrio.</p>
      </article>
      <article class="tarjeta">
        <h3>Portfolio de fotos</h3>
        <p>Galería con mis mejores fotos de viajes.</p>
      </article>
    </div>
  </section>

  <section class="seccion" id="contacto">
    <h2>Contacto</h2>
    <form class="formulario">
      <label for="nombre">Nombre</label>
      <input type="text" id="nombre" name="nombre" required>
      <label for="correo">Correo</label>
      <input type="email" id="correo" name="correo" required>
      <label for="mensaje">Mensaje</label>
      <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
      <button class="boton" type="submit">Enviar</button>
    </form>
  </section>
</main>

<footer class="pie">
  <p>© 2026 Lucía Pérez</p>
</footer>
<!-- css -->
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  color: #1d1d1f;
  background: #fafaf7;
}

img {
  max-width: 100%;
  height: auto;
}

h1, h2, h3 {
  line-height: 1.15;
}

a {
  color: #6a4cff;
}

.cabecera {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background: white;
  border-bottom: 1px solid #e5e5e5;
}

.logo {
  font-weight: 800;
  color: #1d1d1f;
  text-decoration: none;
}

.menu {
  display: flex;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.portada {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 48px 16px;
  text-align: center;
  background: linear-gradient(135deg, #e0d8ff, #d7ff00);
}

.portada h1 {
  margin: 0;
  font-size: 2.5rem;
}

.boton {
  display: inline-block;
  padding: 12px 24px;
  border: 0;
  border-radius: 999px;
  background: #1d1d1f;
  color: white;
  font: inherit;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
}

.boton:hover,
.boton:focus {
  background: #6a4cff;
}

.seccion {
  max-width: 1000px;
  margin: 0 auto;
  padding: 48px 16px;
}

.sobre-mi img {
  display: block;
  width: 180px;
  margin: 0 auto;
  border-radius: 50%;
}

.tarjetas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.tarjeta {
  padding: 20px;
  background: white;
  border: 1px solid #e5e5e5;
  border-radius: 16px;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 500px;
}

.formulario input,
.formulario textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font: inherit;
}

.formulario .boton {
  align-self: flex-start;
  margin-top: 8px;
}

.pie {
  padding: 24px 16px;
  text-align: center;
  background: #1d1d1f;
  color: white;
}

@media (min-width: 768px) {
  .cabecera {
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 32px;
  }

  .portada h1 {
    font-size: 4rem;
  }

  .sobre-mi {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .sobre-mi img {
    margin: 0;
  }
}
```

## Paso 6: revisa antes de publicar

Repasa esta lista. Puedes marcar cada punto: se guarda en tu navegador.

- [ ] La página tiene `lang="es"`, `<meta charset>`, la etiqueta viewport y un `<title>` con tu nombre.
- [ ] Hay un solo `<h1>` y los encabezados van en orden.
- [ ] Todas las imágenes tienen un `alt` que las describe.
- [ ] Cada campo del formulario tiene su `<label>`.
- [ ] El texto se lee bien sobre su fondo (comprueba el contraste en las DevTools).
- [ ] Se ve dónde está el foco al moverte con la tecla Tab.
- [ ] Se ve bien a 360px, 768px y 1280px de ancho (modo dispositivo de las DevTools).
- [ ] El validador `validator.w3.org` no da errores.
- [ ] Los nombres de los archivos están en minúsculas y sin espacios.

## Paso 7: publícala

Tu web son archivos estáticos (HTML, CSS e imágenes), así que publicarla es **gratis**. Tres opciones sencillas:

| Servicio | Cómo | Dirección que obtienes |
| --- | --- | --- |
| **Netlify Drop** | Arrastra tu carpeta a `app.netlify.com/drop` | `algo.netlify.app` |
| **GitHub Pages** | Sube los archivos a un repositorio y actívalo en *Settings → Pages* | `tunombre.github.io` |
| **Vercel** | Conecta tu repositorio de GitHub | `algo.vercel.app` |

> [!TIP]
> Netlify Drop es lo más rápido: en un minuto tienes tu web en Internet. GitHub Pages merece la pena aprenderlo, porque GitHub es la herramienta que usarás en cualquier trabajo de programación.

## ¿Y ahora qué?

¡Enhorabuena! Has pasado de no saber qué era una etiqueta a construir y publicar una web completa, adaptable y accesible. Algunas ideas para seguir:

- **Haz más webs.** La web de un negocio de tu barrio, una página para tu mascota, la réplica de una web que te guste. Se aprende construyendo.
- **Profundiza en CSS**: transiciones y animaciones, variables (`--color-principal`), `position` y pseudoelementos (`::before`).
- **Juega**: *Flexbox Froggy* y *Grid Garden* son juegos gratuitos para dominar Flexbox y Grid.
- **Aprende JavaScript**, el tercer lenguaje de la web, para que tus páginas reaccionen y hagan cosas.
- **Consulta MDN** (`developer.mozilla.org/es`): es la documentación de referencia de HTML y CSS, y la usan profesionales de todo el mundo.

## Ficha resumen

- Orden de trabajo: **contenido → boceto → HTML → CSS base → secciones → responsive → revisión → publicar**.
- Primero el HTML completo y semántico; después el CSS, de lo general a lo particular.
- Mobile first: CSS para el móvil y media queries con `min-width` para lo demás.
- Revisa la accesibilidad, valida el HTML y prueba varios anchos.
- Publica gratis con Netlify Drop, GitHub Pages o Vercel.

## Glosario

| Término | Definición |
| --- | --- |
| Boceto | Dibujo sencillo de cómo se organizan las secciones de una página, antes de programarla. |
| Validador | Herramienta que revisa un HTML y avisa de errores, como `validator.w3.org`. |
| Web estática | Web formada solo por archivos (HTML, CSS, imágenes) que se envían tal cual, sin programas en el servidor. |
| Hosting | Servicio que guarda los archivos de una web en un servidor y la hace accesible en Internet. |
| GitHub Pages | Servicio gratuito de GitHub para publicar webs estáticas desde un repositorio. |
| Dominio | Nombre de una web en Internet, como `wikipedia.org`. |
