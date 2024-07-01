document.addEventListener("DOMContentLoaded", () => {
    const botaoZoomUp = document.getElementById('zoom-up');
    const botaoZoomDown = document.getElementById('zoom-down');
    const fonteTextos = document.querySelectorAll('.upFonte');
    const maxFontSize = Number(24);
    const minFontSize = Number(14);
    let limiteUp = true;
    let limiteDown = true;
    
    botaoZoomUp.addEventListener("click", () => {
        fonteTextos.forEach(function(upFonte) {
            let tamanhoFonteAtual = window.getComputedStyle(upFonte).fontSize;
            let novoTamanho = parseFloat(tamanhoFonteAtual) + 2;

            if (novoTamanho > maxFontSize) {
                limiteUp = false;
            };
        });

        if (limiteUp) {
            fonteTextos.forEach(function(upFonte) {
                let tamanhoFonteAtual = window.getComputedStyle(upFonte).fontSize;
                let novoTamanho = parseFloat(tamanhoFonteAtual) + 2;
                upFonte.style.fontSize = novoTamanho + "px";
            });

            let currentPositionUp = parseFloat(window.getComputedStyle(botaoZoomUp).left);
            let newPositionUp = currentPositionUp + (window.innerWidth * 0.022);
            botaoZoomUp.style.left = newPositionUp + 'px';

            let currentPositionDown = parseFloat(window.getComputedStyle(botaoZoomDown).left);
            let newPositionDown = currentPositionDown + (window.innerWidth * 0.022);
            botaoZoomDown.style.left = newPositionDown + 'px';
        };
    });

    botaoZoomDown.addEventListener("click", () => {
        fonteTextos.forEach(function(upFonte) {
            let tamanhoFonteAtual = window.getComputedStyle(upFonte).fontSize;
            let novoTamanho = parseFloat(tamanhoFonteAtual) - 2;

            if (novoTamanho < minFontSize) {
                limiteDown = false
            };
        });

        if (limiteDown) {
            fonteTextos.forEach(function(upFonte) {
                let tamanhoFonteAtual = window.getComputedStyle(upFonte).fontSize;
                let novoTamanho = parseFloat(tamanhoFonteAtual) - 2;
                upFonte.style.fontSize = novoTamanho + "px";
            });

            let currentPositionUp = parseFloat(window.getComputedStyle(botaoZoomUp).left);
            let newPositionUp = currentPositionUp - (window.innerWidth * 0.022);
            botaoZoomUp.style.left = newPositionUp + 'px';

            let currentPositionDown = parseFloat(window.getComputedStyle(botaoZoomDown).left);
            let newPositionDown = currentPositionDown - (window.innerWidth * 0.022);
            botaoZoomDown.style.left = newPositionDown + 'px';
        };
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const secaoTopo = document.getElementById('topo');
    const secaoTopoBottom = secaoTopo.getBoundingClientRect().bottom;
    
    if (secaoTopoBottom <= 0) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    };
});

const changeSlideButton = document.querySelectorAll("[data-change-slide-button]");

changeSlideButton.forEach(button => {
    button.addEventListener('click', () => {
        const slides = document.querySelector('.slides');
        const activeSlide = slides.querySelector('[data-active]');
        let indexActiveSlide = Array.from(slides.children).indexOf(activeSlide);

        if (button.dataset.changeSlideButton === "next") {
            indexActiveSlide++;
        } else {
            indexActiveSlide--;
        };

        if (indexActiveSlide >= slides.children.length) {
            indexActiveSlide = 0;
        };

        if (indexActiveSlide < 0) {
            indexActiveSlide = slides.children.length - 1;
        };

        activeSlide.removeAttribute("data-active");
        slides.children[indexActiveSlide].setAttribute("data-active", "true");
    });
});

const branco = document.getElementById('branco');
const preto = document.getElementById('preto');
    
function updateFilter() {
    const slides = document.querySelector('.slides');
    const divCorBranca = document.getElementById('cor-branca');
    const divCorPreta = document.getElementById('cor-preta');
    const imgBranco = document.getElementById('imagem1');
    const imgPreto = document.getElementById('imagem2');

    const brancoImagens = [
        "src/image/Tenis_Samba_OG_Branco_B75806_02_standard.avif",
        "src/image/Tenis_Samba_OG_Branco_B75806_01_standard (1).jpg",
        "src/image/Tenis_Samba_OG_Branco_B75806_03_standard.avif",
        "src/image/Tenis_Samba_OG_Branco_B75806_04_standard.avif",
        "src/image/Tenis_Samba_OG_Branco_B75806_05_standard.avif",
        "src/image/Tenis_Samba_OG_Branco_B75806_41_detail.avif",
        "src/image/Tenis_Samba_OG_Branco_B75806_42_detail.avif"
    ]

    const pretoImagens = [
        "src/image/Tenis_Samba_OG_Preto_B75807_02_standard.avif",
        "src/image/Tenis_Samba_OG_Preto_B75807_01_standard.avif",
        "src/image/Tenis_Samba_OG_Branco_B75806_03_standard.avif",
        "src/image/Tenis_Samba_OG_Preto_B75807_04_standard.avif",
        "src/image/Tenis_Samba_OG_Preto_B75807_05_standard.avif",
        "src/image/Tenis_Samba_OG_Preto_B75807_41_detail.avif",
        "src/image/Tenis_Samba_OG_Preto_B75807_42_detail.avif"
    ]

    if (preto.checked) {
        divCorBranca.classList.remove('escolhido');
        imgBranco.classList.remove('opacidade');
        divCorPreta.classList.add('escolhido');
        imgPreto.classList.add('opacidade');
    } else {
        divCorPreta.classList.remove('escolhido');
        imgPreto.classList.remove('opacidade')
        divCorBranca.classList.add('escolhido');
        imgBranco.classList.add('opacidade');
    }

    const imagens = branco.checked ? brancoImagens : pretoImagens;
    const liElements = slides.querySelectorAll('li img');

    for (let i = 0; i < liElements.length; i++) {
        liElements[i].src = imagens[i];
    };
};

branco.addEventListener('change', updateFilter);
preto.addEventListener('change', updateFilter);

updateFilter();