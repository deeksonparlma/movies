$(document).ready(function(){
  setTimeout(function () {
    scale();
  }, 1000);
  //scroll effect//
  $(window).scroll(function(){
    if ($(document).scrollTop() > 50) {

          } else {

          }
    if($(document).scrollTop() > 500){
      $("#shopdrop").slideDown();
      $(".text2").slideDown();
      $(".pos").slideDown();
    }
      else{
   $("#shopdrop").slideUp();
   $(".text2").slideUp();
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
