// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("background-toggle-button");
    const toggleIcon = document.getElementById("background-toggle-icon");
    const body = document.body;

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        toggleIcon.classList.toggle("ri-moon-fill");
        toggleIcon.classList.toggle("ri-sun-fill");
    });
});
