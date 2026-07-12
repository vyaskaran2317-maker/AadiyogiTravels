// =========================================
// AADIYOGI TRAVELS
// script.js
// =========================================

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    if (menuBtn.innerHTML.includes("bars")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// Close menu after click

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

// Header Shadow

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.08)";
    }

});

// Active Menu

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Scroll Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

// Animate Elements

document.querySelectorAll(
`
.about-image,
.about-content,
.service-card,
.why-card,
.route-card,
.review-card,
.contact-grid,
.section-title
`
).forEach(el => {

    el.classList.add("animate");

    observer.observe(el);

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            window.scrollTo({

                top: target.offsetTop - 70,

                behavior: "smooth"

            });

        }

    });

});

// Hero Button Bounce

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-5px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0)";

    });

});

// Current Year

const year = document.getElementById("year");

if(year){

    year.textContent = new Date().getFullYear();

}

console.log("Aadiyogi Travels Loaded Successfully ✅");
