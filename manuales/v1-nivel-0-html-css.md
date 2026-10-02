# Manual nivel 0: HTML + CSS (v1)

## 1) Qué son HTML y CSS

- **HTML**: la estructura del contenido (títulos, párrafos, botones, imágenes).
- **CSS**: el estilo visual (colores, tamaños, espacios, diseño).

Piensa así:
- HTML = esqueleto
- CSS = ropa y apariencia

---

## 2) Tu primera página

Crea un archivo llamado `index.html` y pega esto:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi primera web</title>
  </head>
  <body>
    <h1>Hola, mundo</h1>
    <p>Esta es mi primera página web.</p>
  </body>
</html>
```

Ábrelo en tu navegador con doble clic.

---

## 3) Etiquetas HTML básicas

- `<h1>` a `<h6>`: títulos
- `<p>`: párrafos
- `<a>`: enlaces
- `<img>`: imágenes
- `<ul>` y `<li>`: listas
- `<div>`: contenedor genérico

Ejemplo:

```html
<h1>Mi sitio</h1>
<p>Bienvenido a mi web.</p>
<a href="https://example.com">Ir a ejemplo</a>
```

---

## 4) Añadir CSS

Crea `styles.css`:

```css
body {
  font-family: Arial, sans-serif;
  background: #f5f7fb;
  color: #222;
  margin: 0;
  padding: 24px;
}

h1 {
  color: #1f4acc;
}
```

Y conecta el CSS desde `index.html` dentro de `<head>`:

```html
<link rel="stylesheet" href="styles.css" />
```

---

## 5) Conceptos CSS esenciales

- **Selector**: a quién estilos (`h1`, `.clase`, `#id`)
- **Propiedad**: qué cambias (`color`, `margin`, `font-size`)
- **Valor**: con qué lo cambias (`blue`, `16px`, `20px`)

Ejemplo:

```css
p {
  font-size: 18px;
  line-height: 1.5;
}
```

---

## 6) Mini proyecto recomendado

Haz una “tarjeta personal” con:
- nombre (título),
- una descripción corta,
- un botón con enlace.

Objetivo: practicar HTML + CSS en una sola página.

---

## 7) Errores típicos de principiantes

1. Olvidar cerrar etiquetas.
2. Escribir mal la ruta del CSS.
3. Cambiar CSS y no refrescar el navegador.
4. Mezclar mayúsculas/minúsculas en nombres de archivo.

---

## 8) Siguiente versión sugerida (v2)

Cuando domines esto, la v2 puede incluir:
- flexbox básico,
- estructura semántica (`header`, `main`, `footer`),
- responsive inicial con media queries.
