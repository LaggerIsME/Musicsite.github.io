  //три плеера на сайте
  var audio1 = $("#player1");
  var audio2 = $("#player2");
  var audio3 = $("#player3");

  //анимация обложек ПК
  $('.post-punk').click(function() {
    $('#main').css({
      "background-image": "url('media/post-punk.jpg')",
      "transition-delay": "0.5s"
    });
    //Смена треков
    //Истоничк первой песни
    $("#source1").attr("src", "audio/post-punk/Виктор Цой_Кино - Песня Без Слов.mp3");
    /****************/
    audio1[0].pause();
    audio1[0].load(); //suspends and restores all audio element
    //Истоничк второй песни
    $("#source2").attr("src", "audio/post-punk/Июльские Дни - Мой город будет стоять.mp3");
    /****************/
    audio2[0].pause();
    audio2[0].load(); //suspends and restores all audio element
    //Истоничк третьей песни
    $("#source3").attr("src", "audio/post-punk/Янка - По трамвайным рельсам.mp3");
    /****************/
    audio3[0].pause();
    audio3[0].load(); //suspends and restores all audio element
  });
  $('.pop-punk').click(function() {
    $('#main').css({
      "background-image": "url('media/pop-punk.jpg')",
      "transition-delay": "0.5s"
    });
    //Смена треков
    //Истоничк первой песни
    $("#source1").attr("src", "audio/pop-punk/Соседи Стерпят - Девочка панк.mp3");
    /****************/
    audio1[0].pause();
    audio1[0].load(); //suspends and restores all audio element
    //Истоничк второй песни
    $("#source2").attr("src", "audio/pop-punk/Соседи Стерпят - Пепел мой последний друг.mp3");
    /****************/
    audio2[0].pause();
    audio2[0].load(); //suspends and restores all audio element
    //Истоничк третьей песни
    $("#source3").attr("src", "audio/pop-punk/Соседи Стерпят feat. Ai Mori - Влюбилась (руки на шее) [feat. Ai Mori].mp3");
    /****************/
    audio3[0].pause();
    audio3[0].load(); //suspends and restores all audio element
  });
  $('.classic').click(function() {
    $('#main').css({
      "background-image": "url('media/classic.jpg')",
      "transition-delay": "0.5s"
    });
    //Смена треков
    //Истоничк первой песни
    $("#source1").attr("src", "audio/classic/Звери - Районы-кварталы.mp3");
    /****************/
    audio1[0].pause();
    audio1[0].load(); //suspends and restores all audio element
    //Истоничк второй песни
    $("#source2").attr("src", "audio/classic/Звери - Рома, извини.mp3");
    /****************/
    audio2[0].pause();
    audio2[0].load(); //suspends and restores all audio element
    //Истоничк третьей песни
    $("#source3").attr("src", "audio/classic/Звери - Южная ночь.mp3");
    /****************/
    audio3[0].pause();
    audio3[0].load(); //suspends and restores all audio element
  });
  $('.indi').click(function() {
    $('#main').css({
      "background-image": "url('media/indi.jpg')",
      "transition-delay": "0.5s"
    });
    //Смена треков
    //Истоничк первой песни
    $("#source1").attr("src", "audio/indi/Sati Akura - Otome Dissection.mp3");
    /****************/
    audio1[0].pause();
    audio1[0].load(); //suspends and restores all audio element
    //Истоничк второй песни
    $("#source2").attr("src", "audio/indi/Sati Akura - The Vampire.mp3");
    /****************/
    audio2[0].pause();
    audio2[0].load(); //suspends and restores all audio element
    //Истоничк третьей песни
    $("#source3").attr("src", "audio/indi/Sati Akura[Vocaloid RUS] - HIBANA .mp3");
    /****************/
    audio3[0].pause();
    audio3[0].load(); //suspends and restores all audio element
  });
  $('.metal').click(function() {
    $('#main').css({
      "background-image": "url('media/metal.jpg')",
      "transition-delay": "0.5s"
    });
    //Смена треков
    //Истоничк первой песни
    $("#source1").attr("src", "audio/metal/Волшебники Изумрудного Города - Не вам меня судить.mp3");
    /****************/
    audio1[0].pause();
    audio1[0].load(); //suspends and restores all audio element
    //Истоничк второй песни
    $("#source2").attr("src", "audio/metal/Волшебники Изумрудного Города - Не такой как все.mp3");
    /****************/
    audio2[0].pause();
    audio2[0].load(); //suspends and restores all audio element
    //Истоничк третьей песни
    $("#source3").attr("src", "audio/metal/Волшебники Изумрудного Города - Устоять.mp3");
    /****************/
    audio3[0].pause();
    audio3[0].load(); //suspends and restores all audio element
  });

  //анимация текста
  $('.music').mouseover(function() {
    $(this).css("padding-left", "10px");
  });
  $('.music').mouseout(function() {
    $(this).css("padding-left", "0px");
  });

  //анимация обложек мобильной версии
  $('.m_post-punk').click(function() {
    $('#main').css({
      "background-image": "url('media/m_post-punk.jpg')",
      "transition-delay": "0.5s"
    });
    //Смена треков
    //Истоничк первой песни
    $("#source1").attr("src", "audio/post-punk/Виктор Цой_Кино - Песня Без Слов.mp3");
    /****************/
    audio1[0].pause();
    audio1[0].load(); //suspends and restores all audio element
    //Истоничк второй песни
    $("#source2").attr("src", "audio/post-punk/Июльские Дни - Мой город будет стоять.mp3");
    /****************/
    audio2[0].pause();
    audio2[0].load(); //suspends and restores all audio element
    //Истоничк третьей песни
    $("#source3").attr("src", "audio/post-punk/Янка - По трамвайным рельсам.mp3");
    /****************/
    audio3[0].pause();
    audio3[0].load(); //suspends and restores all audio element
  });
  $('.m_pop-punk').click(function() {
    $('#main').css({
      "background-image": "url('media/m_pop-punk.jpg')",
      "transition-delay": "0.5s"
    });
    //Смена треков
    //Истоничк первой песни
    $("#source1").attr("src", "audio/pop-punk/Соседи Стерпят - Девочка панк.mp3");
    /****************/
    audio1[0].pause();
    audio1[0].load(); //suspends and restores all audio element
    //Истоничк второй песни
    $("#source2").attr("src", "audio/pop-punk/Соседи Стерпят - Пепел мой последний друг.mp3");
    /****************/
    audio2[0].pause();
    audio2[0].load(); //suspends and restores all audio element
    //Истоничк третьей песни
    $("#source3").attr("src", "audio/pop-punk/Соседи Стерпят feat. Ai Mori - Влюбилась (руки на шее) [feat. Ai Mori].mp3");
    /****************/
    audio3[0].pause();
    audio3[0].load(); //suspends and restores all audio element
  });
  $('.m_classic').click(function() {
    $('#main').css({
      "background-image": "url('media/m_classic.jpg')",
      "transition-delay": "0.5s"
    });
    //Смена треков
    //Истоничк первой песни
    $("#source1").attr("src", "audio/classic/Звери - Районы-кварталы.mp3");
    /****************/
    audio1[0].pause();
    audio1[0].load(); //suspends and restores all audio element
    //Истоничк второй песни
    $("#source2").attr("src", "audio/classic/Звери - Рома, извини.mp3");
    /****************/
    audio2[0].pause();
    audio2[0].load(); //suspends and restores all audio element
    //Истоничк третьей песни
    $("#source3").attr("src", "audio/classic/Звери - Южная ночь.mp3");
    /****************/
    audio3[0].pause();
    audio3[0].load(); //suspends and restores all audio element
  });
  $('.m_indi').click(function() {
    $('#main').css({
      "background-image": "url('media/m_indi.jpg')",
      "transition-delay": "0.5s"
    });
    //Смена треков
    //Истоничк первой песни
    $("#source1").attr("src", "audio/indi/Sati Akura - Otome Dissection.mp3");
    /****************/
    audio1[0].pause();
    audio1[0].load(); //suspends and restores all audio element
    //Истоничк второй песни
    $("#source2").attr("src", "audio/indi/Sati Akura - The Vampire.mp3");
    /****************/
    audio2[0].pause();
    audio2[0].load(); //suspends and restores all audio element
    //Истоничк третьей песни
    $("#source3").attr("src", "audio/indi/Sati Akura[Vocaloid RUS] - HIBANA .mp3");
    /****************/
    audio3[0].pause();
    audio3[0].load(); //suspends and restores all audio element
  });
  $('.m_metal').click(function() {
    $('#main').css({
      "background-image": "url('media/m_metal.jpg')",
      "transition-delay": "0.5s"
    });
    //Смена треков
    //Истоничк первой песни
    $("#source1").attr("src", "audio/metal/Волшебники Изумрудного Города - Не вам меня судить.mp3");
    /****************/
    audio1[0].pause();
    audio1[0].load(); //suspends and restores all audio element
    //Истоничк второй песни
    $("#source2").attr("src", "audio/metal/Волшебники Изумрудного Города - Не такой как все.mp3");
    /****************/
    audio2[0].pause();
    audio2[0].load(); //suspends and restores all audio element
    //Истоничк третьей песни
    $("#source3").attr("src", "audio/metal/Волшебники Изумрудного Города - Устоять.mp3");
    /****************/
    audio3[0].pause();
    audio3[0].load(); //suspends and restores all audio element
  });
