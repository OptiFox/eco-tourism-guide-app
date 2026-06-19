// the nav toggle function
$(document).ready(() => {
  $("#mobile-menu-btn").on("click", () => {
    $(".nav-links").slideToggle(300);
  });

  $(window).resize(() => {
    if ($(window).width() > 600) {
      $(".nav-links").removeAttr("style");
    }
  });
});