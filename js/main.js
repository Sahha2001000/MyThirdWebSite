$('.header__slider-items').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  arrows: false,
  dotsClass: "header__slick-dots"

 
}); 
$('.header__top-btn').on('click', function () {
  $('.menu').addClass('active');
});
$('.menu__btn-close').on('click', function(){
$('.menu').removeClass('active');
});