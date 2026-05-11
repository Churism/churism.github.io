/**
 * =====================================================
 * JAVASCRIPT PRINCIPAL
 * Landing Page - GitHub Pages
 * =====================================================
 */

// =====================================================
// CARRUSEL HERO - FUNCIONALIDAD
// =====================================================

// Variable para rastrear el slide actual
let currentSlide = 0;

// Seleccionar todos los slides del carrusel
const slides = document.querySelectorAll('.hero-carousel .slide');

/**
 * Función para mostrar un slide específico
 * @param {number} index - Índice del slide a mostrar
 */
function showSlide(index) {
    // Si no hay slides, salir
    if (slides.length === 0) return;
    
    // Lógica de bucle: si llega al final, vuelve al inicio
    if (index >= slides.length) {
        currentSlide = 0;
    } 
    // Si va antes del primero, va al último
    else if (index < 0) {
        currentSlide = slides.length - 1;
    } 
    // Si no, usa el índice proporcionado
    else {
        currentSlide = index;
    }
    
    // Remover clase 'active' de todos los slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Agregar clase 'active' al slide actual
    slides[currentSlide].classList.add('active');
}

/**
 * Función para mover al siguiente o anterior slide
 * @param {number} direction - 1 para siguiente, -1 para anterior
 */
function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// =====================================================
// AUTO-PLAY DEL CARRUSEL
// =====================================================

// Cambiar de slide automáticamente cada 5 segundos
setInterval(() => {
    moveSlide(1);
}, 5000);

// Inicializar el primer slide
showSlide(0);

// =====================================================
// BOTÓN MODO DÍA/NOCHE
// =====================================================

// Seleccionar el botón de cambio de tema
const themeToggle = document.getElementById('themeToggle');

// Seleccionar el body para agregar/quitar clase
const body = document.body;

// =====================================================
// CARGAR TEMA GUARDADO
// =====================================================

// Verificar si hay un tema guardado en localStorage
const savedTheme = localStorage.getItem('theme');

// Si el tema guardado es 'dark', aplicar modo oscuro
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
}

// =====================================================
// EVENTO CLICK EN BOTÓN DE TEMA
// =====================================================

themeToggle.addEventListener('click', function() {
    // Alternar clase 'dark-mode' en el body
    body.classList.toggle('dark-mode');
    
    // Guardar preferencia en localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// =====================================================
// SCROLL SUAVE PARA LINKS DE NAVEGACIÓN
// =====================================================

// Seleccionar todos los links de navegación
const navLinks = document.querySelectorAll('.nav-links a');

// Agregar event listener a cada link
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Prevenir comportamiento por defecto
        e.preventDefault();
        
        // Obtener el href del link (ej: #inicio)
        const targetId = this.getAttribute('href');
        
        // Si es un anchor link
        if (targetId.startsWith('#')) {
            // Seleccionar el elemento objetivo
            const targetElement = document.querySelector(targetId);
            
            // Si existe el elemento
            if (targetElement) {
                // Calcular posición considerando la navbar fija
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                // Scroll suave al elemento
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// =====================================================
// EFECTO DE NAVBAR AL HACER SCROLL
// =====================================================

// Variable para rastrear la última posición de scroll
let lastScroll = 0;

// Escuchar evento de scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    // Si el scroll es mayor a 100px, agregar sombra más fuerte
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 6px 30px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// =====================================================
// ANIMACIÓN DE APARICIÓN AL SCROLL
// =====================================================

// Función para verificar si un elemento está visible
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Función para animar elementos al hacer scroll
function animateOnScroll() {
    // Seleccionar elementos a animar
    const elementsToAnimate = document.querySelectorAll(
        '.feature-block, .gallery-item, .destination-card, .blog-post-card'
    );
    
    // Verificar cada elemento
    elementsToAnimate.forEach(element => {
        if (isElementInViewport(element)) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Ejecutar al cargar la página
window.addEventListener('load', animateOnScroll);

// Ejecutar al hacer scroll
window.addEventListener('scroll', animateOnScroll);

// =====================================================
// MENSAJE DE BIENVENIDA EN CONSOLA
// =====================================================

console.log('%c🎨 Bienvenido a la Landing Page', 'color: #007bff; font-size: 20px; font-weight: bold;');
console.log('%cDesarrollado con ❤️ para GitHub Pages', 'color: #888; font-size: 12px;');
