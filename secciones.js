function cargarSeccion(nombre) {
    fetch(`${nombre}.html`)
      .then(response => response.text())
      .then(html => {
        document.getElementById('contenido').innerHTML = html;
      })
      .catch(error => {
        console.error('Error al cargar la sección:', error);
        document.getElementById('contenido').innerHTML = '<p>Error al cargar contenido.</p>';
      });
  }
  window.addEventListener('DOMContentLoaded', () => {
    cargarSeccion('mainpage');
  });