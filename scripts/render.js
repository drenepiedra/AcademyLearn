const contentEl = document.getElementById("content");

// Cargar un archivo Markdown y renderizarlo
async function loadMarkdown(file) {
  try {
    const response = await fetch(`lessons/${file}`);
    const text = await response.text();
    contentEl.innerHTML = marked.parse(text); // convierte MD a HTML

    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block);
    });
  } catch (error) {
    contentEl.innerHTML = "<p>No se pudo cargar la lección.</p>";
  }
}

// Detectar qué lección mostrar según el hash (#archivo.md) en la URL
function handleHash() {
  const hash = window.location.hash.substring(1);
  loadMarkdown(hash || "01-intro.md"); // lección por defecto si no hay hash
}

// Escuchar los cambios en la URL
window.addEventListener("hashchange", handleHash);

// Inicializar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  handleHash();
});
