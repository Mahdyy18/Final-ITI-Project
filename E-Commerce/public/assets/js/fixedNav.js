// start nav sec
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', changeBg);

    function changeBg() {
        var nav = document.querySelector(".nav-fixed");
        if (!nav) return; // Prevents error if nav is null

        var scrollValue = window.scrollY;

        if (scrollValue < window.innerHeight) {
            nav.classList.remove("nav-format");
        } else {
            nav.classList.add("nav-format");
        }
    }
});

// end nav sec