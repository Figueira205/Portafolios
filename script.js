// script.js

document.addEventListener('DOMContentLoaded', function () {
    console.log('Portafolio cargado exitosamente.');

    // Seleccionar todos los enlaces con la clase "links"
    document.querySelectorAll('.links').forEach(link => {
        link.addEventListener('click', function () {
            alert('¡Gracias por visitar mi portafolio!');
        });
    });

    // Obtener el botón de cambio de tema y el body
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Verificar si el usuario ya seleccionó un tema previamente
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '☀️'; // Cambia a sol
    } else {
        themeToggle.innerHTML = '🌙'; // Cambia a luna
    }

    // Función para alternar el tema con animación
    function toggleTheme() {
        body.classList.add('transition-theme'); // Agregar animación

        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '🌙'; // Cambia a luna
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '☀️'; // Cambia a sol
        }

        // Eliminar la clase de transición después de la animación
        setTimeout(() => {
            body.classList.remove('transition-theme');
        }, 300);
    }

    // Asignar la función al botón
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});