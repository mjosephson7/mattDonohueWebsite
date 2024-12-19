function scroll() {

    var t = window.scrollY;
    var para = document.getElementById("para");
    var m = 0.5;
    var b = 0;

    newY = m*t + b;
    para.style.backgroundPositionY = newY + "px";


    const whoAmI = document.getElementById('whoAmI');
    const para1 = document.getElementById('para1');
    const para1Bottom = para1.getBoundingClientRect().bottom;

    // When yellow section scrolls out of view
    if (para1Bottom < window.innerHeight) {
        whoAmI.classList.add('visible');
    } else {
        whoAmI.classList.remove('visible');
    }
}

window.addEventListener('scroll', () => {
    const whoAmI = document.getElementById('whoAmI');
    const scrollPosition = window.scrollY;

    // Check if scrolled 1400px or more
    if (scrollPosition >= 500) {
        whoAmI.classList.add('visible');
    } //else {
       // whoAmI.classList.remove('visible'); // Optionally hide when scrolling back up
    //}
});


window.addEventListener('scroll', () => {
    const section = document.getElementById('whoIAm');
    const position = section.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
        section.classList.add('visible');
    }
});


let currentSlide = 0; // Track the current slide

// Initialize the carousel
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-image');
    slides.forEach(slide => slide.classList.remove('active')); // Hide all slides

    // Wrap around if the index is out of bounds
    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add('active'); // Show the current slide
}

// Change slide based on navigation
function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Show the first slide on page load
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});






// Wait for the DOM to load before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const navLinks = document.getElementById('navLinks');

    // Add event listener to the hamburger icon
    hamburgerIcon.addEventListener('click', function() {
        // Check if the navLinks are hidden or visible
        if (navLinks.style.display === 'block') {
            navLinks.style.display = 'none'; // Hide the menu
        } else {
            navLinks.style.display = 'block'; // Show the menu
        }
    });
});
