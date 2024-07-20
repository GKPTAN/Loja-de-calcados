document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById('email-usuario');
    const botaoEnviar = document.getElementById('button');

    //console.log("código carregado");

    emailInput.addEventListener('input', function () {
        const emailValue = emailInput.value;

        //console.log("mudança no input email");

        if(validarEmail(emailValue)) {
            //console.log("e-mail é válido");
            botaoEnviar.classList.remove('desativado');
        } else {
            //console.log("e-mail inválido");
            botaoEnviar.classList.add('desativado');
        };
    });

    botaoEnviar.addEventListener('click', function (event) {
        //console.log("botão clicado")
        emailInput.value = '';
        if(botaoEnviar.classList.contains('desativado')) {
            //console.log("botão está desabilitado")
            event.preventDefault();
        } else {
            //console.log("botão está ativado")
        }
    });

    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };
});

document.getElementById('email-usuario').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('button').click();
    };
});