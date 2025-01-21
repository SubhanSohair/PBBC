let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(step) {
    showSlide(currentSlide + step);
}

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');

    // Add 'active' class to the first slide with a delay to trigger animation
    if (slides.length > 0) {
        setTimeout(() => {
            slides[0].classList.add('active');
        }, 100); // Small delay to ensure DOM rendering
    }

    // Start auto-slide
    setInterval(() => changeSlide(1), 7000); // Auto-slide every 5 seconds
});
