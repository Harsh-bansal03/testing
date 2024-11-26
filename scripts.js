document.addEventListener("DOMContentLoaded", () => {
    // Wait for the page to fully load before starting animations
    window.addEventListener("load", () => {
        const animatedElements = document.querySelectorAll(".scroll-animate");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle("animate", entry.isIntersecting);
            });
        }, { threshold: 0.5 });

        animatedElements.forEach((element) => observer.observe(element));
    });
});

// Smooth scroll for navbar links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Redirect to form
function redirectToForm() {
    window.location.href = "form.html";
}

// Toggle the navbar menu for mobile
function toggleMenu() {
    const links = document.querySelector('.navbar-links');
    links.classList.toggle('active');
}
