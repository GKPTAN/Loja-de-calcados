window.revelar = ScrollReveal({ reset: false });

revelar.reveal('.efeito-reveal-oferta', {
    duration: 2000,
    distance: '90px',
    afterReveal: function(el) {
        const videoOferta = document.getElementById('video-oferta');
        const oferta = document.getElementById('promocao');
        oferta.addEventListener('mouseover', () => {
            if (videoOferta) {
                videoOferta.muted = true;
                videoOferta.play().then(() => {
                    videoOferta.addEventListener('click', function unmuteVideo() {
                        videoOferta.muted = false;
                        videoOferta.setAttribute('controls', 'controls');
    
                        videoOferta.removeEventListener('click', unmuteVideo);
                    });
                }).catch((error) => {
                    console.error('falha ao reproduzir o video', error);
                });
            };
        });

        oferta.addEventListener('mouseout', () => {
            videoOferta.pause();
        });
    }
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
    easing: 'ease-out',
    afterReveal: function(el) {
        const produto1 = document.getElementById('produto1');
        const produto2 = document.getElementById('produto2');
        const produto3 = document.getElementById('produto3');
        const produto4 = document.getElementById('produto4');
        const videoLancamento1 = document.getElementById('video-lancamento1');
        const videoLancamento2 = document.getElementById('video-lancamento2');
        const videoLancamento3 = document.getElementById('video-lancamento3');
        const videoLancamento4 = document.getElementById('video-lancamento4');

        produto1.addEventListener('mouseover', () => {
            if (videoLancamento1) {
                videoLancamento1.muted = true;
                videoLancamento1.play().then(() => {
                    document.addEventListener('click', function unmuteVideo() {
                        videoLancamento1.muted = false;
                        videoLancamento1.setAttribute('controls', 'controls');

                        document.removeEventListener('click', unmuteVideo);
                    });
                }).catch((error) => {
                    console.error('Falha ao reproduzir video', error);
                });
            };
        });

        produto1.addEventListener('mouseout', () => {
            if (videoLancamento1) {
                videoLancamento1.pause();
            };
        });

        produto2.addEventListener('mouseover', () => {
            if (videoLancamento2) {
                videoLancamento2.muted = true;
                videoLancamento2.play().then(() => {
                    document.addEventListener('click', function unmuteVideo() {
                        videoLancamento2.muted = false;
                        videoLancamento2.setAttribute('controls', 'controls');

                        document.removeEventListener('click', unmuteVideo);
                    });
                }).catch((error) => {
                    console.error('Falha ao reproduzir video', error);
                });
            };
        });

        produto2.addEventListener('mouseout', () => {
            if (videoLancamento2) {
                videoLancamento2.pause();
            };
        });

        produto3.addEventListener('mouseover', () => {
            if (videoLancamento3) {
                videoLancamento3.muted = true;
                videoLancamento3.play().then(() => {
                    document.addEventListener('click', function unmuteVideo() {
                        videoLancamento3.muted = false;
                        videoLancamento3.setAttribute('controls', 'controls');

                        document.removeEventListener('click', unmuteVideo);
                    });
                }).catch((error) => {
                    console.error('Falha ao reproduzir video', error);
                });
            };
        });

        produto3.addEventListener('mouseout', () => {
            if (videoLancamento3) {
                videoLancamento3.pause();
            };
        });

        produto4.addEventListener('mouseover', () => {
            if (videoLancamento4) {
                videoLancamento4.muted = true;
                videoLancamento4.play().then(() => {
                    document.addEventListener('click', function unmuteVideo() {
                        videoLancamento4.muted = false;
                        videoLancamento4.setAttribute('controls', 'controls');

                        document.removeEventListener('click', unmuteVideo);
                    });
                }).catch((error) => {
                    console.error('Falha ao reproduzir video', error);
                });
            };
        });

        produto4.addEventListener('mouseout', () => {
            if (videoLancamento4) {
                videoLancamento4.pause();
            };
        });
    }
});

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
    afterReveal: function(el) {
        const destaque1 = document.getElementById('destaque1');
        const destaque2 = document.getElementById('destaque2');
        const destaque3 = document.getElementById('destaque3');
        const destaque4 = document.getElementById('destaque4');
        const videoDestaque1 = document.getElementById('video-destaque1');
        const videoDestaque2 = document.getElementById('video-destaque2');
        const videoDestaque3 = document.getElementById('video-destaque3');
        const videoDestaque4 = document.getElementById('video-destaque4');

        destaque1.addEventListener('mouseover', () => {
            if (videoDestaque1) {
                videoDestaque1.muted = true;
                videoDestaque1.play().then(() => {
                    document.addEventListener('click', function unmuteVideo() {
                        videoDestaque1.muted = false;
                        videoDestaque1.setAttribute('controls', 'controls');

                        document.removeEventListener('click', unmuteVideo);
                    });
                }).catch((error) => {
                    console.error('Falha ao reproduzir video', error);
                });
            };
        });

        destaque1.addEventListener('mouseout', () => {
            if (videoDestaque1) {
                videoDestaque1.pause();
            };
        });

        destaque2.addEventListener('mouseover', () => {
            if (videoDestaque2) {
                videoDestaque2.muted = true;
                videoDestaque2.play().then(() => {
                    document.addEventListener('click', function unmuteVideo() {
                        videoDestaque2.muted = false;
                        videoDestaque2.setAttribute('controls', 'controls');

                        document.removeEventListener('click', unmuteVideo);
                    });
                }).catch((error) => {
                    console.error('Falha ao reproduzir video', error);
                });
            };
        });

        destaque2.addEventListener('mouseout', () => {
            if (videoDestaque2) {
                videoDestaque2.pause();
            };
        });

        destaque3.addEventListener('mouseover', () => {
            if (videoDestaque3) {
                videoDestaque3.muted = true;
                videoDestaque3.play().then(() => {
                    document.addEventListener('click', function unmuteVideo() {
                        videoDestaque3.muted = false;
                        videoDestaque3.setAttribute('controls', 'controls');

                        document.removeEventListener('click', unmuteVideo);
                    });
                }).catch((error) => {
                    console.error('Falha ao reproduzir video', error);
                });
            };
        });

        destaque3.addEventListener('mouseout', () => {
            if (videoDestaque3) {
                videoDestaque3.pause();
            };
        });

        destaque4.addEventListener('mouseover', () => {
            if (videoDestaque4) {
                videoDestaque4.muted = true;
                videoDestaque4.play().then(() => {
                    document.addEventListener('click', function unmuteVideo() {
                        videoDestaque4.muted = false;
                        videoDestaque4.setAttribute('controls', 'controls');

                        document.removeEventListener('click', unmuteVideo);
                    });
                }).catch((error) => {
                    console.error('Falha ao reproduzir video', error);
                });
            };
        });

        destaque4.addEventListener('mouseout', () => {
            if (videoDestaque4) {
                videoDestaque4.pause();
            };
        });
    }
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