/* =========================================================
   DIYA PERSONAL PORTFOLIO
   Simple JavaScript for beginners
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       SELECT ELEMENTS
    ========================== */

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-menu a");
    const sections = document.querySelectorAll("main section");


    /* =========================
       ENABLE JAVASCRIPT FEATURES
       The CSS keeps the website
       visible if JavaScript fails.
    ========================== */

    document.documentElement.classList.add("js-enabled");


    /* =========================
       MOBILE NAVIGATION
    ========================== */

    if (menuToggle && navMenu) {

        // Open and close the mobile menu
        menuToggle.addEventListener("click", function () {

            const isOpen = navMenu.classList.toggle("active");

            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );
        });


        // Close menu after clicking a navigation link
        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );
            });

        });


        // Close menu if the screen becomes desktop-sized
        window.addEventListener("resize", function () {

            if (window.innerWidth >= 900) {

                navMenu.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );
            }

        });

    }


    /* =========================
       ACTIVE NAVIGATION
       Highlights the link for
       the section currently visible.
    ========================== */

    const navObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    const currentSection = entry.target.id;

                    navLinks.forEach(function (link) {

                        const linkSection =
                            link.getAttribute("href");

                        if (linkSection === "#" + currentSection) {
                            link.classList.add("active");
                        } else {
                            link.classList.remove("active");
                        }

                    });

                }

            });

        },
        {
            root: null,
            threshold: 0.25,
            rootMargin: "-20% 0px -55% 0px"
        }
    );


    sections.forEach(function (section) {
        navObserver.observe(section);
    });


    /* =========================
       SCROLL REVEAL
       Uses IntersectionObserver
       for better mobile performance.
    ========================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    // Stop observing after the element appears
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });


    /* =========================
       KEYBOARD ACCESSIBILITY
       Close mobile menu with Escape.
    ========================== */

    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            navMenu &&
            navMenu.classList.contains("active")
        ) {

            navMenu.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.focus();
        }

    });

});
