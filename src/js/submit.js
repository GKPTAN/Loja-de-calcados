$(function () {
  $("#button").click(function () {
    $("#button").addClass("onclic", 250, validate);
  });

  function validate() {
    setTimeout(function () {
      $("#button").removeClass("onclic material-symbols-outlined");
      $("#button").text('');
      $("#button").addClass("validate", 450, callback);
    }, 2250);
  }
  function callback() {
    setTimeout(function () {
      $("#button").removeClass("validate");
      $("#button").addClass("material-symbols-outlined desativado");
      $("#button").text('arrow_forward');
    }, 1250);
  }
});