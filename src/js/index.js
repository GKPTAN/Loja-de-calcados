document.addEventListener("DOMContentLoaded", () => {
    const botaoZoom = document.getElementById('zoom');
    const fonteTextos = document.querySelectorAll('.upFonte');
    const maxFontSize = Number(24);
    let limite = true;
    
    botaoZoom.addEventListener("click", () => {
        fonteTextos.forEach(function(upFonte) {
            let tamanhoFonteAtual = window.getComputedStyle(upFonte).fontSize;
            let novoTamanho = parseFloat(tamanhoFonteAtual) + 2;

            if (novoTamanho > maxFontSize) {
                limite = false;
            };
        });

        if (limite) {
            fonteTextos.forEach(function(upFonte) {
                let tamanhoFonteAtual = window.getComputedStyle(upFonte).fontSize;
                let novoTamanho = parseFloat(tamanhoFonteAtual) + 2;
                upFonte.style.fontSize = novoTamanho + "px";
            });

            let currentPosition = parseFloat(window.getComputedStyle(botaoZoom).left);
            let newPosition = currentPosition + (window.innerWidth * 0.022);
            botaoZoom.style.left = newPosition + 'px';
        };
    });
});