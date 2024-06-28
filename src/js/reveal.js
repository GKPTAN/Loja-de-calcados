window.revelar = ScrollReveal({reset: true});

// OFERTA DO DIA
revelar.reveal('.efeito-reveal-oferta', {
    duration: 2000,
    distance: '90px',
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

revelar.reveal('.efeito-reveal-destaques', {
    duration: 2000,
    distance: '90px',
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
    easing: 'ease-out'
});

revelar.reveal('.efeito-reveal-pagamento', {
    duration: 2000,
    distance: '90px',
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

document.addEventListener('DOMContentLoaded', function() {
    const ofertaReveal = document.getElementById('promocao');
    const lancamentosReveal = document.getElementById('lancamentos');
    const produto1Reveal = document.getElementById('produto1');
    const produto2Reveal = document.getElementById('produto2');
    const produto3Reveal = document.getElementById('produto3');
    const produto4Reveal = document.getElementById('produto4');
    const destaquesReveal = document.getElementById('destaques');
    const destaque1Reveal = document.getElementById('destaque1');
    const destaque2Reveal = document.getElementById('destaque2');
    const destaque3Reveal = document.getElementById('destaque3');
    const destaque4Reveal = document.getElementById('destaque4');

    let reveals = [ofertaReveal, lancamentosReveal, produto1Reveal, produto2Reveal, produto3Reveal, produto4Reveal, destaquesReveal, destaque1Reveal, destaque2Reveal, destaque3Reveal, destaque4Reveal];
});