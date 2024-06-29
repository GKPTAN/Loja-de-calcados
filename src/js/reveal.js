window.revelar = ScrollReveal({ reset: false });

function removerDestaques() {
    document.getElementById('destaques').classList.remove('efeito-reveal-destaques', 'sr');
    document.getElementById('destaque1').classList.remove('efeito-reveal-destaque1', 'sr');
    document.getElementById('destaque2').classList.remove('efeito-reveal-destaque2', 'sr');
    document.getElementById('destaque3').classList.remove('efeito-reveal-destaque3', 'sr');
    document.getElementById('destaque4').classList.remove('efeito-reveal-destaque4', 'sr');
}

revelar.reveal('.efeito-reveal-oferta', {
    duration: 2000,
    distance: '90px'
});

revelar.reveal('.efeito-reveal-lancamentos', {
    duration: 2000,
    distance: '90px',
    origin: 'bottom'
});

revelar.reveal('.efeito-reveal-produto1', {
    duration: 2000,
    distance: '90px',
    delay: 500,
    easing: 'ease-out'
});

revelar.reveal('.efeito-reveal-produto2', {
    duration: 2000,
    distance: '90px',
    delay: 700,
    easing: 'ease-out'
});

revelar.reveal('.efeito-reveal-produto3', {
    duration: 2000,
    distance: '90px',
    delay: 900,
    easing: 'ease-out'
});

revelar.reveal('.efeito-reveal-produto4', {
    duration: 2000,
    distance: '90px',
    delay: 1100,
    easing: 'ease-out'
});

function removerLancamentos() {
    const lancamentos = document.getElementById('lancamentos');
    const produto1 = document.getElementById('produto1');
    const produto2 = document.getElementById('produto2');
    const produto3 = document.getElementById('produto3');
    const produto4 = document.getElementById('produto4');

    lancamentos.classList.remove('efeito-reveal-lancamentos', 'sr');
    produto1.classList.remove('efeito-reveal-produto1', 'sr');
    produto2.classList.remove('efeito-reveal-produto2', 'sr');
    produto3.classList.remove('efeito-reveal-produto3', 'sr');
    produto4.classList.remove('efeito-reveal-produto4', 'sr');
    
}

revelar.reveal('.efeito-reveal-destaques', {
    duration: 2000,
    distance: '90px'
});

revelar.reveal('.efeito-reveal-destaque1', {
    duration: 2000,
    distance: '90px',
    delay: 500,
    easing: 'ease-out'
});

revelar.reveal('.efeito-reveal-destaque2', {
    duration: 2000,
    distance: '90px',
    delay: 700,
    easing: 'ease-out'
});

revelar.reveal('.efeito-reveal-destaque3', {
    duration: 2000,
    distance: '90px',
    delay: 900,
    easing: 'ease-out'
});

revelar.reveal('.efeito-reveal-destaque4', {
    duration: 2000,
    distance: '90px',
    delay: 1100,
    easing: 'ease-out',
    afterReveal: removerDestaques()
});

revelar.reveal('.efeito-reveal-pagamento', {
    duration: 2000,
    distance: '90px'
});

revelar.reveal('.efeito-reveal-cartoes', {
    duration: 2000,
    distance: '90px',
    delay: 500,
    scale: 0.7
});

revelar.reveal('.efeito-reveal-intermediario', {
    duration: 2000,
    distance: '90px',
    delay: 700,
    scale: 0.7
});

revelar.reveal('.efeito-reveal-meios', {
    duration: 2000,
    distance: '90px',
    delay: 900,
    scale: 0.7
});

revelar.reveal('.efeito-reveal-depoimentos', {
    duration: 2000,
    distance: '90px',
    interval: 1000,
    rotate: {
        x: 220,
        z: 70
    }
});

revelar.reveal('.efeito-reveal-comunidade', {
    duration: 2000,
    distance: '90px',
    origin: 'left',
    interval: 1000
});