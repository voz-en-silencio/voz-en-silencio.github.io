// script.js

document.addEventListener('DOMContentLoaded', () => {
    // =======================================================
    // 1. FUNCIONALIDAD DEL BOTÓN 'VER CAUSAS'
    // =======================================================
    const expandButtons = document.querySelectorAll('.expand-button');

    expandButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Alternar la clase 'show' para desplegar/contraer
                targetElement.classList.toggle('show');
                
                // También alterna la clase 'hidden' para un mejor control visual inicial
                targetElement.classList.toggle('hidden');

                // Cambiar el texto del botón
                if (targetElement.classList.contains('show')) {
                    button.textContent = 'Ocultar Causas y Diagnóstico';
                } else {
                    button.textContent = 'Ver Causas y Diagnóstico Temprano';
                }
            }
        });
    });

    // =======================================================
    // 2. FUNCIONALIDAD DEL ACORDEÓN (FAQ)
    // =======================================================
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            
            // Cerrar todos los demás acordeones
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    const otherContent = otherHeader.nextElementSibling;
                    otherContent.style.maxHeight = null;
                }
            });

            // Abrir/Cerrar el acordeón clickeado
            if (content.style.maxHeight) {
                content.style.maxHeight = null; // Cerrar
            } else {
                content.style.maxHeight = content.scrollHeight + "px"; // Abrir
            }
        });
    });
    
    // (El código para el menú lateral no es necesario en este HTML, pero es bueno tenerlo en tu script.js para las otras páginas)
});