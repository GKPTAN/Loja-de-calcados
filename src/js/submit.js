$(function () {
  $("#button").click(function () { //quando o botão for clicado
    $("#button").addClass("onclic", 250, validate); //adiciona a classe onclic ao botão, que inicia a animação em 250 ms, e chama a função validate
  });

  function validate() {
    setTimeout(function () {
      $("#button").removeClass("onclic material-symbols-outlined"); //remover a classe onclic e a classe do ícone
      $("#button").text(''); //remover o texto do botão
      $("#button").addClass("validate", 450, callback); //adiciona a classe validate ao botão, que inicia a animação em 450 ms, e chama a função callback
    }, 2250);
  } 
  function callback() {
    setTimeout(function () {
      $("#button").removeClass("validate"); //remover a classe validate
      $("#button").addClass("material-symbols-outlined desativado"); //adiciona a classe do ícone e a classe desativado ao botão
      $("#button").text('arrow_forward'); //adiciona o ícone de check ao botão
    }, 1250);
  }
});