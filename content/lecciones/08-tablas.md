---
title: "Tablas"
summary: "Presenta datos en filas y columnas, como un horario o una lista de precios, con cabeceras claras."
part: html
minutes: 20
goals:
  - "Construir una tabla con `<table>`, `<tr>`, `<th>` y `<td>`."
  - "Organizarla en cabecera y cuerpo y ponerle un título."
  - "Unir celdas con `colspan` y `rowspan`."
  - "Saber cuándo usar una tabla y cuándo no."
quiz:
  - question: "¿Qué representa `<tr>`?"
    options:
      - "Una columna"
      - "Una fila"
      - "Una celda"
      - "El título de la tabla"
    correct: 1
    explanation: "`<tr>` es *table row*, una fila. Dentro van las celdas: `<th>` o `<td>`."
  - question: "¿Qué diferencia hay entre `<th>` y `<td>`?"
    options:
      - "`<th>` es una celda de cabecera; `<td>`, una celda de datos"
      - "`<th>` es más ancha"
      - "`<td>` va siempre en la primera fila"
      - "Ninguna"
    correct: 0
    explanation: "`<th>` (*table header*) dice qué hay en esa columna o fila; `<td>` (*table data*) contiene los datos."
  - question: "¿Cómo haces que una celda ocupe dos columnas?"
    options:
      - "`<td width=\"2\">`"
      - "`<td colspan=\"2\">`"
      - "`<td rowspan=\"2\">`"
      - "Escribiendo dos `<td>` iguales"
    correct: 1
    explanation: "`colspan` une columnas; `rowspan` une filas."
  - question: "¿Para qué NO deberías usar una tabla?"
    options:
      - "Un horario de clases"
      - "Una comparativa de precios"
      - "Para colocar el logo a la izquierda y el menú a la derecha"
      - "Los resultados de una liga"
    correct: 2
    explanation: "Las tablas son para datos. Para colocar elementos en la página se usa CSS (Flexbox y Grid)."
cards:
  - front: "Piezas de una tabla"
    back: "`<table>` → `<tr>` (fila) → `<th>` (cabecera) o `<td>` (dato)."
  - front: "`<thead>`, `<tbody>`"
    back: "Agrupan las filas de cabecera y las de datos de la tabla."
  - front: "`<caption>`"
    back: "El título de la tabla. Va justo después de `<table>`."
  - front: "`colspan` y `rowspan`"
    back: "`colspan=\"2\"`: la celda ocupa dos columnas. `rowspan=\"2\"`: ocupa dos filas."
  - front: "¿Cuándo usar una tabla?"
    back: "Solo para datos en filas y columnas. Nunca para maquetar la página."
---

## Datos en filas y columnas

Un horario, una lista de precios, la clasificación de una liga… Cuando tienes **datos que se leen en filas y columnas**, lo que necesitas es una tabla. Se construye así:

- `<table>`: la tabla entera.
- `<tr>` (*table row*): cada **fila**.
- `<th>` (*table header*): una celda de **cabecera**, que dice qué hay en la columna.
- `<td>` (*table data*): una celda de **datos**.

```playground Una tabla sencilla
<table>
  <tr>
    <th>Fruta</th>
    <th>Precio por kilo</th>
  </tr>
  <tr>
    <td>Manzana</td>
    <td>2,10 €</td>
  </tr>
  <tr>
    <td>Plátano</td>
    <td>1,60 €</td>
  </tr>
</table>
```

> [!IMPORTANT]
> En HTML las tablas se escriben **fila a fila**, de izquierda a derecha. No hay etiqueta para «columna»: las columnas salen solas al poner el mismo número de celdas en cada fila.

Las cabeceras salen en negrita y centradas. Los bordes no aparecen porque eso es estilo: te dejamos un poco de CSS en el siguiente ejemplo para verlos (aprenderás a escribirlo dentro de nada).

## Cabecera, cuerpo y título

Las tablas más completas separan las filas de cabecera de las de datos y llevan un título:

- `<caption>`: el **título** de la tabla. Va justo después de `<table>`.
- `<thead>`: agrupa las filas de **cabecera**.
- `<tbody>`: agrupa las filas de **datos**.

```playground Tabla completa
<table>
  <caption>Horario de natación</caption>
  <thead>
    <tr>
      <th>Día</th>
      <th>Mañana</th>
      <th>Tarde</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Lunes</th>
      <td>Iniciación</td>
      <td>Avanzado</td>
    </tr>
    <tr>
      <th>Miércoles</th>
      <td>Aquagym</td>
      <td>Iniciación</td>
    </tr>
  </tbody>
</table>
<!-- css -->
table { border-collapse: collapse; }
th, td { border: 1px solid #999; padding: 8px 12px; }
caption { font-weight: bold; margin-bottom: 8px; }
```

