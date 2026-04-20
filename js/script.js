let index = 0;

const slider = document.querySelector('.hero-slider');

const images = [
  "../images/4.jpeg",
  "../images/3.jpeg",
  "../images/2.jpeg",
  "../images/1.jpeg"
];

document.querySelector('.next').onclick = () => {
  index = (index + 1) % images.length;
  slider.style.backgroundImage = `url('${images[index]}')`;
};

document.querySelector('.prev').onclick = () => {
  index = (index - 1 + images.length) % images.length;
  slider.style.backgroundImage = `url('${images[index]}')`;
  slider.style.backgroundImage = `url('${images[0]}')`;
};

