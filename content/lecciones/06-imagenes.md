---
title: "Imágenes y multimedia"
summary: "Muestra fotos con su texto alternativo, añade pies de foto y aprende qué formato de imagen elegir."
part: html
minutes: 25
goals:
  - "Insertar imágenes con `<img>` y sus atributos `src` y `alt`."
  - "Escribir buenos textos alternativos."
  - "Usar `<figure>` y `<figcaption>` para los pies de foto."
  - "Elegir el formato de imagen adecuado e incluir vídeo o audio."
quiz:
  - question: "¿Qué atributo de `<img>` indica qué imagen mostrar?"
    options:
      - "`href`"
      - "`src`"
      - "`alt`"
      - "`link`"
    correct: 1
    explanation: "`src` (*source*, origen) es la ruta de la imagen. `href` es para enlaces y `alt` es el texto alternativo."
  - question: "¿Para qué sirve el atributo `alt`?"
    options:
      - "Para poner un título encima de la imagen"
      - "Para describir la imagen a quien no puede verla y mostrarse si no carga"
      - "Para cambiar el tamaño"
      - "Para que la imagen cargue más rápido"
    correct: 1
    explanation: "Los lectores de pantalla leen el `alt`, los buscadores lo usan y se muestra si la imagen falla."
  - question: "Una imagen es puramente decorativa (una florecita de adorno). ¿Qué `alt` le pones?"
    options:
      - "Ninguno: se quita el atributo"
      - "`alt=\"imagen\"`"
      - "`alt=\"\"` (vacío)"
      - "`alt=\"florecita decorativa de adorno\"`"
    correct: 2
    explanation: "Un `alt` vacío le dice al lector de pantalla que puede ignorarla. Sin el atributo, leería el nombre del archivo."
  - question: "¿Qué formato es mejor para un logotipo que debe verse nítido a cualquier tamaño?"
    options:
      - "JPG"
      - "SVG"
      - "GIF"
      - "BMP"
    correct: 1
    explanation: "SVG es un formato vectorial: está hecho de formas, no de píxeles, y nunca se pixela."
  - question: "¿Qué elemento agrupa una imagen con su pie de foto?"
    options:
      - "`<caption>`"
      - "`<picture>`"
      - "`<figure>` con `<figcaption>`"
      - "`<div>` con `<p>`"
    correct: 2
    explanation: "`<figure>` envuelve la imagen y `<figcaption>` es su pie de foto."
cards:
  - front: "Imagen mínima en HTML"
    back: "`<img src=\"foto.jpg\" alt=\"Descripción\">` (elemento vacío, sin cierre)."
  - front: "¿Qué debe decir un buen `alt`?"
    back: "Lo que aporta la imagen en ese contexto, en una frase breve. Sin «imagen de…»."
  - front: "`alt` de una imagen decorativa"
    back: "Vacío: `alt=\"\"`. Así los lectores de pantalla la ignoran."
  - front: "JPG, PNG, SVG, WebP"
    back: "JPG: fotos. PNG: transparencias y capturas. SVG: logos e iconos. WebP: fotos más ligeras."
  - front: "Pie de foto"
    back: "`<figure><img …><figcaption>Texto</figcaption></figure>`"
  - front: "¿Para qué sirven `width` y `height` en `<img>`?"
    back: "Reservan el hueco de la imagen mientras carga, para que la página no dé saltos."
---

## La etiqueta `<img>`

Para mostrar una imagen se usa `<img>`, un **elemento vacío** (sin etiqueta de cierre) con dos atributos imprescindibles:

```html
<img src="perro.jpg" alt="Un perro marrón corriendo por la playa">
```

- `src` (*source*, origen): **la ruta** de la imagen. Funciona igual que el `href` de los enlaces: puede ser relativa (`fotos/perro.jpg`) o absoluta (`https://…`).
- `alt` (*alternative text*): **la descripción** de la imagen en texto.

```playground Una imagen de Internet
<h2>Mi rincón favorito</h2>
<img src="https://picsum.photos/id/1015/600/300" alt="Un río entre montañas con un cielo despejado">
<p>Este es el sitio al que me gustaría viajar.</p>
```