Fíjate en que `<th>` también puede ir al principio de una fila («Lunes», «Miércoles»): es la cabecera de esa fila. Así, quien usa un lector de pantalla oye «Lunes, Mañana: Iniciación» y no solo «Iniciación».

## Celdas que ocupan más de una casilla

A veces una celda debe ocupar varias columnas o filas, como en un horario con un descanso para todos:

- `colspan="2"`: la celda ocupa **dos columnas**.
- `rowspan="2"`: la celda ocupa **dos filas**.

```playground colspan y rowspan
<table>
  <tr>
    <th>Hora</th>
    <th>Lunes</th>
    <th>Martes</th>
  </tr>
  <tr>
    <td>9:00</td>
    <td>Matemáticas</td>
    <td rowspan="2">Taller (2 horas)</td>
  </tr>
  <tr>
    <td>10:00</td>
    <td>Lengua</td>
  </tr>
  <tr>
    <td>11:00</td>
    <td colspan="2">Recreo</td>
  </tr>
</table>
<!-- css -->
table { border-collapse: collapse; }
th, td { border: 1px solid #999; padding: 8px 12px; text-align: center; }
```

> [!TIP]
> Cuando una celda ocupa varias filas, en las filas de abajo hay que escribir **una celda menos**: ese hueco ya está ocupado. Si la tabla se descuadra, cuenta las celdas de cada fila.

## Cuándo no usar una tabla

Hace veinte años las tablas se usaban para colocar cosas en la página (el logo aquí, el menú allí…). **Hoy eso es un error**: las tablas son solo para **datos**. Para colocar elementos se usa CSS con Flexbox y Grid, que verás en la parte 4 del curso.

## Errores típicos

- **Olvidar el `<tr>`** y poner las celdas directamente dentro de `<table>`.
- **Filas con distinto número de celdas**: la tabla se descuadra.
- **Usar `<td>` con `<strong>` en lugar de `<th>`** para las cabeceras.
- **Usar tablas para maquetar** la página.

## Ejercicios

### Ejercicio 1: tu semana (fácil)

Haz una tabla con dos columnas, «Día» y «Actividad», y tres filas de datos con lo que haces esa semana.

```playground Ejercicio 1

<!-- css -->
th, td { border: 1px solid #999; padding: 6px 10px; }
```

> [!HINT] Pista
> La primera fila lleva dos `<th>`; las demás, dos `<td>`.

> [!HINT] Solución
> ```html
> <table>
>   <tr>
>     <th>Día</th>
>     <th>Actividad</th>
>   </tr>
>   <tr>
>     <td>Lunes</td>
>     <td>Gimnasio</td>
>   </tr>
>   <tr>
>     <td>Miércoles</td>
>     <td>Clase de inglés</td>
>   </tr>
>   <tr>
>     <td>Sábado</td>
>     <td>Cine</td>
>   </tr>
> </table>
> ```

### Ejercicio 2: la tabla completa (medio)

Convierte la tabla anterior en una tabla completa: con `<caption>`, `<thead>` y `<tbody>`, y una fila final con una sola celda que ocupe las dos columnas y diga «¡Domingo libre!».

> [!HINT] Pista
> La última fila tiene un único `<td>` con `colspan="2"`.

> [!HINT] Solución
> ```html
> <table>
>   <caption>Mi semana</caption>
>   <thead>
>     <tr>
>       <th>Día</th>
>       <th>Actividad</th>
>     </tr>
>   </thead>
>   <tbody>
>     <tr>
>       <td>Lunes</td>
>       <td>Gimnasio</td>
>     </tr>
>     <tr>
>       <td>Miércoles</td>
>       <td>Clase de inglés</td>
>     </tr>
>     <tr>
>       <td colspan="2">¡Domingo libre!</td>
>     </tr>
>   </tbody>
> </table>
> ```

## Ficha resumen

- `<table>` → `<tr>` (fila) → `<th>` (cabecera) o `<td>` (dato). Se escribe **fila a fila**.
- `<caption>` es el título; `<thead>` y `<tbody>` agrupan cabecera y datos.
- `colspan` une columnas; `rowspan` une filas.
- Las tablas son **solo para datos**, nunca para colocar cosas en la página.

## Glosario

| Término | Definición |
| --- | --- |
| `<table>` | Elemento que contiene una tabla de datos. |
| `<tr>` | Fila de una tabla (*table row*). |
| `<th>` | Celda de cabecera de una columna o una fila (*table header*). |
| `<td>` | Celda de datos (*table data*). |
| `<caption>` | Título de una tabla. |
| `colspan` | Atributo que hace que una celda ocupe varias columnas. |
| `rowspan` | Atributo que hace que una celda ocupe varias filas. |
