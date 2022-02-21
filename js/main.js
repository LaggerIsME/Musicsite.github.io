$(document).ready(function() {
  //анимация обложек
  $('.post-punk').hover(function() {
    $('#main').css({
      "background-image": "url('media/post-punk.jpg')",
      "transition-delay": "0.5s"
    });
  });
  $('.pop-punk').hover(function() {
    $('#main').css({
      "background-image": "url('media/pop-punk.jpg')",
      "transition-delay": "0.5s"
    });
  });
  $('.classic').hover(function() {
    $('#main').css({
      "background-image": "url('media/classic.jpg')",
      "transition-delay": "0.5s"
    });
  });
  $('.indi').hover(function() {
    $('#main').css({
      "background-image": "url('media/indi.jpg')",
      "transition-delay": "0.5s"
    });
  });
  $('.metal').hover(function() {
    $('#main').css({
      "background-image": "url('media/metal.jpg')",
      "transition-delay": "0.5s"
    });
  });

  //анимация текста
  $('.music').mouseover(function() {
    $(this).css("padding-left", "10px");
  })
  $('.music').mouseout(function() {
    $(this).css("padding-left", "0px");
  })

});
