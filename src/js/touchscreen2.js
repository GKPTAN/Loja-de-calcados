const slidesContainer = document.getElementById('carrossel'); //pegamos o container do carrossel
//variáveis para armazenar as coordenadas do toque (em caso de smartphones/tablets)
let startX = 0; //onde começa horizontalmente
let startY = 0; //onde começa verticalmente
let endX = 0; //onde termina horizontalmente
let endY = 0; //onde termina verticalmente

slidesContainer.addEventListener('touchstart', (e) => { //quando o toque começa
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
}, { passive: true }); //indica que o evento não vai chamar preventDefault()

slidesContainer.addEventListener('touchmove', (e) => { //quando o toque se move
  endX = e.touches[0].clientX; //atualiza a posição final, clientX e clientY são as coordenadas do toque do cliente
  endY = e.touches[0].clientY; 
}, { passive: true });

slidesContainer.addEventListener('touchend', (e) => { //quando o toque termina
  const diffX = endX - startX; //diferença horizontal
  const diffY = endY - startY; //diferença vertical

  // Somente considera o gesto de swipe (passar o dedo) se a movimentação horizontal for maior que a vertical
  if (Math.abs(diffX) > Math.abs(diffY)) { //Math.abs() retorna o valor absoluto
    const threshold = 50; // mín. distância para considerar o gesto de swipe
    if (Math.abs(diffX) > threshold) { //se a diferença horizontal for maior que o limite
      const direction = diffX > 0 ? 'previous' : 'next'; //se diffX for positivo, passa para o slide anterior, se for negativo, para o próximo
      changeSlide(direction); //chama a função para mudar o slide
    }
  }
}, { passive: true });

function changeSlide(direction) { //função para mudar o slide
  const slides = document.querySelector('.slides');
  const activeSlide = slides.querySelector('[data-active]'); //pego o slide ativo
  let indexActiveSlide = Array.from(slides.children).indexOf(activeSlide); //pego o índice do slide ativo, onde Array.from() cria um array a partir de um objeto iterável, slides.children é uma coleção HTML dos filhos do elemento slides, e indexOf() retorna o índice do slide ativo

  if (direction === "next") { //se a direção for "next". Reveja na linha 26
    indexActiveSlide++; //incrementa o índice do slide ativo
  } else {
    indexActiveSlide--; //decrementa o índice do slide ativo
  }

  if (indexActiveSlide >= slides.children.length) { //se o índice for maior ou igual ao número de slides, volta para o primeiro slide
    indexActiveSlide = 0;
  }

  if (indexActiveSlide < 0) { //se o índice for menor que 0, volta para o último slide
    indexActiveSlide = slides.children.length - 1;
  }

  activeSlide.removeAttribute("data-active"); //removemos o atributo data-active do slide ativo atual
  slides.children[indexActiveSlide].dataset.active = true; //adicionamos o atributo data-active ao novo slide ativo, onde dataset é uma propriedade que permite acessar todos os atributos data- de um elemento, e active é o nome do atributo data- que estamos definindo
}

document.querySelectorAll("[data-change-slide-button]").forEach(button => { //seleciona todos os botões que possuem o atributo data-change-slide-button
  button.addEventListener('click', () => {
    const direction = button.dataset.changeSlideButton; //pega o valor do atributo data-change-slide-button
    changeSlide(direction); //chama a função para mudar o slide
  });
});
