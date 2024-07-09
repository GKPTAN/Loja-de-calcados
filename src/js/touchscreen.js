const slides = document.querySelector('.slides');
let startX = 0;
let endX = 0;

slides.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slides.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

slides.addEventListener('touchend', () => {
  if (startX > endX + 50) {
    // Deslizar para a esquerda
    changeSlide('next');
  } else if (startX < endX - 50) {
    // Deslizar para a direita
    changeSlide('previous');
  }
});

function changeSlide(direction) {
  const activeSlide = slides.querySelector('[data-active]');
  let indexActiveSlide = Array.from(slides.children).indexOf(activeSlide);

  if (direction === 'next') {
    indexActiveSlide++;
  } else if (direction === 'previous') {
    indexActiveSlide--;
  }

  if (indexActiveSlide >= slides.children.length) {
    indexActiveSlide = 0;
  }

  if (indexActiveSlide < 0) {
    indexActiveSlide = slides.children.length - 1;
  }

  activeSlide.removeAttribute('data-active');
  slides.children[indexActiveSlide].dataset.active = true;
}
