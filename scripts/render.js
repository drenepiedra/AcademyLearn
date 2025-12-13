const contentEl = document.getElementById("content");

// Cargar un archivo Markdown y renderizarlo
async function loadMarkdown(file) {
  try {
    const response = await fetch(`lessons/${file}`);
    if (!response.ok) throw new Error('Error al cargar el archivo');
    
    const text = await response.text();
    contentEl.innerHTML = marked.parse(text); // convierte MD a HTML
    
    // Aplicar resaltado de sintaxis después de cargar el contenido
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block);
    });
    
  } catch (error) {
    console.error("Error al cargar la lección:", error);
    contentEl.innerHTML = `
      <div class="error-message">
        <p>No se pudo cargar la lección.</p>
        <p>${error.message}</p>
      </div>`;
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
document.addEventListener('DOMContentLoaded', () => {
  handleHash();
});