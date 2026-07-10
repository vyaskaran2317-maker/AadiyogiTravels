// ===============================
// Aadiyogi Travels - Premium JS
// ===============================

// Smooth scrolling for menu links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Header background on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.style.background = "rgba(0,0,0,0.92)";
    } else {
        header.style.background = "rgba(0,0,0,0.55)";
    }
});

// Fade animation on scroll
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".card, .about, .why, .gallery, .contact, .counter").forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .8s ease";

    observer.observe(el);

});

// Animated Counter
const counters = document.querySelectorAll(".counter h2");

let started = false;

window.addEventListener("scroll", () => {

    const counterSection = document.querySelector(".counter");

    if (!counterSection || started) return;

    const position = counterSection.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        started = true;

        counters.forEach(counter => {

            const text = counter.innerText;

            const target = parseInt(text);

            if (isNaN(target)) return;

            let count = 0;

            const speed = target / 80;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count) + "+";

                    requestAnimationFrame(update);

                } else {

                    if (text.includes("%")) {
                        counter.innerText = target + "%";
                    } else if (text.includes("/")) {
                        counter.innerText = "24/7";
                    } else {
                        counter.innerText = target + "+";
                    }

                }

            };

            update();

        });

    }

});

// Gallery Click Zoom
document.querySelectorAll(".gallery-grid img").forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed
