// const { loadTweets } = require("./client");

$(function () {
  $(".error-message").hide();
  $(".tweet-entry").submit(function (event) {
    event.preventDefault();
    if ($("#tweet-text").val().length > 140) {

      $(".error-message").html(`
      <i class="fa-solid fa-triangle-exclamation"></i>
      Hum is too long! Please keep it to 140 characters
        <i i class= "fa-solid fa-triangle-exclamation" ></i > `);

      $(".error-message").slideDown();
    } else if ($("#tweet-text").val() === null
      || $("#tweet-text").val() === "") {

      $(".error-message").html(`
      <i class="fa-solid fa-triangle-exclamation"></i>
      Hum cannot be empty
        <i i class= "fa-solid fa-triangle-exclamation" ></i > `);

      $(".error-message").slideDown();

    } else {
      $(".error-message").slideUp();
      $.ajax({
        url: "/tweets",
        data: $(this).serialize(),
        method: "POST"
      }).done(() => {
        this.reset();
        loadTweets();
      });
    }
  });
});
