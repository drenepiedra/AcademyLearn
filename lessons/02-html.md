# Guía Completa de HTML con Ejemplos

## Contenidos

1. [Introducción a HTML](##introducción-a-html)
2. [Estructura Básica](##estructura-básica)
3. [Elementos de Texto](##elementos-de-texto)
4. [Listas](##listas)
5. [Enlaces e Imágenes](##enlaces-e-imágenes)
6. [Tablas](##tablas)
7. [Formularios](##formularios)
8. [Elementos Semánticos](##elementos-semánticos)
9. [Multimedia](##multimedia)
10. [Metadatos y SEO](##metadatos-y-seo)

---

## Introducción a HTML

HTML (HyperText Markup Language) es el lenguaje estándar para crear páginas web. No es un lenguaje de programación, sino un lenguaje de marcado que estructura el contenido web.

### ¿Qué es una etiqueta?

Las etiquetas HTML están encerradas entre `<` y `>`. La mayoría tienen una etiqueta de apertura y cierre:

```html
<p>Este es un párrafo</p>
```

---

## Estructura Básica

Todo documento HTML debe tener esta estructura básica:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0" />
    <title>Mi Primera Página</title>
  </head>
  <body>
    <h1>¡Hola Mundo!</h1>
    <p>Este es mi primer documento HTML.</p>
  </body>
</html>
```

### Explicación:

- `<!DOCTYPE html>`: Declara que es un documento HTML5
- `<html>`: Elemento raíz del documento
- `<meta>`: Metadatos que proporcionan información sobre la página, no visible para el usuario
- `<head>`: Contiene metadatos (información sobre la página)
- `<body>`: Contiene el contenido visible

---

## Elementos de Texto

### Encabezados

Hay 6 niveles de encabezados, de `<h1>` (más importante) a `<h6>` (menos importante):

```html
<h1>Encabezado Nivel 1</h1>
<h2>Encabezado Nivel 2</h2>
<h3>Encabezado Nivel 3</h3>
<h4>Encabezado Nivel 4</h4>
<h5>Encabezado Nivel 5</h5>
<h6>Encabezado Nivel 6</h6>
```

### Párrafos y Saltos de Línea

```html
<p>
  Este es un párrafo normal. Los párrafos crean automáticamente un espacio antes
  y después.
</p>

<p>
  Este es otro párrafo.<br />
  Con un salto de línea dentro del mismo párrafo.
</p>

<hr />
<!-- La etiqueta hr crea una línea horizontal -->
```

### Formato de Texto

```html
<!-- Negrita -->
<strong>Texto importante (negrita semántica)</strong>
<b>Texto en negrita (solo visual)</b>

<!-- Cursiva -->
<em>Texto enfatizado (cursiva semántica)</em>
<i>Texto en cursiva (solo visual)</i>

<!-- Otros formatos -->
<u>Texto subrayado</u>
<s>Texto tachado</s>
<mark>Texto resaltado</mark>
<small>Texto pequeño</small>
<del>Texto eliminado</del>
<ins>Texto insertado</ins>

<!-- Superíndice y subíndice -->
<p>E = mc<sup>2</sup></p>
<p>H<sub>2</sub>O</p>
```

### Citas

```html
<!-- Cita en bloque -->
<blockquote cite="https://ejemplo.com">
  "La imaginación es más importante que el conocimiento."
  <footer>— Albert Einstein</footer>
</blockquote>

<!-- Cita en línea -->
<p>Como dijo Einstein: <q>La vida es como andar en bicicleta</q>.</p>

<!-- Abreviaciones -->
<p>
  La <abbr title="Organización Mundial de la Salud">OMS</abbr> publicó nuevas
  guías.
</p>
```

### Código y Preformateado

```html
<!-- Código en línea -->
<p>Usa la etiqueta <code>&lt;p&gt;</code> para párrafos.</p>

<!-- Bloque de código -->
<pre>
<code>
function saludar() {
    console.log("Hola Mundo");
}
</code>
</pre>

<!-- Variables y entrada de teclado -->
<p>La variable <var>x</var> es igual a 10.</p>
<p>Presiona <kbd>Ctrl</kbd> + <kbd>C</kbd> para copiar.</p>
<p>El resultado es: <samp>Archivo guardado exitosamente</samp></p>
```

---

## Listas

### Lista Desordenada

```html
<ul>
  <li>Manzanas</li>
  <li>Naranjas</li>
  <li>Plátanos</li>
</ul>
```

### Lista Ordenada

```html
<ol>
  <li>Primero</li>
  <li>Segundo</li>
  <li>Tercero</li>
</ol>

<!-- Lista ordenada con atributos -->
<ol
  start="5"
  type="A">
  <li>Elemento E</li>
  <li>Elemento F</li>
</ol>
```

### Lista de Definiciones

```html
<dl>
  <dt>HTML</dt>
  <dd>Lenguaje de marcado para crear páginas web</dd>

  <dt>CSS</dt>
  <dd>Lenguaje de estilos para diseñar páginas web</dd>

  <dt>JavaScript</dt>
  <dd>Lenguaje de programación para hacer páginas interactivas</dd>
</dl>
```

### Listas Anidadas

```html
<ul>
  <li>
    Frutas
    <ul>
      <li>Manzanas</li>
      <li>Naranjas</li>
    </ul>
  </li>
  <li>
    Verduras
    <ul>
      <li>Zanahorias</li>
      <li>Brócoli</li>
    </ul>
  </li>
</ul>
```

---

## Enlaces e Imágenes

### Enlaces (Links)

```html
<!-- Enlace básico -->
<a href="https://www.ejemplo.com">Visita Ejemplo</a>

<!-- Enlace que abre en nueva pestaña -->
<a
  href="https://www.ejemplo.com"
  target="_blank"
  rel="noopener"
  >Abrir en nueva pestaña</a
>

<!-- Enlace a correo -->
<a href="mailto:correo@ejemplo.com">Enviar Email</a>

<!-- Enlace a teléfono -->
<a href="tel:+123456789">Llamar</a>

<!-- Ancla interna -->
<a href="#seccion2">Ir a Sección 2</a>
<h2 id="seccion2">Sección 2</h2>

<!-- Enlace de descarga -->
<a
  href="documento.pdf"
  download
  >Descargar PDF</a
>
```

### Imágenes

```html
<!-- Imagen básica -->
<img
  src="imagen.jpg"
  alt="Descripción de la imagen" />

<!-- Imagen con dimensiones -->
<img
  src="foto.png"
  alt="Mi foto"
  width="300"
  height="200" />

<!-- Imagen como enlace -->
<a href="https://ejemplo.com">
  <img
    src="logo.png"
    alt="Logo de Ejemplo" />
</a>

<!-- Imagen con título (tooltip) -->
<img
  src="paisaje.jpg"
  alt="Hermoso paisaje"
  title="Paisaje de montaña" />
```

### Figure y Figcaption

```html
<figure>
  <img
    src="grafico.png"
    alt="Gráfico de ventas" />
  <figcaption>Fig. 1 - Ventas del último trimestre</figcaption>
</figure>
```

---

## Tablas

### Tabla Básica

```html
<table border="1">
  <tr>
    <th>Nombre</th>
    <th>Edad</th>
    <th>Ciudad</th>
  </tr>
  <tr>
    <td>Ana</td>
    <td>25</td>
    <td>Madrid</td>
  </tr>
  <tr>
    <td>Juan</td>
    <td>30</td>
    <td>Barcelona</td>
  </tr>
</table>
```

### Tabla Completa con Secciones

```html
<table>
  <caption>
    Registro de Estudiantes
  </caption>
  <thead>
    <tr>
      <th>ID</th>
      <th>Nombre</th>
      <th>Nota</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>001</td>
      <td>María</td>
      <td>9.5</td>
    </tr>
    <tr>
      <td>002</td>
      <td>Pedro</td>
      <td>8.7</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Promedio</td>
      <td>9.1</td>
    </tr>
  </tfoot>
</table>
```

### Celdas Combinadas

```html
<table border="1">
  <tr>
    <th>Nombre</th>
    <th colspan="2">Teléfono</th>
  </tr>
  <tr>
    <td>Ana</td>
    <td>Casa: 123456</td>
    <td>Móvil: 789012</td>
  </tr>
  <tr>
    <td rowspan="2">Juan</td>
    <td>Casa: 345678</td>
    <td>Móvil: 901234</td>
  </tr>
  <tr>
    <td colspan="2">Trabajo: 567890</td>
  </tr>
</table>
```

---

## Formularios

### Formulario Básico

```html
<form
  action="/procesar"
  method="post">
  <label for="nombre">Nombre:</label>
  <input
    type="text"
    id="nombre"
    name="nombre"
    required />

  <label for="email">Email:</label>
  <input
    type="email"
    id="email"
    name="email"
    required />

  <button type="submit">Enviar</button>
</form>
```

### Tipos de Input

```html
<form>
  <!-- Texto -->
  <input
    type="text"
    placeholder="Texto normal" />

  <!-- Contraseña -->
  <input
    type="password"
    placeholder="Contraseña" />

  <!-- Email -->
  <input
    type="email"
    placeholder="correo@ejemplo.com" />

  <!-- Número -->
  <input
    type="number"
    min="0"
    max="100"
    step="5" />

  <!-- Fecha -->
  <input type="date" />

  <!-- Hora -->
  <input type="time" />

  <!-- Color -->
  <input type="color" />

  <!-- Archivo -->
  <input
    type="file"
    accept=".pdf,.jpg" />

  <!-- URL -->
  <input
    type="url"
    placeholder="https://ejemplo.com" />

  <!-- Teléfono -->
  <input
    type="tel"
    placeholder="123-456-7890" />

  <!-- Búsqueda -->
  <input
    type="search"
    placeholder="Buscar..." />

  <!-- Rango -->
  <input
    type="range"
    min="0"
    max="100"
    value="50" />
</form>
```

### Radio Buttons y Checkboxes

```html
<form>
  <!-- Radio buttons (solo una opción) -->
  <p>Género:</p>
  <input
    type="radio"
    id="masculino"
    name="genero"
    value="m" />
  <label for="masculino">Masculino</label>

  <input
    type="radio"
    id="femenino"
    name="genero"
    value="f" />
  <label for="femenino">Femenino</label>

  <input
    type="radio"
    id="otro"
    name="genero"
    value="otro" />
  <label for="otro">Otro</label>

  <!-- Checkboxes (múltiples opciones) -->
  <p>Intereses:</p>
  <input
    type="checkbox"
    id="deportes"
    name="intereses"
    value="deportes" />
  <label for="deportes">Deportes</label>

  <input
    type="checkbox"
    id="musica"
    name="intereses"
    value="musica" />
  <label for="musica">Música</label>

  <input
    type="checkbox"
    id="lectura"
    name="intereses"
    value="lectura" />
  <label for="lectura">Lectura</label>
</form>
```

### Select y Textarea

```html
<form>
  <!-- Lista desplegable -->
  <label for="pais">País:</label>
  <select
    id="pais"
    name="pais">
    <option value="">Selecciona un país</option>
    <option value="es">España</option>
    <option value="mx">México</option>
    <option value="ar">Argentina</option>
    <option value="co">Colombia</option>
  </select>

  <!-- Select múltiple -->
  <label for="idiomas">Idiomas:</label>
  <select
    id="idiomas"
    name="idiomas"
    multiple
    size="3">
    <option value="es">Español</option>
    <option value="en">Inglés</option>
    <option value="fr">Francés</option>
    <option value="de">Alemán</option>
  </select>

  <!-- Área de texto -->
  <label for="mensaje">Mensaje:</label>
  <textarea
    id="mensaje"
    name="mensaje"
    rows="4"
    cols="50"
    placeholder="Escribe tu mensaje aquí..."></textarea>
</form>
```

### Fieldset y Datalist

```html
<form>
  <!-- Agrupar campos -->
  <fieldset>
    <legend>Información Personal</legend>
    <label for="nombre">Nombre:</label>
    <input
      type="text"
      id="nombre"
      name="nombre" />

    <label for="apellido">Apellido:</label>
    <input
      type="text"
      id="apellido"
      name="apellido" />
  </fieldset>

  <!-- Lista de sugerencias -->
  <label for="navegador">Navegador favorito:</label>
  <input
    list="navegadores"
    id="navegador"
    name="navegador" />
  <datalist id="navegadores">
    <option value="Chrome"></option>
    <option value="Firefox"></option>
    <option value="Safari"></option>
    <option value="Edge"></option>
  </datalist>
</form>
```

### Atributos de Validación

```html
<form>
  <!-- Campo requerido -->
  <input
    type="text"
    required />

  <!-- Mínimo y máximo -->
  <input
    type="number"
    min="18"
    max="99" />

  <!-- Longitud de texto -->
  <input
    type="text"
    minlength="3"
    maxlength="20" />

  <!-- Patrón (regex) -->
  <input
    type="text"
    pattern="[A-Za-z]{3,}"
    title="Mínimo 3 letras" />

  <!-- Solo lectura -->
  <input
    type="text"
    value="No editable"
    readonly />

  <!-- Deshabilitado -->
  <input
    type="text"
    disabled />

  <!-- Autocompletar -->
  <input
    type="text"
    autocomplete="off" />

  <!-- Autofocus -->
  <input
    type="text"
    autofocus />
</form>
```

---

## Elementos Semánticos

HTML5 introduce etiquetas semánticas que dan significado al contenido:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Página con Semántica</title>
  </head>
  <body>
    <!-- Encabezado principal -->
    <header>
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre">Sobre Nosotros</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>

    <!-- Contenido principal -->
    <main>
      <!-- Artículo independiente -->
      <article>
        <header>
          <h1>Título del Artículo</h1>
          <p>
            Publicado el <time datetime="2024-01-15">15 de enero de 2024</time>
          </p>
        </header>

        <section>
          <h2>Introducción</h2>
          <p>Contenido de la introducción...</p>
        </section>

        <section>
          <h2>Desarrollo</h2>
          <p>Contenido del desarrollo...</p>
        </section>

        <footer>
          <p>Autor: Juan Pérez</p>
        </footer>
      </article>

      <!-- Barra lateral -->
      <aside>
        <h3>Artículos Relacionados</h3>
        <ul>
          <li><a href="#">Artículo 1</a></li>
          <li><a href="#">Artículo 2</a></li>
        </ul>
      </aside>
    </main>

    <!-- Pie de página -->
    <footer>
      <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
      <address>
        Contacto: <a href="mailto:info@ejemplo.com">info@ejemplo.com</a>
      </address>
    </footer>
  </body>
</html>
```

### Otros Elementos Semánticos

```html
<!-- Detalles expandibles -->
<details>
  <summary>Haz clic para ver más</summary>
  <p>Contenido oculto que se muestra al expandir.</p>
</details>

<!-- Marcador de progreso -->
<progress
  value="70"
  max="100">
  70%
</progress>

<!-- Medidor -->
<meter
  value="0.7"
  min="0"
  max="1">
  70%
</meter>

<!-- Diálogo/Modal -->
<dialog open>
  <p>Este es un diálogo</p>
  <button>Cerrar</button>
</dialog>
```

---

## Multimedia

### Audio

```html
<!-- Audio básico -->
<audio controls>
  <source
    src="audio.mp3"
    type="audio/mpeg" />
  <source
    src="audio.ogg"
    type="audio/ogg" />
  Tu navegador no soporta el elemento de audio.
</audio>

<!-- Audio con opciones -->
<audio
  controls
  autoplay
  loop
  muted>
  <source
    src="musica.mp3"
    type="audio/mpeg" />
</audio>
```

### Video

```html
<!-- Video básico -->
<video
  controls
  width="640"
  height="360">
  <source
    src="video.mp4"
    type="video/mp4" />
  <source
    src="video.webm"
    type="video/webm" />
  Tu navegador no soporta el elemento de video.
</video>

<!-- Video con póster y subtítulos -->
<video
  controls
  poster="miniatura.jpg">
  <source
    src="pelicula.mp4"
    type="video/mp4" />
  <track
    kind="subtitles"
    src="subtitulos-es.vtt"
    srclang="es"
    label="Español" />
  <track
    kind="subtitles"
    src="subtitulos-en.vtt"
    srclang="en"
    label="English" />
</video>
```

### Iframe (Contenido Embebido)

```html
<!-- Iframe básico -->
<iframe
  src="https://www.ejemplo.com"
  width="600"
  height="400"></iframe>

<!-- YouTube embebido -->
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>

<!-- Google Maps -->
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy">
</iframe>
```

### SVG (Gráficos Vectoriales)

```html
<svg
  width="100"
  height="100">
  <circle
    cx="50"
    cy="50"
    r="40"
    stroke="black"
    stroke-width="3"
    fill="red" />
</svg>

<svg
  width="200"
  height="100">
  <rect
    width="200"
    height="100"
    fill="blue" />
  <text
    x="10"
    y="50"
    fill="white"
    font-size="20">
    Hola SVG
  </text>
</svg>
```

### Canvas

```html
<canvas
  id="miCanvas"
  width="400"
  height="200"
  style="border:1px solid #000;">
  Tu navegador no soporta el elemento canvas.
</canvas>
```

---

## Metadatos y SEO

### Metadatos en el Head

```html
<head>
  <!-- Codificación de caracteres -->
  <meta charset="UTF-8" />

  <!-- Responsive design -->
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0" />

  <!-- Descripción para motores de búsqueda -->
  <meta
    name="description"
    content="Descripción de la página para SEO" />

  <!-- Palabras clave -->
  <meta
    name="keywords"
    content="html, css, javascript, tutorial" />

  <!-- Autor -->
  <meta
    name="author"
    content="Tu Nombre" />

  <!-- Robots -->
  <meta
    name="robots"
    content="index, follow" />

  <!-- Refresh automático -->
  <meta
    http-equiv="refresh"
    content="30" />

  <!-- Open Graph (Facebook) -->
  <meta
    property="og:title"
    content="Título de la página" />
  <meta
    property="og:description"
    content="Descripción de la página" />
  <meta
    property="og:image"
    content="imagen.jpg" />
  <meta
    property="og:url"
    content="https://ejemplo.com" />

  <!-- Twitter Card -->
  <meta
    name="twitter:card"
    content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Título de la página" />
  <meta
    name="twitter:description"
    content="Descripción de la página" />
  <meta
    name="twitter:image"
    content="imagen.jpg" />

  <!-- Favicon -->
  <link
    rel="icon"
    type="image/x-icon"
    href="favicon.ico" />
  <link
    rel="apple-touch-icon"
    href="apple-touch-icon.png" />

  <!-- Hojas de estilo -->
  <link
    rel="stylesheet"
    href="estilos.css" />

  <!-- Scripts -->
  <script
    src="script.js"
    defer></script>

  <title>Título de la Página</title>
</head>
```

---

## Elementos Diversos

### Comentarios

```html
<!-- Este es un comentario y no se muestra en el navegador -->

<!--
    Comentario
    de múltiples
    líneas
-->
```

### Entidades HTML

```html
<!-- Caracteres especiales -->
<p>&lt;div&gt; muestra <div></p>
<p>Espacio&nbsp;sin&nbsp;romper</p>
<p>Copyright &copy; 2024</p>
<p>Marca registrada &reg;</p>
<p>Euro: &euro;</p>
<p>Comillas: &quot;texto&quot;</p>
<p>Ampersand: &amp;</p>
```

### Div y Span

```html
<!-- Contenedor de bloque -->
<div class="contenedor">
  <p>Contenido dentro de un div</p>
</div>

<!-- Contenedor en línea -->
<p>
  Este es un <span style="color: red;">texto rojo</span> dentro de un párrafo.
</p>
```

### Atributos Globales

```html
<!-- ID único -->
<div id="principal"></div>

<!-- Clases (pueden repetirse) -->
<p class="texto grande importante"></p>

<!-- Estilos en línea -->
<p style="color: blue; font-size: 18px;">Texto estilizado</p>

<!-- Título (tooltip) -->
<p title="Información adicional">Pasa el cursor aquí</p>

<!-- Data attributes (para JavaScript) -->
<div
  data-user-id="123"
  data-role="admin"></div>

<!-- Ocultar elemento -->
<p hidden>Este párrafo está oculto</p>

<!-- Dirección del texto -->
<p dir="rtl">Texto de derecha a izquierda</p>

<!-- Idioma -->
<p lang="en">This is in English</p>

<!-- Contenido editable -->
<div contenteditable="true">Puedes editar este texto</div>

<!-- Arrastrable -->
<p draggable="true">Puedes arrastrar este elemento</p>

<!-- Tecla de acceso rápido -->
<button accesskey="s">Guardar (Alt+S)</button>

<!-- Orden de tabulación -->
<input
  type="text"
  tabindex="1" />
<input
  type="text"
  tabindex="2" />
```

---

## Mejores Prácticas

### 1. Semántica Correcta

Usa las etiquetas correctas para el contenido correcto. Por ejemplo:

- `<article>` para contenido independiente
- `<nav>` para navegación
- `<aside>` para contenido relacionado pero secundario

### 2. Accesibilidad

```html
<!-- Siempre incluye alt en imágenes -->
<img
  src="foto.jpg"
  alt="Descripción clara de la imagen" />

<!-- Usa labels con inputs -->
<label for="email">Email:</label>
<input
  type="email"
  id="email"
  name="email" />

<!-- ARIA para mejorar accesibilidad -->
<button aria-label="Cerrar menú">X</button>
```

### 3. Validación

- Siempre incluye `<!DOCTYPE html>`
- Cierra todas las etiquetas que lo requieren
- Usa comillas en los atributos
- Valida tu HTML en https://validator.w3.org/

### 4. Performance

```html
<!-- Carga diferida de imágenes -->
<img
  src="imagen.jpg"
  loading="lazy"
  alt="Descripción" />

<!-- Scripts al final o con defer -->
<script
  src="script.js"
  defer></script>
```

---

## Recursos Adicionales

- **MDN Web Docs**: https://developer.mozilla.org/es/
- **W3Schools**: https://www.w3schools.com/html/
- **Can I Use**: https://caniuse.com/ (compatibilidad de navegadores)
- **HTML Validator**: https://validator.w3.org/

---

## Conclusión

Esta guía cubre los elementos principales de HTML con ejemplos prácticos. La mejor manera de aprender es practicando: crea tus propias páginas, experimenta con diferentes elementos y no tengas miedo de cometer errores.

¡Feliz aprendizaje! 🚀
