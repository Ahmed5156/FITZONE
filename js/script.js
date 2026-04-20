let index = 0;

const slider = document.querySelector('.hero-slider');

const images = [
  "images/1.jpeg",
  "images/2.jpeg",
  "images/3.jpeg",
  "images/4.jpeg"
];

document.querySelector('.next').addEventListener('click', () => {
  index++;
  if (index >= images.length) index = 0;
  slider.style.backgroundImage = `url(${images[index]})`;
});

document.querySelector('.prev').addEventListener('click', () => {
  index--;
  if (index < 0) index = images.length - 1;
  slider.style.backgroundImage = `url(${images[index]})`;
});
