// ========================================
// RAÍCES VIVAS — INTERACCIONES
// ========================================


// Animación suave al aparecer secciones

const elements = document.querySelectorAll(
    ".section-heading, .journey-item, .story-card, .character-card, .ai-step, .software-features article, .mockups figure, .tool-card, .featured-image"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });
    },
    {
        threshold: 0.12
    }
);


elements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});



// Resaltar sección actual en navegación

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 160;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {

            link.classList.add("active");

        }

    });

});