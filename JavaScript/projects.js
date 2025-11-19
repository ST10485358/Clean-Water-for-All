
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll("figure img");
images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.classList.add("active");

        const enlargedImg = document.createElement("img");
        enlargedImg.src = img.src;
        enlargedImg.alt = img.alt;

        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }

        lightbox.appendChild(enlargedImg);
    });
});

lightbox.addEventListener("click", e => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
});
