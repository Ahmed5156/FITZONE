  let index = 0;

const slider = document.querySelector('.hero-slider');

let images = [
  "images/1.jpeg",
  "images/2.jpeg",
  "images/3.jpeg",
  "images/4.jpeg"
];

let i = 0;

function next() {
  i = (i + 1) % images.length;
  document.getElementById("slider").src = images[i];
}

function prev() {
  i = (i - 1 + images.length) % images.length;
  document.getElementById("slider").src = images[i];
}
