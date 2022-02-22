  //анимация обложек ПК
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
  });
  $('.music').mouseout(function() {
    $(this).css("padding-left", "0px");
  });

  //анимация обложек мобильной версии
  $('.m_post-punk').hover(function() {
    $('#main').css({
      "background-image": "url('media/m_post-punk.jpg')",
      "transition-delay": "0.5s"
    });
  });
  $('.m_pop-punk').hover(function() {
    $('#main').css({
      "background-image": "url('media/m_pop-punk.jpg')",
      "transition-delay": "0.5s"
    });
  });
  $('.m_classic').hover(function() {
    $('#main').css({
      "background-image": "url('media/m_classic.jpg')",
      "transition-delay": "0.5s"
    });
  });
  $('.m_indi').hover(function() {
    $('#main').css({
      "background-image": "url('media/m_indi.jpg')",
      "transition-delay": "0.5s"
    });
  });
  $('.m_metal').hover(function() {
    $('#main').css({
      "background-image": "url('media/m_metal.jpg')",
      "transition-delay": "0.5s"
    });
  });
