function changeBackgroundImage(id){
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
}
