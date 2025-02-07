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
