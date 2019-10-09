$(document).ready(function(){
  $(".listingImage2").hide();
    $(".tvshows1").click(function() {
    $(".tvseries").css("color","black");
    $(".stuffed1").css("background-color","black");
    $(".tvshows").css("color","red");
    $(".stuffed").css("background-color","red");
    $(".listingImage").show();
    $(".listingImage2").hide();
  });
  $(".tvseries1").click(function() {
    $(".tvshows").css("color","black");
    $(".stuffed").css("background-color","black");
    $(".tvseries").css("color","red");
    $(".stuffed1").css("background-color","red");
    $(".listingImage2").show();
    $(".listingImage").hide();
  });

  setTimeout(function () {
    scale();
  }, 1000);
  //scroll effect//
  $(window).scroll(function(){
    if ($(document).scrollTop() > 200) {
        // $(".nav").css("height", "50px");
          } else {
        // $(".nav").css("height", "50px");
          }

  });

  //animate logo//
  var element=document.getElementById("logo");
  var pos = 0;
  var id = setInterval(frame, 20);
  function frame(){
    if(pos ==50){
      clearInterval(id);
    }else {
      pos++;
      // element.style.top=pos +"px";
      element.style.left = pos + "%";
    }
  }
  function scale() {
    $(".logo").css("transform", "scale(1.3)");
    $(".logo").css("transition", "1s ease");
    $(".logo").css("margin-top", "10px");
  }
  //
  $(".options").click(function() {
    $(".navbar").slideToggle();
  });
});
