// =========================
// NAVBAR SCROLL
// =========================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (!navbar) {
        return;
    }

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// =========================
// SMOOTH SCROLL
// =========================

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(function (element) {

    observer.observe(element);

});


// =========================
// VIDEOS
// =========================

const videos = document.querySelectorAll("video");

videos.forEach(function (video) {

    video.addEventListener("play", function () {

        videos.forEach(function (otherVideo) {

            if (otherVideo !== video) {

                otherVideo.pause();

            }

        });

    });

});


// =========================
// CURRENT YEAR
// =========================

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.textContent =
        "© " +
        new Date().getFullYear() +
        " Kotob Jewelry. جميع الحقوق محفوظة.";

}