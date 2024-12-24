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
    }, { threshold: 0 });

    animatedElements.forEach((element) => observer.observe(element));
});

function redirectToForm() {
    window.location.href = "form.html";
}
function toggleMenu() {
    const links = document.querySelector('.navbar-links');
    links.classList.toggle('active');
}




//form :
document.addEventListener('DOMContentLoaded', () => {
    const form = document.forms['contact-form'];
    const submitBtn = form.querySelector('button[type="submit"]');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyQMjeuiiGhgty8n9TeeMNt8dGwliA_OYd0fbQNbIDSAezZRz0p0lIBAYrI1qjE-kvL/exec';

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';

        try {
            await fetch(scriptURL, { method: 'POST', body: new FormData(form) });
            Swal.fire({
                title: 'Submission Successful!',
                text: 'Thank you for joining our community.(If you have not submitted you resume , kindly submit it.',
                icon: 'success',
                confirmButtonText: 'Okay',
            });
            form.reset(); // Reset the form fields after successful submission
        } catch (error) {
            console.error('Error!', error.message);
            Swal.fire({
                title: 'Error!',
                text: 'There was a problem submitting the form. Please try again later.',
                icon: 'error',
                confirmButtonText: 'Okay',
            });
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit';
        }
    });
});
