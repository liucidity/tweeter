$(function () {
  console.log('jquery ready');
  $(".tweet-entry").submit(function (event) {
    event.preventDefault();
    $.ajax({
      url: "/tweets",
      data: $(this).serialize(),
      method: "POST",

    }).done(function (data) {
      console.log(data);
    });

  });

});