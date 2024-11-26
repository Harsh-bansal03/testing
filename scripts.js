// Smooth scroll for navbar links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Animation Script
document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".scroll-animate");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("animate", entry.isIntersecting);
        });
    }, { threshold: 0.5 });

    animatedElements.forEach((element) => observer.observe(element));
});

function redirectToForm() {
    window.location.href = "form.html";
}
function toggleMenu() {
    const links = document.querySelector('.navbar-links');
    links.classList.toggle('active');
}
