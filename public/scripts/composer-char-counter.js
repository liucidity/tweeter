
$(document).ready(function () {
  $("#tweet-text").on("input", function () {
    if (140 - $("#tweet-text").val().length < 0) {
      $(this).parent().find(".counter").css("color", "red");
    };
    if (140 - $("#tweet-text").val().length >= 0) {
      $(this).parent().find(".counter").css("color", "#545149");
    };

    $(this).parent().find(".counter").val(140 - $("#tweet-text").val().length);
  });
});