> [!TIP]
> Cambia el `src` por algo que no exista, como `noexiste.jpg`. ¿Ves el texto alternativo en su lugar? Eso mismo ve quien tiene una conexión lenta cuando la imagen no carga.

### Imágenes de tu proyecto

Lo normal es guardar las imágenes dentro de la carpeta del proyecto, a menudo en una subcarpeta propia:

```text
mi-web/
├── index.html
└── img/
    ├── perfil.jpg
    └── logo.svg
```

```html
<img src="img/perfil.jpg" alt="Mi foto de perfil sonriendo">
```

> [!WARNING]
> Ojo con las mayúsculas: muchos servidores distinguen `Foto.JPG` de `foto.jpg`. Si en tu ordenador se ve y al subirla no, casi siempre es eso. Nombres siempre en minúsculas.

## El texto alternativo importa

El atributo `alt` es **obligatorio**, y no es un trámite. Lo usan:

- **Las personas ciegas**: su lector de pantalla lee el `alt` en voz alta.
- **Los buscadores**: Google no «ve» las fotos; lee su `alt`.
- **Todo el mundo**, cuando la imagen no carga.

Cómo escribir un buen `alt`:

| Situación | ❌ Mal | ✅ Bien |
| --- | --- | --- |
| Foto de producto | `alt="zapatilla"` | `alt="Zapatilla de running roja con suela blanca"` |
| Foto con información | `alt="gráfico"` | `alt="Las ventas se duplicaron de enero a marzo"` |
| Un logotipo que enlaza a la portada | `alt="logo"` | `alt="Panadería Lola, ir al inicio"` |
| Adorno sin información | `alt="adorno"` | `alt=""` (vacío) |

> [!TIP]
> No empieces con «Imagen de…» o «Foto de…»: el lector de pantalla ya avisa de que es una imagen. Pregúntate: **si se la describiera por teléfono a alguien, ¿qué le diría?**

## Tamaño: `width` y `height`

Puedes indicar el ancho y el alto de la imagen **en píxeles**, sin escribir `px`:

```html
<img src="perro.jpg" alt="Un perro marrón" width="600" height="400">
```

Aunque luego cambies el tamaño con CSS, conviene ponerlos: así el navegador **reserva el hueco** mientras la imagen se descarga y el texto no da saltos. Escribe el tamaño real de la imagen (o en la misma proporción).

## Pies de foto: `<figure>` y `<figcaption>`

Cuando una imagen lleva un pie de foto, se agrupan con `<figure>`:

```playground Imagen con pie de foto
<figure>
  <img src="https://picsum.photos/id/237/400/260" alt="Cachorro negro mirando a la cámara" width="400" height="260">
  <figcaption>Luna, el primer día que llegó a casa.</figcaption>
</figure>
```

## ¿Qué formato elijo?

| Formato | Úsalo para | Ventaja |
| --- | --- | --- |
| **JPG** | Fotografías | Pesa poco con muchos colores |
| **PNG** | Capturas de pantalla, imágenes con transparencia | Nítido, admite fondo transparente |
| **SVG** | Logotipos, iconos, ilustraciones sencillas | Nunca se pixela, a cualquier tamaño |
| **WebP / AVIF** | Fotos en webs modernas | Mucho más ligeros que JPG |
| **GIF** | Animaciones cortas | Se anima (pero pesa mucho) |

> [!IMPORTANT]
> **El peso de las imágenes es lo que más ralentiza una web.** Una foto del móvil puede pesar 5 MB; en una web debería pesar unos 200 KB. Antes de usarla, redúcela con una herramienta gratuita como **Squoosh** (`squoosh.app`).

## Vídeo y audio

HTML también reproduce vídeo y audio sin nada más. El atributo `controls` muestra los botones de reproducir, volumen, etc.:

```html
<video src="video/paseo.mp4" controls width="640"></video>
<audio src="audio/podcast.mp3" controls></audio>
```

A diferencia de `<img>`, estos sí llevan etiqueta de cierre. Para vídeos de YouTube o mapas de Google Maps, esos servicios te dan un código ya hecho (un `<iframe>`) en su botón **Compartir → Insertar**: solo tienes que copiarlo y pegarlo.

## Errores típicos

