// ==========================
// AADIYOGI TRAVELS
// PREMIUM SCRIPT.JS
// ==========================

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.style.background = "rgba(0,0,0,0.95)";
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.4)";
    } else {
        navbar.style.background = "rgba(0,0,0,.55)";
        navbar.style.boxShadow = "none";
    }

});

// Fade-in animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section, .card, .route-grid div").forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .8s ease";

    observer.observe(el);

});

// Hero text animation
window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-content");

    if (hero) {
        hero.style.opacity = "0";
        hero.style.transform = "translateY(30px)";

        setTimeout(() => {
            hero.style.transition = "all 1s ease";
            hero.style.opacity = "1";
            hero.style.transform = "translateY(0)";
        }, 300);
    }

});

// Button hover effect
document.querySelectorAll(".btn, .call, .whatsapp").forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-4px) scale(1.03)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0) scale(1)";
    });

});

// Current year in footer (optional)
const year = document.getElementById("year");
if (year) {
    year.textContent = new Date().getFullYear();
}

console.log("Aadiyogi Travels website loaded successfully.");
