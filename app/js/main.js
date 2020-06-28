$(function(){
  $('[data-fancybox="images"]').fancybox({
    buttons: [
      "zoom",
      "close"
    ],
  });
  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });
});