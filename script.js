// script.js

// Función para ejecutar acciones cuando la página cargue
document.addEventListener('DOMContentLoaded', function () {
    console.log('Portafolio cargado exitosamente.');

    // Ejemplo de interacción: Cambiar el texto del encabezado al hacer clic
    const header = document.querySelector('header');
    header.addEventListener('click', function () {
        alert('¡Gracias por visitar mi portafolio!');
    });
});

// Obtener el botón de cambio de tema
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verificar si el usuario ya seleccionó un tema previamente
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
}

// Función para alternar el tema
function toggleTheme() {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark'); // Guardar preferencia en modo oscuro
    } else {
        localStorage.setItem('theme', 'light'); // Guardar preferencia en modo claro
    }
}

// Asignar la función al botón
themeToggle.addEventListener('click', toggleTheme);
