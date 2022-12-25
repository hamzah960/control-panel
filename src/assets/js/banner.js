(function () {
    const closeBanner = document.querySelectorAll(".c-banner__close");
    closeBanner.forEach(closeBanner => {
        closeBanner.addEventListener("click", event => {
            const banner = event.target.parentNode;
            banner.classList.add("collapse");
            banner.addEventListener("transitionend", function (event) {
                if (event.target === this) {
                    this.remove();
                }
            });
        });
    });
})();