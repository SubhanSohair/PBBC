let currentCustomSlide = 0;

function showCustomSlide(index) {
    const slides = document.querySelectorAll('.custom-slide');
    if (index >= slides.length) {
        currentCustomSlide = 0;
    } else if (index < 0) {
        currentCustomSlide = slides.length - 1;
    } else {
        currentCustomSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentCustomSlide) {
            slide.classList.add('active');
        }
    });
}

function changeCustomSlide(step) {
    showCustomSlide(currentCustomSlide + step);
}

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.custom-slide');

    // Add 'active' class to the first slide with a delay to trigger animation
    if (slides.length > 0) {
        setTimeout(() => {
            slides[0].classList.add('active');
        }, 100); // Small delay to ensure DOM rendering
    }

    // Start auto-slide
    setInterval(() => changeCustomSlide(1), 7000); // Auto-slide every 5 seconds
});
