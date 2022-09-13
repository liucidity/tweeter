// const { loadTweets } = require("./client");

$(function () {
  console.log('jquery ready');
  $(".tweet-entry").submit(function (event) {
    event.preventDefault();
    if ($("#tweet-text").val().length > 140) {
      alert("Hum is too long. Please limit to 140 characters");
    } else if ($("#tweet-text").val() === null
      || $("#tweet-text").val() === "") {
      alert("Hum cannot be empty");
    } else {
      $.ajax({
        url: "/tweets",
        data: $(this).serialize(),
        method: "POST"
      }).done(() => {
        loadTweets();
      });
    }
  });
});
