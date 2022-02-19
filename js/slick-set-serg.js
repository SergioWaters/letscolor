$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    arrows: false,
    appendDots: $('.slider__pagination'),
    autoplay: true,
    autoplayspeed: 5000,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
});