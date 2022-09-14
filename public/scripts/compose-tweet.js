$(function () {
  $("section.new-tweet").hide();
  $(".right").click(() => {
    $("section.new-tweet").toggle("slide", function () {
    });
    $("#tweet-text").focus();
  });

  // $(".float-button").hide();
  $(window).scroll(function () {
    console.log($(window).scrollTop());
    $("nav").css({ "opacity": 1 - $(window).scrollTop() / 400 });
    $(".float-button").css({ "opacity": 0 + $(window).scrollTop() / 200 });
  });

  $(".float-button").click(function (e) {
    window.scrollTo(0, 0);
    $("section.new-tweet").show("slide", function () {
    });
    $("#tweet-text").focus();

  });
});