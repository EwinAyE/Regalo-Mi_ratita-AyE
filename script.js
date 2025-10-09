// script.js

// --- MENSAJE SECRETO AL REVELAR ---
function revealMessage() {
    const message = document.getElementById('secret-message');
    const button = document.querySelector('.reveal-button');

    if (message.style.display === 'none' || message.style.display === '') {
        // Muestra el mensaje
        message.style.display = 'block';
        button.textContent = 'Ocultar mi Amor (Es demasiado fuerte)';
        message.scrollIntoView({ behavior: 'smooth' });
    } else {
        // Oculta el mensaje
        message.style.display = 'none';
        button.textContent = 'Pulsa aquí si me extrañas';
    }
}

// --- EFECTO DE CLIC EN DISPOSITIVOS TÁCTILES ---
// Esto simula el efecto :active en CSS para dispositivos táctiles (iPhones)

document.addEventListener('DOMContentLoaded', () => {
    const interactiveElements = document.querySelectorAll('.menu-item, .upload-button, .reveal-button');

    interactiveElements.forEach(item => {
        item.addEventListener('touchstart', () => {
            item.classList.add('clicked');
        });

        item.addEventListener('touchend', () => {
            setTimeout(() => {
                item.classList.remove('clicked');
            }, 200);
        });
    });
});
// script.js (Añade esta función)

function revealNote(popitElement) {
    const content = popitElement.querySelector('.popit-content');
    const label = popitElement.querySelector('.popit-label');

    // Muestra la nota
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        label.textContent = "¡POP! Haz clic para ocultar";
        
        // Aplica el efecto visual de "pulsado"
        popitElement.classList.add('pulsed'); 
    } else {
        // Oculta la nota
        content.style.display = 'none';
        label.textContent = popitElement.dataset.originalLabel || "De: [Nombre] - ¡Pulsa!";

        // Quita el efecto visual de "pulsado"
        popitElement.classList.remove('pulsed'); 
    }
}

// Para guardar la etiqueta original de cada nota (opcional, pero útil)
document.addEventListener('DOMContentLoaded', () => {
    // ... Tu código anterior de touchscreens ...
    
    const popitItems = document.querySelectorAll('.popit-item');
    popitItems.forEach(item => {
        item.dataset.originalLabel = item.querySelector('.popit-label').textContent;
    });
});
// script.js (Añade estas funciones)

// Variables globales para el lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');

// Función para abrir la foto en pantalla completa
function openLightbox(imageSrc) {
    // 1. Establece la ruta de la imagen en el modal
    lightboxImage.src = imageSrc;
    
    // 2. Muestra el modal añadiendo la clase 'active'
    lightbox.classList.add('active');
    
    // Oculta el scroll del body para centrar la atención
    document.body.style.overflow = 'hidden';
}

// Función para cerrar la foto en pantalla completa
function closeLightbox() {
    // 1. Oculta el modal quitando la clase 'active'
    lightbox.classList.remove('active');
    
    // Restablece el scroll del body
    document.body.style.overflow = 'auto';
}