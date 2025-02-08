document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar-links ul");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});


