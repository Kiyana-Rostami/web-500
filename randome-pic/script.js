function showRandomImage() {
    let images = [
        "images/lion.jpg",
        "images/pahlavy.jpg",
        "images/cat.jfif",
        "images/cockroach.jfif",
        "images/jogo.jfif",
        "images/skeleton.jfif"
    ];

    let randomIndex = Math.floor(Math.random() * images.length);
    let selectedImage = images[randomIndex];

    let img = document.createElement("img");
    img.src = selectedImage;
    img.alt = "Random Image";
    img.style.width = "200px";
    img.style.margin = "10px";

    document.body.appendChild(img);
}
