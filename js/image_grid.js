$(document).ready(function() {
  $(".img-grid-cell").children(".caption").hide();

  $(".img-grid-cell").hover(
    function() {
      $(this).children(".caption").fadeIn(0.2);
      $(this).children(".grid-img").css({ filter: "blur(3px)"});
    },
    function() {
      $(this).children(".caption").fadeOut(0.2);
      $(this).children(".grid-img").css({ filter: "none"});
    }
  );
});
