$(function () {
  //navbar compose tweet button
  $("section.new-tweet").hide();
  $(".right").click(() => {
    $("section.new-tweet").toggle("slide", function () {
    });
    $("#tweet-text").focus();
  });
  //navbar hide and floating button show on scroll
  $(window).scroll(function () {
    console.log($(window).scrollTop());
    $("nav").css({ "opacity": 1 - $(window).scrollTop() / 100 });
    $(".float-button").css({ "opacity": 0 + $(window).scrollTop() / 100 });
  });
  //floating button to compose tweet
  $(".float-button").click(function (e) {
    window.scrollTo(0, 0);
    $("section.new-tweet").show("slide", function () {
    });
    $("#tweet-text").focus();

  });
});