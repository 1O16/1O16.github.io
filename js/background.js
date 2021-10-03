const images = [
    "wall1.jpeg",
    "wall2.jpeg",
    "wall3.jpeg",
    "wall4.jpeg"
];

const randImage = images[Math.floor(Math.random() * images.length)];

const background = document.createElement("img");

background.src = `img/${randImage}`;

document.body.appendChild(background);

background.className = "bgImage";