

$(window).scroll(function() {
if ($(this).scrollTop() > 100){
    $(".nav").addClass("sticky");
    $(".nav__icon").addClass("sticky");
    $(".navigation__item").addClass("sticky");
    $(".nav__corzina").addClass("sticky");
  }
  else{
    $(".nav").removeClass("sticky");
    $(".nav__icon").removeClass("sticky");
    $(".navigation__item").removeClass("sticky");
    $(".nav__corzina").removeClass("sticky");
  }


});
