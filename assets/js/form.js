$(function() {
  let form = $(".contact__form"),
    message = $(".contact__msg"),
    form_data;

  // Success function
  function done_func(response) {
    message
      .fadeIn()
      .removeClass("alert-danger")
      .addClass("alert-success");

    message.text("Message envoyé");
    setTimeout(function() {
      message.fadeOut();
    }, 2000);
    form.find('input:not([type="submit"]), textarea').val("");
  }
  // fail function
  function fail_func(data) {
    message
      .fadeIn()
      .removeClass("alert-success")
      .addClass("alert-danger");
    message.text("Une erreur est survenue !");
    setTimeout(function() {
      message.fadeOut();
    }, 2000);
  }

  $(".contact__form").submit(function(e) {
    e.preventDefault();
    form_data = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "mail.php",
      dataType: "json",
      data: form_data
    })
      .done(done_func)
      .fail(fail_func);
  });
});