- **Olvidar el `alt`** o escribir cosas como `alt="imagen"`.
- **Confundir `src` con `href`.** Las imágenes usan `src`; los enlaces, `href`.
- **Rutas mal escritas**: una mayúscula de más, la carpeta equivocada o una ruta de tu ordenador (`C:\…`).
- **Subir fotos enormes** directamente desde la cámara o el móvil.
- **Escribir `</img>`.** `<img>` es un elemento vacío: no se cierra.

## Ejercicios

### Ejercicio 1: arregla las imágenes (fácil)

Estas imágenes tienen errores. Corrígelos para que se vean y sean accesibles.

```playground Ejercicio 1
<img href="https://picsum.photos/id/1025/300/200">
<img src="https://picsum.photos/id/1084/300/200" alt="imagen"></img>
```

> [!HINT] Pista
> Revisa el nombre del atributo de la ruta, si falta algún `alt`, si los `alt` son descriptivos y si alguna etiqueta sobra.

> [!HINT] Solución
> ```html
> <img src="https://picsum.photos/id/1025/300/200" alt="Un perro carlino envuelto en una manta">
> <img src="https://picsum.photos/id/1084/300/200" alt="Morsas descansando sobre las rocas">
> ```
> Los textos pueden ser otros: lo importante es que describan lo que se ve.

### Ejercicio 2: galería con pies de foto (medio)

Crea una pequeña galería con tres `<figure>`, cada una con una imagen (usa direcciones como `https://picsum.photos/id/10/300/200`, cambiando el número), su `alt`, su `width` y `height`, y un `<figcaption>`.

```playground Ejercicio 2
<h2>Mis viajes</h2>
```

> [!HINT] Pista
> Copia el ejemplo de `<figure>` de la lección tres veces y cambia los números de las imágenes y los textos.

> [!HINT] Solución
> ```html
> <h2>Mis viajes</h2>
> <figure>
>   <img src="https://picsum.photos/id/10/300/200" alt="Bosque junto a un lago" width="300" height="200">
>   <figcaption>Asturias, 2024.</figcaption>
> </figure>
> <figure>
>   <img src="https://picsum.photos/id/15/300/200" alt="Río con rocas y cascada" width="300" height="200">
>   <figcaption>Pirineos, 2025.</figcaption>
> </figure>
> <figure>
>   <img src="https://picsum.photos/id/1015/300/200" alt="Río entre montañas" width="300" height="200">
>   <figcaption>Alpes, 2026.</figcaption>
> </figure>
> ```

### Ejercicio 3: imagen que enlaza (medio)

Haz que una imagen sea un enlace a `https://es.wikipedia.org`. Piensa qué `alt` necesita ahora.

```playground Ejercicio 3

```

> [!HINT] Pista
> Mete el `<img>` dentro del `<a>`. Como la imagen es lo único que hay en el enlace, su `alt` debe decir a dónde lleva.

> [!HINT] Solución
> ```html
> <a href="https://es.wikipedia.org">
>   <img src="https://picsum.photos/id/24/200/120" alt="Ir a Wikipedia" width="200" height="120">
> </a>
> ```

## Ficha resumen

- `<img src="ruta" alt="descripción">` es un elemento vacío.
- **`alt` siempre**: describe lo que aporta la imagen. Si es solo decoración, `alt=""`.
- `width` y `height` reservan el hueco mientras carga.
- `<figure>` + `<figcaption>` para imagen con pie de foto.
- JPG para fotos, PNG para transparencias, SVG para logos e iconos, WebP para fotos ligeras.
- `<video controls>` y `<audio controls>` reproducen multimedia.

## Glosario

| Término | Definición |
| --- | --- |
| `<img>` | Elemento vacío que muestra una imagen. |
| `src` | Atributo con la ruta del archivo de una imagen, vídeo o audio (*source*). |
| `alt` | Texto alternativo que describe una imagen para quien no puede verla. |
| `<figure>` | Elemento que agrupa una imagen (u otro contenido) con su pie. |
| `<figcaption>` | Pie de foto dentro de un `<figure>`. |
| Píxel | Cada uno de los puntitos que forman una imagen o una pantalla. |
| SVG | Formato de imagen vectorial: hecho de formas, se ve nítido a cualquier tamaño. |
| `<video>` | Elemento que reproduce un vídeo. Con `controls` muestra los botones de reproducción. |
