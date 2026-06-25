/* ===================================================================
   Matt Donohue — Physiotherapy Portfolio
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ---------- Navbar: solid background on scroll ---------- */
    const navbar = document.getElementById('navbar');
    const onScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- Mobile menu toggle ---------- */
    const hamburger = document.getElementById('hamburgerIcon');
    const navLinks = document.getElementById('navLinks');
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });

    /* ---------- Scroll reveal ---------- */
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    // small stagger for siblings revealing together
                    setTimeout(() => entry.target.classList.add('visible'), (i % 4) * 90);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
        reveals.forEach(el => observer.observe(el));
    } else {
        reveals.forEach(el => el.classList.add('visible'));
    }

    /* ---------- Carousel ---------- */
    initCarousel();
});

/* ===================================================================
   Carousel (with dots + autoplay)
   =================================================================== */
let currentSlide = 0;
let carouselTimer = null;

function getSlides() {
    return document.querySelectorAll('.carousel-image');
}

function showSlide(index) {
    const slides = getSlides();
    if (!slides.length) return;

    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => slide.classList.toggle('active', i === currentSlide));

    const dots = document.querySelectorAll('#carouselDots .dot');
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
    restartAutoplay();
}

function restartAutoplay() {
    clearInterval(carouselTimer);
    carouselTimer = setInterval(() => showSlide(currentSlide + 1), 5000);
}

function initCarousel() {
    const slides = getSlides();
    if (!slides.length) return;

    // Build dots
    const dotsContainer = document.getElementById('carouselDots');
    if (dotsContainer) {
        slides.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            dot.addEventListener('click', () => { showSlide(i); restartAutoplay(); });
            dotsContainer.appendChild(dot);
        });
    }

    showSlide(0);
    restartAutoplay();
}
