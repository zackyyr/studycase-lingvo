document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar-links ul");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});


window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.padding = "0.5em 2%";
        navbar.style.backgroundColor = "rgba(27, 27, 30, 0.9)"; /* Transparan sedikit saat scroll */
    } else {
        navbar.style.padding = "1em 2%";
        navbar.style.backgroundColor = "var(--gluon-grey)";
    }
});
