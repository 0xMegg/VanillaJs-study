const images = ["img1.jpeg", "img2.jpeg", "img3.jpeg"];

const chosenImage = images[Math.trunc(Math.random() * images.length)];

const image = document.createElement("img");
image.src = `img/${chosenImage}`;

document.body.appendChild(image);
