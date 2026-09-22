// ================================
// MOBILE NAVIGATION
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");


// Open and close mobile menu
menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


// Close mobile menu after clicking a link
navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});


// ================================
// ACTIVE NAVIGATION
// ================================

const sections = document.querySelectorAll("section[id]");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                const currentSection = entry.target.id;

                navItems.forEach(function (link) {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        "#" + currentSection
                    ) {
                        link.classList.add("active");
                    }

                });

            }

        });

    },
    {
        threshold: 0.35
    }
);


sections.forEach(function (section) {

    observer.observe(section);

});


// ================================
// SCROLL REVEAL
// ================================

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(
    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});
