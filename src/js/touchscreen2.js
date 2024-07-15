const slidesContainer = document.getElementById('carrossel');
let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;

slidesContainer.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
}, { passive: true });

slidesContainer.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
  endY = e.touches[0].clientY;
}, { passive: true });

slidesContainer.addEventListener('touchend', (e) => {
  const diffX = endX - startX;
  const diffY = endY - startY;

  // Somente considera o gesto de swipe se o movimento horizontal for maior que o vertical
  if (Math.abs(diffX) > Math.abs(diffY)) {
    const threshold = 50; // mín. distância para considerar o gesto de swipe
    if (Math.abs(diffX) > threshold) {
      const direction = diffX > 0 ? 'previous' : 'next';
      changeSlide(direction);
    }
  }
}, { passive: true });

function changeSlide(direction) {
  const slides = document.querySelector('.slides');
  const activeSlide = slides.querySelector('[data-active]');
  let indexActiveSlide = Array.from(slides.children).indexOf(activeSlide);

  if (direction === "next") {
    indexActiveSlide++;
  } else {
    indexActiveSlide--;
  }

  if (indexActiveSlide >= slides.children.length) {
    indexActiveSlide = 0;
  }

  if (indexActiveSlide < 0) {
    indexActiveSlide = slides.children.length - 1;
  }

  activeSlide.removeAttribute("data-active");
  slides.children[indexActiveSlide].dataset.active = true;
}

document.querySelectorAll("[data-change-slide-button]").forEach(button => {
  button.addEventListener('click', () => {
    const direction = button.dataset.changeSlideButton;
    changeSlide(direction);
  });
});
