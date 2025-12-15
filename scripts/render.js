const contentEl = document.getElementById("content");

function addAnchorsToHeadings(container) {
  const headings = container.querySelectorAll("h1, h2, h3, h4, h5, h6");

  headings.forEach((heading) => {
    //Generar ID si no existe
    if (!heading.id) {
      const id = heading.textContent
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/--+/g, "-");

      heading.id = id; // Asignar el ID al elemento
    }

    // Evitar duplicados
    if (heading.querySelector(".heading-anchor")) return;

    // Crear y añadir el anchor
    const anchor = document.createElement("a");
    anchor.className = "heading-anchor";
    anchor.href = `#${heading.id}`;
    anchor.setAttribute("aria-label", "Enlace permanente a esta sección");
    anchor.textContent = "#";

    heading.prepend(anchor);
  });
}

// Cargar un archivo Markdown y renderizarlo
async function loadMarkdown(file) {
  try {
    const response = await fetch(`lessons/${file}`);
    if (!response.ok) throw new Error("Archivo no encontrado");

    const text = await response.text();
    contentEl.innerHTML = marked.parse(text);

    // Resaltado de código
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block);
    });

    // Anchors tipo blog (UNA SOLA VEZ)
    addAnchorsToHeadings(contentEl);
  } catch (error) {
    console.error(error);
    contentEl.innerHTML = "<p>No se pudo cargar la lección.</p>";
  }
}

// Detectar qué lección mostrar según el hash (#archivo.md)
function handleHash() {
  const hash = window.location.hash.substring(1);

  // Solo cargar archivos markdown
  if (!hash || !hash.endsWith(".md")) {
    loadMarkdown("01-intro.md");
    return;
  }

  loadMarkdown(hash);
}

// Escuchar los cambios en la URL
window.addEventListener("hashchange", handleHash);

// Inicializar al cargar la página
document.addEventListener("DOMContentLoaded", handleHash);
