$(document).ready(function() {

  $('#post-punk').hover(function() {
    $('#main').css({
      "background-image": "url('media/wallpaperflare.com_wallpaper.jpg')",
      "transition-delay": "0.5s"
    });
  });

  //анимация текста
  $('.music').mouseover(function(){
    $(this).css("padding-left", "10px");
  })
  $('.music').mouseout(function(){
    $(this).css("padding-left", "0px");
  })
  
});




/*function changeBackgroundImage(id){
  var main = document.getElementById("main");
        main.style.backgroundRepeat = "no-repeat";
        main.style.backgroundSize = "cover";
  switch(id){
    case "post-punk":
      main.style.backgroundImage = "url('image.png')";
      case "pop-punk":
        main.style.backgroundImage = "url('image.png')";
        case "classic":
          main.style.backgroundImage = "url('image.png')";
          case "indi":
            main.style.backgroundImage = "url('image.png')";
            case "metal":
              main.style.backgroundImage = "url('image.png')";
  }
}*/
