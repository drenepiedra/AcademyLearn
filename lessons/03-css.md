# Guía Completa de CSS con Ejemplos

## Tabla de Contenidos

1. [Introducción a CSS](#introducción-a-css)
2. [Formas de Aplicar CSS](#formas-de-aplicar-css)
3. [Selectores](#selectores)
4. [Colores](#colores)
5. [Tipografía y Texto](#tipografía-y-texto)
6. [Box Model](#box-model)
7. [Display y Posicionamiento](#display-y-posicionamiento)
8. [Flexbox](#flexbox)
9. [Grid](#grid)
10. [Fondos y Bordes](#fondos-y-bordes)
11. [Sombras y Efectos](#sombras-y-efectos)
12. [Transformaciones](#transformaciones)
13. [Transiciones](#transiciones)
14. [Animaciones](#animaciones)
15. [Responsive Design](#responsive-design)
16. [Pseudo-clases y Pseudo-elementos](#pseudo-clases-y-pseudo-elementos)
17. [Variables CSS](#variables-css)
18. [Filtros y Blend Modes](#filtros-y-blend-modes)

---

CSS (Cascading Style Sheets) es el lenguaje que se usa para dar estilo y diseño a las páginas web. Mientras HTML estructura el contenido, CSS lo hace visual y atractivo.

### Sintaxis Básica

```css
selector {
  propiedad: valor;
  otra-propiedad: valor;
}
```

**Ejemplo:**

```css
p {
  color: blue;
  font-size: 16px;
}
```

---

## Formas de Aplicar CSS

### 1. CSS Inline (en línea)

```html
<p style="color: red; font-size: 20px;">Texto con estilo inline</p>
```

### 2. CSS Interno (en el head)

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      p {
        color: blue;
        font-size: 18px;
      }
      h1 {
        color: green;
      }
    </style>
  </head>
  <body>
    <h1>Título</h1>
    <p>Párrafo</p>
  </body>
</html>
```

### 3. CSS Externo (archivo separado)

**archivo: estilos.css**

```css
p {
  color: purple;
  font-size: 16px;
}
```

**HTML:**

```html
<!DOCTYPE html>
<html>
  <head>
    <link
      rel="stylesheet"
      href="estilos.css" />
  </head>
  <body>
    <p>Párrafo con estilo externo</p>
  </body>
</html>
```

### 4. @import

```css
/* Dentro de un archivo CSS */
@import url("otro-estilo.css");
@import url("https://fonts.googleapis.com/css2?family=Roboto");
```

---

## Selectores

### Selectores Básicos

```css
/* Selector de elemento */
p {
  color: blue;
}

/* Selector de clase */
.mi-clase {
  color: red;
}

/* Selector de ID */
#mi-id {
  color: green;
}

/* Selector universal */
* {
  margin: 0;
  padding: 0;
}
```

### Selectores de Atributo

```css
/* Elemento con atributo específico */
input[type="text"] {
  border: 1px solid black;
}

/* Atributo que contiene un valor */
a[href*="ejemplo"] {
  color: orange;
}

/* Atributo que empieza con */
a[href^="https"] {
  color: green;
}

/* Atributo que termina con */
a[href$=".pdf"] {
  color: red;
}

/* Atributo con valor exacto */
input[type="email"] {
  background: lightblue;
}
```

### Selectores Combinadores

```css
/* Descendiente (cualquier nivel) */
div p {
  color: blue;
}

/* Hijo directo */
div > p {
  color: red;
}

/* Hermano adyacente (siguiente inmediato) */
h1 + p {
  font-weight: bold;
}

/* Hermanos generales (todos los siguientes) */
h1 ~ p {
  color: gray;
}
```

### Agrupación de Selectores

```css
/* Múltiples selectores con mismo estilo */
h1,
h2,
h3 {
  color: navy;
  font-family: Arial;
}

/* Selectores específicos combinados */
.clase1.clase2 {
  background: yellow;
}

div.contenedor p {
  line-height: 1.5;
}
```

---

## Colores

### Formatos de Color

```css
/* Nombres de colores */
.color1 {
  color: red;
}
.color2 {
  color: blue;
}

/* Hexadecimal */
.hex1 {
  color: #ff0000;
}
.hex2 {
  color: #f00;
} /* Forma corta */

/* RGB */
.rgb {
  color: rgb(255, 0, 0);
}

/* RGBA (con transparencia) */
.rgba {
  color: rgba(255, 0, 0, 0.5);
}

/* HSL (Hue, Saturation, Lightness) */
.hsl {
  color: hsl(0, 100%, 50%);
}

/* HSLA (con transparencia) */
.hsla {
  color: hsla(0, 100%, 50%, 0.5);
}

/* Transparencia */
.transparent {
  color: transparent;
}

/* Color actual */
.currentcolor {
  border-color: currentColor;
}
```

### Gradientes

```css
/* Gradiente lineal */
.gradient-linear {
  background: linear-gradient(to right, red, yellow);
}

.gradient-diagonal {
  background: linear-gradient(45deg, blue, green);
}

.gradient-multiple {
  background: linear-gradient(to bottom, red 0%, yellow 50%, green 100%);
}

/* Gradiente radial */
.gradient-radial {
  background: radial-gradient(circle, red, yellow, green);
}

.gradient-radial-position {
  background: radial-gradient(circle at top left, red, blue);
}

/* Gradiente cónico */
.gradient-conic {
  background: conic-gradient(red, yellow, green, blue, red);
}
```

---

## Tipografía y Texto

### Propiedades de Fuente

```css
/* Familia de fuente */
.fuente1 {
  font-family: Arial, Helvetica, sans-serif;
}

.fuente2 {
  font-family: "Times New Roman", serif;
}

.fuente3 {
  font-family: "Courier New", monospace;
}

/* Tamaño */
.tamaño {
  font-size: 16px;
  font-size: 1.2em;
  font-size: 1.5rem;
  font-size: 120%;
}

/* Peso (grosor) */
.peso {
  font-weight: normal; /* 400 */
  font-weight: bold; /* 700 */
  font-weight: lighter;
  font-weight: 300; /* Valores: 100-900 */
}

/* Estilo */
.estilo {
  font-style: normal;
  font-style: italic;
  font-style: oblique;
}

/* Variante */
.variante {
  font-variant: small-caps;
}

/* Shorthand de font */
.font-completo {
  font: italic bold 16px/1.5 Arial, sans-serif;
  /* estilo peso tamaño/altura-línea familia */
}
```

### Propiedades de Texto

```css
/* Color */
.color-texto {
  color: #333;
}

/* Alineación */
.alineacion {
  text-align: left;
  text-align: center;
  text-align: right;
  text-align: justify;
}

/* Decoración */
.decoracion {
  text-decoration: none;
  text-decoration: underline;
  text-decoration: overline;
  text-decoration: line-through;
  text-decoration: underline dotted red;
}

/* Transformación */
.transformacion {
  text-transform: uppercase;
  text-transform: lowercase;
  text-transform: capitalize;
}

/* Espaciado entre letras */
.espaciado-letras {
  letter-spacing: 2px;
  letter-spacing: 0.1em;
}

/* Espaciado entre palabras */
.espaciado-palabras {
  word-spacing: 5px;
}

/* Altura de línea */
.altura-linea {
  line-height: 1.5;
  line-height: 24px;
}

/* Indentación */
.indentacion {
  text-indent: 50px;
}

/* Sombra de texto */
.sombra-texto {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-shadow: 1px 1px 2px red, 0 0 1em blue;
}

/* Desbordamiento de texto */
.overflow-texto {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Espacios en blanco */
.espacios {
  white-space: normal;
  white-space: nowrap;
  white-space: pre;
  white-space: pre-wrap;
}

/* Quiebre de palabras */
.word-break {
  word-break: normal;
  word-break: break-all;
  word-break: keep-all;
  word-wrap: break-word;
}
```

### Google Fonts

```css
/* Importar en CSS */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

body {
  font-family: "Roboto", sans-serif;
}
```

---

## Box Model

Todo elemento en CSS es una caja con: contenido, padding, border y margin.

```css
/* Ancho y alto */
.caja {
  width: 300px;
  height: 200px;

  /* Ancho/alto mínimo y máximo */
  min-width: 200px;
  max-width: 500px;
  min-height: 100px;
  max-height: 400px;
}

/* Padding (espacio interno) */
.padding {
  padding: 20px; /* Todos los lados */
  padding: 10px 20px; /* Vertical | Horizontal */
  padding: 10px 20px 15px 25px; /* Superior | Derecha | Inferior | Izquierda */

  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-left: 15px;
}

/* Border (borde) */
.borde {
  border: 2px solid black;
  border: 1px dashed red;

  /* Lados individuales */
  border-top: 3px solid blue;
  border-right: 1px dotted green;
  border-bottom: 2px double orange;
  border-left: 4px groove purple;

  /* Propiedades separadas */
  border-width: 2px;
  border-style: solid;
  border-color: black;

  /* Estilos de borde */
  border-style: solid;
  border-style: dashed;
  border-style: dotted;
  border-style: double;
  border-style: groove;
  border-style: ridge;
  border-style: inset;
  border-style: outset;
}

/* Border radius (esquinas redondeadas) */
.border-radius {
  border-radius: 10px; /* Todas las esquinas */
  border-radius: 10px 20px; /* Superior-izq/inferior-der | Superior-der/inferior-izq */
  border-radius: 10px 20px 30px 40px; /* Individual para cada esquina */
  border-radius: 50%; /* Círculo perfecto */

  /* Esquinas individuales */
  border-top-left-radius: 10px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 5px;
}

/* Margin (espacio externo) */
.margen {
  margin: 20px;
  margin: 10px 20px;
  margin: 10px 20px 15px 25px;

  margin-top: 10px;
  margin-right: 15px;
  margin-bottom: 10px;
  margin-left: 15px;

  /* Centrar horizontalmente */
  margin: 0 auto;
}

/* Box sizing */
.box-sizing {
  box-sizing: content-box; /* Default: width no incluye padding/border */
  box-sizing: border-box; /* width incluye padding y border */
}

/* Aplicar a todos los elementos */
* {
  box-sizing: border-box;
}

/* Outline (contorno externo, no afecta el layout) */
.outline {
  outline: 2px solid red;
  outline-offset: 5px;
}
```

---

## Display y Posicionamiento

### Display

```css
/* Tipos de display */
.display-block {
  display: block; /* Ocupa todo el ancho disponible */
}

.display-inline {
  display: inline; /* Solo ocupa el espacio de su contenido */
}

.display-inline-block {
  display: inline-block; /* Inline pero con dimensiones */
}

.display-none {
  display: none; /* Oculta el elemento completamente */
}

.display-flex {
  display: flex; /* Contenedor flexible */
}

.display-grid {
  display: grid; /* Contenedor de cuadrícula */
}

.display-inline-flex {
  display: inline-flex;
}

.display-inline-grid {
  display: inline-grid;
}

/* Visibility */
.visibility {
  visibility: visible;
  visibility: hidden; /* Oculto pero ocupa espacio */
}

/* Opacity */
.opacity {
  opacity: 1; /* Totalmente visible */
  opacity: 0.5; /* Semi-transparente */
  opacity: 0; /* Invisible pero ocupa espacio */
}
```

### Position

```css
/* Static (por defecto) */
.static {
  position: static;
}

/* Relative (relativo a su posición original) */
.relative {
  position: relative;
  top: 10px;
  left: 20px;
}

/* Absolute (relativo al ancestro posicionado más cercano) */
.absolute {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

/* Fixed (relativo a la ventana) */
.fixed {
  position: fixed;
  top: 0;
  right: 0;
}

/* Sticky (combinación de relative y fixed) */
.sticky {
  position: sticky;
  top: 0;
}

/* Z-index (orden de apilamiento) */
.z-index {
  position: relative;
  z-index: 10; /* Mayor valor = encima */
}
```

### Float y Clear

```css
/* Float */
.float-left {
  float: left;
}

.float-right {
  float: right;
}

.float-none {
  float: none;
}

/* Clear */
.clear {
  clear: both; /* Limpia floats a ambos lados */
  clear: left;
  clear: right;
}

/* Clearfix (técnica para contener floats) */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
```

### Overflow

```css
.overflow {
  overflow: visible; /* Default */
  overflow: hidden; /* Oculta el contenido desbordado */
  overflow: scroll; /* Siempre muestra barras de scroll */
  overflow: auto; /* Muestra scroll solo si es necesario */

  /* Por eje */
  overflow-x: hidden;
  overflow-y: scroll;
}
```

---

## Flexbox

Flexbox es un sistema de layout unidimensional (una fila o una columna).

### Contenedor Flex

```css
.flex-container {
  display: flex;

  /* Dirección */
  flex-direction: row; /* Default: horizontal izq a der */
  flex-direction: row-reverse; /* Horizontal der a izq */
  flex-direction: column; /* Vertical arriba a abajo */
  flex-direction: column-reverse; /* Vertical abajo a arriba */

  /* Ajuste de línea */
  flex-wrap: nowrap; /* Default: todo en una línea */
  flex-wrap: wrap; /* Múltiples líneas */
  flex-wrap: wrap-reverse; /* Múltiples líneas invertidas */

  /* Shorthand: flex-flow = direction + wrap */
  flex-flow: row wrap;

  /* Alineación horizontal (eje principal) */
  justify-content: flex-start; /* Default */
  justify-content: flex-end;
  justify-content: center;
  justify-content: space-between; /* Espacio entre elementos */
  justify-content: space-around; /* Espacio alrededor */
  justify-content: space-evenly; /* Espacio uniforme */

  /* Alineación vertical (eje transversal) */
  align-items: stretch; /* Default */
  align-items: flex-start;
  align-items: flex-end;
  align-items: center;
  align-items: baseline;

  /* Alineación de múltiples líneas */
  align-content: flex-start;
  align-content: flex-end;
  align-content: center;
  align-content: space-between;
  align-content: space-around;
  align-content: stretch;

  /* Gap entre elementos */
  gap: 20px; /* Espacio entre elementos */
  row-gap: 10px;
  column-gap: 15px;
}
```

### Elementos Flex

```css
.flex-item {
  /* Orden */
  order: 1; /* Default: 0, menor número va primero */

  /* Crecimiento */
  flex-grow: 1; /* Proporción de crecimiento */

  /* Encogimiento */
  flex-shrink: 1; /* Proporción de encogimiento */

  /* Base */
  flex-basis: 200px; /* Tamaño base */
  flex-basis: auto; /* Default */

  /* Shorthand: flex = grow shrink basis */
  flex: 1; /* grow 1, shrink 1, basis 0 */
  flex: 1 1 auto;
  flex: 0 0 200px; /* Tamaño fijo */

  /* Alineación individual */
  align-self: auto; /* Default: hereda del contenedor */
  align-self: flex-start;
  align-self: flex-end;
  align-self: center;
  align-self: stretch;
}
```

### Ejemplo Práctico de Flexbox

```css
/* Navbar horizontal centrado */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

/* Grid de tarjetas responsive */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 300px; /* Crece, encoge, base 300px */
}

/* Centrar vertical y horizontalmente */
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

---

## Grid

CSS Grid es un sistema de layout bidimensional (filas y columnas).

### Contenedor Grid

```css
.grid-container {
  display: grid;

  /* Definir columnas */
  grid-template-columns: 200px 200px 200px;
  grid-template-columns: 1fr 1fr 1fr; /* 3 columnas iguales */
  grid-template-columns: 1fr 2fr 1fr; /* Columna central el doble */
  grid-template-columns: repeat(3, 1fr); /* Repite 3 veces */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsive */

  /* Definir filas */
  grid-template-rows: 100px 200px;
  grid-template-rows: repeat(3, 150px);
  grid-auto-rows: 100px; /* Altura automática de filas */

  /* Gap (espacio entre celdas) */
  gap: 20px;
  row-gap: 15px;
  column-gap: 25px;
  grid-gap: 20px; /* Sintaxis antigua */

  /* Alineación de elementos */
  justify-items: start; /* Horizontal dentro de celda */
  justify-items: end;
  justify-items: center;
  justify-items: stretch; /* Default */

  align-items: start; /* Vertical dentro de celda */
  align-items: end;
  align-items: center;
  align-items: stretch;

  /* Alineación del grid completo */
  justify-content: start; /* Horizontal del grid */
  justify-content: end;
  justify-content: center;
  justify-content: space-between;
  justify-content: space-around;
  justify-content: space-evenly;

  align-content: start; /* Vertical del grid */
  align-content: end;
  align-content: center;
  align-content: space-between;
}
```

### Elementos Grid

```css
.grid-item {
  /* Posición por líneas */
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;

  /* Shorthand */
  grid-column: 1 / 3; /* De línea 1 a 3 */
  grid-row: 1 / 2;

  /* Span (ocupar espacios) */
  grid-column: span 2; /* Ocupa 2 columnas */
  grid-row: span 3; /* Ocupa 3 filas */

  /* Shorthand completo */
  grid-area: 1 / 1 / 2 / 3; /* row-start / col-start / row-end / col-end */

  /* Alineación individual */
  justify-self: center;
  align-self: center;
}
```

### Grid con Áreas Nombradas

```css
.grid-layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: 100px 1fr 50px;
  gap: 10px;
  height: 100vh;
}

.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
.content {
  grid-area: content;
}
.footer {
  grid-area: footer;
}
```

### Ejemplo Práctico de Grid

```css
/* Layout básico de página */
.page-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 80px 1fr 60px;
  min-height: 100vh;
}

/* Galería responsive */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

/* Grid de 12 columnas */
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}

.col-6 {
  grid-column: span 6;
}
.col-4 {
  grid-column: span 4;
}
.col-3 {
  grid-column: span 3;
}
```

---

## Fondos y Bordes

### Fondos

```css
.fondos {
  /* Color de fondo */
  background-color: lightblue;
  background-color: #f0f0f0;
  background-color: rgba(0, 0, 0, 0.5);

  /* Imagen de fondo */
  background-image: url("imagen.jpg");

  /* Repetición */
  background-repeat: repeat; /* Default */
  background-repeat: no-repeat;
  background-repeat: repeat-x; /* Solo horizontal */
  background-repeat: repeat-y; /* Solo vertical */

  /* Posición */
  background-position: center;
  background-position: top left;
  background-position: 50% 50%;
  background-position: 10px 20px;

  /* Tamaño */
  background-size: auto; /* Default */
  background-size: cover; /* Cubre todo el contenedor */
  background-size: contain; /* Contiene toda la imagen */
  background-size: 100px 200px;
  background-size: 50% auto;

  /* Adjunto */
  background-attachment: scroll; /* Default */
  background-attachment: fixed; /* Fijo al hacer scroll */
  background-attachment: local;

  /* Origen */
  background-origin: padding-box; /* Default */
  background-origin: border-box;
  background-origin: content-box;

  /* Clip */
  background-clip: border-box; /* Default */
  background-clip: padding-box;
  background-clip: content-box;
  background-clip: text; /* Texto con fondo */

  /* Shorthand */
  background: url("img.jpg") no-repeat center/cover fixed;
}

/* Múltiples fondos */
.multi-background {
  background: url("top.png") top center no-repeat, url("bottom.png") bottom
      center no-repeat, linear-gradient(to bottom, blue, transparent);
}

/* Fondo con gradiente para texto */
.gradient-text {
  background: linear-gradient(45deg, red, blue);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
```

### Bordes Avanzados

```css
/* Imagen de borde */
.border-image {
  border: 10px solid transparent;
  border-image: url("border.png") 30 round;
  border-image-source: url("border.png");
  border-image-slice: 30;
  border-image-width: 10px;
  border-image-repeat: round;
}

/* Bordes con múltiples colores */
.multi-border {
  border-top: 5px solid red;
  border-right: 5px solid blue;
  border-bottom: 5px solid green;
  border-left: 5px solid yellow;
}
```

---

## Sombras y Efectos

### Sombras

```css
/* Sombra de caja */
.box-shadow {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  /* x-offset y-offset blur spread color */

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5); /* Sombra interna */

  /* Múltiples sombras */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

/* Sombra de texto */
.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  /* Múltiples sombras */
  text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
}

/* Efecto de relieve */
.emboss {
  text-shadow: -1px -1px 0 rgba(255, 255, 255, 0.3), 1px 1px 0 rgba(0, 0, 0, 0.8);
}
```

### Filtros

```css
.filtros {
  /* Blur (desenfoque) */
  filter: blur(5px);

  /* Brillo */
  filter: brightness(150%);

  /* Contraste */
  filter: contrast(200%);

  /* Escala de grises */
  filter: grayscale(100%);

  /* Tono rotado */
  filter: hue-rotate(90deg);

  /* Invertir colores */
  filter: invert(100%);

  /* Opacidad */
  filter: opacity(50%);

  /* Saturación */
  filter: saturate(200%);

  /* Sepia */
  filter: sepia(100%);

  /* Sombra (drop-shadow) */
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));

  /* Múltiples filtros */
  filter: brightness(110%) contrast(120%) saturate(130%);
}

/* Filtro en hover */
img:hover {
  filter: grayscale(0%) brightness(120%);
  transition: filter 0.3s;
}
```

### Backdrop Filter

```css
/* Filtro de fondo (efecto glassmorphism) */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

---
