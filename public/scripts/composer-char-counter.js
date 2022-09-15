
$(document).ready(function () {
  $("#tweet-text").on("input", function () {
    //char counter turns red when exceeding 140 char
    if (140 - $("#tweet-text").val().length < 0) {
      $(this).parent().find(".counter").css("color", "red");
    };

    if (140 - $("#tweet-text").val().length >= 0) {
      $(this).parent().find(".counter").css("color", "#545149");
    };
    //changes char counter number based on remaining char
    $(this).parent().find(".counter").val(140 - $("#tweet-text").val().length);
  });
});