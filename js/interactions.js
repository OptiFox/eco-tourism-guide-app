$(document).ready(() => {
  // the nav toggle function
  $("#mobile-menu-btn").on("click", () => {
    $(".nav-links").slideToggle(300);
  });

  $(window).resize(() => {
    if ($(window).width() > 600) {
      $(".nav-links").removeAttr("style");
    }
  });

  // faq accordion
  $(".accordion-question").on("click", function() {
    $(this).toggleClass("active");
    $(".accordion-question").not(this).removeClass("active");
    $(this).next(".accordion-answer").slideToggle(300);
    $(".accordion-question").not(this).next(".accordion-answer").slideUp(300);
  });
});
