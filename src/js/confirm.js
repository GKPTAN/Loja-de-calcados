document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById('email-usuario');
    const botaoEnviar = document.getElementById('button');

    //console.log("código carregado");

    emailInput.addEventListener('input', function () {
        const emailValue = emailInput.value; //pega o e-mail do usuário

        //console.log("mudança no input email");

        if(validarEmail(emailValue)) { //se o e-mail for um e-mail válido
            //console.log("e-mail é válido");
            botaoEnviar.classList.remove('desativado'); //remove a classe 'desativado' do botão de enviar
        } else {
            //console.log("e-mail inválido");
            botaoEnviar.classList.add('desativado'); //se for inválido, adicionamos a classe 'desativado' para desativar o botão
        };
    });

    botaoEnviar.addEventListener('click', function (event) {
        //console.log("botão clicado")
        emailInput.value = ''; //limpamos o input após a confirmação
        if(botaoEnviar.classList.contains('desativado')) {
            //console.log("botão está desabilitado")
            event.preventDefault(); //previne comportamento esperado de um formulário em navegadores
        }
    });

    function validarEmail(email) { //função para validar e-mails
        //código regex onde /^ é o inicio, o primeiro bloco entre [] é o dominio/nome do e-mail antes do @: /^[^\s@]
        //depois de +@, vem o serviço de e-mail(gmail, hotmail...) antes do ponto . +@[^\s@]
        // depois vem a extensão que normalmente é .com, entre outras extensões. +\.[^\s@]+$
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        return re.test(email); //retorna o resultado do teste do e-mail com o regex, sendo o valor true ou false.
    };
});

document.getElementById('email-usuario').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('button').click(); //no campo de e-mail, permite que o usuário confirme o e-mail apertando na tecla 'enter'
    };
});