// ==============================
// Aadiyogi Travels - script.js
// ==============================

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

// Navbar Background on Scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        header.style.background = "rgba(255,255,255,0.98)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.12)";
    } else {
        header.style.background = "rgba(255,255,255,.92)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(
".welcome-card,.service-card,.why-card,.route-card,.review-card"
);

function reveal() {

    const trigger = window.innerHeight - 100;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }

    });

}

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "0.8s ease";
});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
.nav-links.active{
    display:flex;
    position:absolute;
    top:80px;
    left:5%;
    width:90%;
    background:#fff;
    flex-direction:column;
    padding:20px;
    border-radius:15px;
    box-shadow:0 10px 30px rgba(0,0,0,.12);
    gap:20px;
}
