/* ===================================
   AADIYOGI TRAVELS
   Premium JavaScript
=================================== */

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});

/* ===========================
   Sticky Header
=========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.10)";
        header.style.transition = ".3s";

    } else {

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.06)";
    }

});

/* ===========================
   Mobile Menu
=========================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

        if (navLinks.classList.contains("show")) {

            menuBtn.innerHTML =
                '<i class="fa-solid fa-xmark"></i>';

        } else {

            menuBtn.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        }

    });

}

/* Close menu after clicking */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {

            navLinks.classList.remove("show");

        }

        if (menuBtn) {

            menuBtn.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        }

    });

});

/* ===========================
   Active Navigation
=========================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.clientHeight;

        if (window.scrollY >= top) {
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

/* ===========================
   Scroll Reveal
=========================== */

const revealElements = document.querySelectorAll(
    ".service-card, .why-card, .route-card, .review-card, .about-image, .about-content"
);

const reveal = () => {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            el.classList.add("visible");

        }

    });

};

window.addEventListener("scroll", reveal);
reveal();

/* ===========================
   Smooth Scroll
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            window.scrollTo({

                top: target.offsetTop - 70,
                behavior: "smooth"

            });

        }

    });

});

/* ===========================
   Floating WhatsApp Animation
=========================== */

const whatsapp = document.querySelector(".floating-whatsapp");

if (whatsapp) {

    setInterval(() => {

        whatsapp.classList.toggle("bounce");

    }, 2500);

}

/* ===========================
   Button Hover Effect
=========================== */

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-4px) scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0) scale(1)";

    });

});

/* ===========================
   Console Welcome
=========================== */

console.log(
    "%cWelcome to Aadiyogi Travels",
    "color:#ff7a00;font-size:20px;font-weight:bold;"
);

console.log(
    "Developed with ❤️ for Aadiyogi Travels"
);

    0%,100%{transform:translateY(0);}
    50%{transform:translateY(-10px);}
}
