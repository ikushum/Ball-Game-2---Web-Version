
$(document).ready(function(){


  //------------For start screen----------
  $("text#how_to_play").click(function(e){
     $("#start_screen").css("background-image","url(img/howToPlay.jpg)");
     $("text.start_text").css("display","none");
     e.preventDefault();
  });
  $("text#intro").click(function(e){
     $("#start_screen").css("background-image","url(img/intro.jpg)");
     $("text.start_text").css("display","none");
     e.preventDefault();
  });
   $(document).keydown(function(e){
     if(e.keyCode == 32){
     $("#start_screen").css("background-image","url(img/start.jpg)");
     $("text.start_text").css("display","inline");
     }
   });

 });