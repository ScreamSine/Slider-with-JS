const sliders = document.querySelectorAll(".slider");

sliders.forEach((slide) => {
    slide.addEventListener("click", () => {
        clearActive();

        slide.classList.add("active");
    });
});

function clearActive() {
    sliders.forEach((slide) => {
        slide.classList.remove("active");
    });
}