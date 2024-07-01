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

        if (indexActiveSlide = button.dataset.changeSlideButton === "next") {
            indexActiveSlide + 1;
        } else {
            indexActiveSlide - 1;
        };

        if (indexActiveSlide >= slides.children.length) {
            indexActiveSlide = 0;
        };

        if (indexActiveSlide < 0) {
            indexActiveSlide = slides.children.length - 1;
        };

        activeSlide.removeAttribute("data-active");
        slides.children[indexActiveSlide].dataset.active = true;
    })
})