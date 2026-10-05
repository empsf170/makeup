document.addEventListener("DOMContentLoaded", function() {
    // Scroll to top button logic
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    if (scrollTopBtn) {
        window.onscroll = function() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                scrollTopBtn.style.display = "block";
                scrollTopBtn.style.opacity = "1";
            } else {
                scrollTopBtn.style.opacity = "0";
                setTimeout(() => {
                    if (document.body.scrollTop <= 300 && document.documentElement.scrollTop <= 300) {
                        scrollTopBtn.style.display = "none";
                    }
                }, 300);
            }
        };

        scrollTopBtn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Hamburger menu logic
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function() {
            navMenu.classList.toggle("show");
        });
    }
});
