const container = document.querySelector(".container");
const images = [
    "https://images.wallpaperscraft.com/image/single/violin_bw_violin_bow_121396_1280x720.jpg",
    "https://images.wallpaperscraft.com/image/single/guitar_equipment_boots_164720_1280x720.jpg",
    "https://images.wallpaperscraft.com/image/single/guitar_fretboard_strings_musical_instrument_111531_1280x720.jpg",
    "https://images.wallpaperscraft.com/image/single/headphones_surface_wooden_121542_1280x720.jpg",
    "https://images.wallpaperscraft.com/image/single/piano_keys_musical_instrument_202178_1280x720.jpg",
    "https://images.wallpaperscraft.com/image/single/vinyl_record_player_vinyl_record_hand_126766_1280x720.jpg",
    "https://images.wallpaperscraft.com/image/single/guitar_electric_guitar_amplifier_275603_1280x720.jpg",
];

function createSlide() {
    for (let i = 0; i < images.length; i++) {
        let div = document.createElement("div");
        container.append(div);
        div.style.backgroundImage = `url(${images[i]})`;
        div.classList.add("slider");
    }
}
createSlide();

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