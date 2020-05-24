// Menu-toggle button

$(document).ready(function() {
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
});

// Scrolling Effect

$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $('nav').addClass('black');
  } else {
    $('nav').removeClass('black');
  }
})

// text animatiom for the text inside the header setion

var text = ["Verified News", "Instant Updates", "Do's and Donts", "All You Need to Know"];
var counter = 0;
var elem = $("#greeting");
setInterval(change, 1800);

function change() {
  elem.fadeOut(function() {
    elem.html(text[counter]);
    counter++;
    if (counter >= text.length) {
      counter = 0;
    }
    elem.fadeIn();
  });
}
