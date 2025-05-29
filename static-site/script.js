//ANIMACION DE LAS SECCIONES
document.querySelectorAll('h2').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.classList.toggle('collapsed');
    header.classList.toggle('collapsed');
  });
});

//ABRIR SECCION AL HACER CLICK EN EL NAV
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // Obtener id del destino desde href, ej: "#instalar-java"
    const targetId = link.getAttribute('href').substring(1);
    const section = document.getElementById(targetId);

    if (section) {
      // Mostrar contenido si está colapsado
      const header = section.querySelector('h2');
      const content = header.nextElementSibling;

      if (content.classList.contains('collapsed')) {
        content.classList.remove('collapsed');
        header.classList.remove('collapsed');
      }

      // Scroll suave hasta la sección (offset un poco para el nav sticky)
      const yOffset = -60; 
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
});
