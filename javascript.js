
$(document).ready(function(){

   //initial values----------------------------------
	var x=100+283;
	var y=300;
  var z=0;
    var a=0;
    var b=0;
    var p=783;
    var q1=1383;
    var q2=83;
    var speed=5;
    var move="no";
    var jump=0;
    var stop=0;
    //var game=None;
    var angle=0;
    var run=10;
    var score=0;
    var highscore = score;
    var go=0;
    var obs=1;
    var wings=0;
    var flytime=0;
    var roll=0;
    var rolltime=0;
    var woodx=83;
    var wood2x=83;
    var newwood=1;
    var flyx=Math.floor(Math.random() * 10000) + 8000 ;
    var game="None";
    setInterval(onTimerTick, 33);

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

 // Game loop Begins-----------------------------------
  function onTimerTick() {

    // For getting the input keys-----------------------
     $(document).keydown(function (e){

       if(e.keyCode==39 && stop==0){ //right key
       	 move="right";
         go=1;
         a=+5;
  		}
       if(e.keyCode==38 && b==0 && wings==0 && game!="restart"){ //up key
       	 move="no";
         jump=1;
  		}
       if(e.keyCode==40 && y!=300 && game!="restart"){ // down key when player is jumping or flying
         move="down";
         jump=1;
         wings=0; 		
        }
       if(e.keyCode==40 && y==300){ // down key when player is just running
          jump=0;
          move="right";
          roll=1;
          rolltime=0;
        }
      });

     //---------------for player movements--------------------------                     
       x=x+a;
       y=y+b;

      //---------when player covers 300px from the beggining new movement animation starts----------------------|          
      if (x>=300+283){
        a=0;
        stop=1;
      }


     //--------------running and jumping animation-------------------------------|     
      if(jump==1 && y!=300+283){
          angle=angle+90;
           $('#player').css("background-image", "url(img/2.gif)");
       }
      else{
          if(run<=30 && go==1)
           $('#player').css("background-image", "url(img/1.gif)");
          else if (run>30 && run<60 || go==0)
           $('#player').css("background-image", "url(img/2.gif)");
          else
           $('#player').css("background-image", "url(img/3.gif)");
       }   
       run=run+5;
       if(run==90)
       run=10;

    //-------------makes the player jump-----------------------|
    if(jump==1 && game!="restart"){
       $('#player').css("height","50px");
        b=-speed;
        roll=0;
        if (y<180 || move=="down"){
            move="down";
            b=+speed;
            if (y>=300){
                jump=0;
                move="right";
                b=0;
                y=300;
                flytime=0;
                y=300;
              }
          }        
      }


    //-------------------------to make player roll--------------------------------------|
    if(roll==1 && jump==0){
        rolltime=rolltime+1;
        speed=speed+2;
        y=306;
        $('#player').css("background-image","url(img/6.gif)");
        $('#player').css("height","44px");
        if(rolltime%2==0)
            angle=angle+90;
        if(rolltime==50){
            angle=0;
            y=300;
            roll=0;
            $('#player').css("height","50px");
       } }
    if(roll==0 && jump==0)
        angle=0;


    //------------------------------to make player fly--------------------------------------------------|
    if(wings==1){
       flytime=flytime+1;
       speed=speed+2;
       if(y>200)
           b=-speed;
       else if(y<=200)
            b=0;
       if(run<=45)
           $('#player').css("background-image", "url(img/4.gif)");
       else
            $('#player').css("background-image", "url(img/5.gif)");
       if(flytime==300){
          jump=1;
          move="Down";
          wings=0;
          flytime=0;
     }}


    //-------------------for the moving purpose-----------------------------|
    if (x>=300+283 && game!="restart"){
        p=p-speed;
        q1=q1-speed;
        q2=q2-speed;
        flyx=flyx-speed;
        woodx=woodx-speed;
        wood2x=wood2x-speed;
      }
    if(p<=133){
        p=800+283;
        if(obs==1){
            q2=Math.floor((Math.random() * (700-250)) + (250)); 
            q2+=1083;
            obs=2;
        }
        else{
            q1=Math.floor((Math.random() * (700-250)) + (250)); 
            q1+=1083;
            obs=1;
        }
        if(q1>p+500 || q2>p+500 && wood2x==183){
            wood2x=Math.floor((Math.random() * (300-250)) +(250)) ;
            wood2x+=1083;
        }}
    if(flyx<=183)
        flyx=Math.floor((Math.random() * (10000+283-800-283)) + (800+283)) ;
        
    if(q1>=250+p && q1<=400+p && newwood==1){
        woodx=Math.floor((Math.random() * (350-300)) +(300)) ;
        woodx+=q1;
        newwood=0;
    }
    if(q2>=250+p && q2<=400+p && newwood==1){
        woodx=Math.floor((Math.random() * (350-300)) + (300));
        woodx+=q2;
        newwood=0;
      }  
    if(woodx<=-417)
         newwood=1;

    
  //----------To rotate the player when jumping and rolling--------
    if(angle>=90){
      $("#player").css({
                  '-webkit-transform' : 'rotate('+ angle +'deg)',
                   '-moz-transform' : 'rotate('+ angle +'deg)',  
                   '-ms-transform' : 'rotate('+ angle +'deg)', 
                   '-o-transform' : 'rotate('+ angle +'deg)',
                   'transform' : 'rotate('+ angle +'deg)'              
           });}
    else{
       $("#player").css({
                  '-webkit-transform' : 'rotate('+ 0 +'deg)',
                   '-moz-transform' : 'rotate('+ 0 +'deg)',  
                   '-ms-transform' : 'rotate('+ 0 +'deg)', 
                   '-o-transform' : 'rotate('+ 0 +'deg)',
                   'transform' : 'rotate('+ 0 +'deg)'              
          });}
     
  //----------hiding divs beyond 1000px width------------
       $("#cactus").css('display','inline');
       $("#big_wood").css('display','inline');
       $("#small_wood").css('display','inline');
       $("#fence").css('display','inline'); 
       $("#fly").css('display','inline'); 
       $("#player").css('display','inline'); 
       $("#player").css('z-index','5'); 
       $("#big_wood").css('z-index','6');
       $("#small_wood").css('z-index','6'); 
  if($("#cactus").offset().left>1200)
       $("#cactus").css('display','none');
  if($("#big_wood").offset().left>1200)
       $("#big_wood").css('display','none');
  if($("#small_wood").offset().left>1200)
       $("#small_wood").css('display','none');
  if($("#fence").offset().left>1200)
       $("#fence").css('display','none');
  if($("#fly").offset().left>1200)
       $("#fly").css('display','none');
  if($("#player").offset().top>550)
       $("#player").css('display','none');


    //----------increase score----------------------------------------------|
    if(go==1)
        score=score+1;


  //------set the speed of game according to score---------------------------|
    if(score<=500)
        speed=6;
    if(score>=500 && score<1000)
        speed=8;
    if(score>=1000 && score<1500)
        speed=9;
    if (score>=1500 && score<2500)
        speed=10;
    if (score>=2500 && score<3500)
        speed=12;
    if (score>=3500 && score<5000)
        speed=13;
    if (score>=5000)
        speed=15;

  //-------------------to detect collision between player and power-ups------------------------|
    if((x<=flyx+40) && (x>=flyx) || (x+50<=flyx+45) && (x+45>=flyx) ){
        if(y+20>=220 && y<=270){
          flyx=Math.floor((Math.random() * (10000+283-800-283)) + (800+283)) ;
          wings=1;
          jump=0;
          b=0;
          flytime=0;
    }}

  //------------------to detect collision between player and obstracles------------------------|
    if((x<=q1+40) && (x>=q1) || (x+50<=q1+45) && (x+45>=q1) ){
        if(y+20>=280 && y<=350){
            game="restart";
            b=0;
            go=0;
            angle=0;
    }}
    if((x<=q2+40) && (x>=q2) || (x+50<=q2+45) && (x+45>=q2) ){
        if(y+20>=280 && y<=350){
          game="restart";
          b=0;
          go=0;
          angle=0;
    }}

    //-------------------to detect collision between player and wood------------------------|
    if(x+40>=woodx && x+50<=woodx+166 && roll!=1){
        game="restart";
        b=0;
        go=0;
        angle=0;
    }
    if((x<=wood2x+68) && (x>=wood2x) || (x+50<=wood2x+68) && (x+45>=wood2x) && roll!=1){
        if(y+20>=284 && y<=350 && roll!=1){
           game="restart";
           b=0;
           go=0;
           angle=0;
    }}

    //----------------when player falls from the hole-------------------------|
    if(x>=p-25 && x<=p+75 && jump!=1 && wings!=1){
         $('#player').css("background-image","url(img/2.gif)");
         $('#player').css("z-index", "100");
         go=0;
         roll=0;  
         $('#player').css("height","50px");
        for (z=1;z<=200;z++){
            y=y+0.1;
            $("#player").css('left', x +'px');
            $("#player").css('top', y +'px');
        }
        game="restart";
      }
 
 
//---------------------------to restart the game-------------------------------------|

     if(game=="restart"){
         $("text.final_score").css('display','inline');
         $("text.final_score").text("Your Score : " + score);
      setTimeout(function(){
      //---------Assign initial values to restart the game-----|
        $("text.final_score").css('display','none');
        x=383;
        y=300;
        a=0;
        b=0;
        p=783;
        q1=1100;
        level=1;
        move="no";
        jump=0;
        stop=0;
        game="none";
        go=0;
        wings=0;
        q2=-200;
        obs=1;
        flyx=Math.floor((Math.random() * (10000+283-800-283)) + (800+283)) ;
        if (score>=highscore)
            highscore=score;
        score=0;
        speed=5;
        woodx=-200;
        wood2x=-200;
        newwood=0;
     }, 2000);
   }
        

  //--------------To display the graphics--------------
   $("text.score").text("Score : " + score);
   $("text.highscore").text("High Score : " + highscore);
   $("#player").css('left', x +'px');
   $("#player").css('top', y +'px');
   $("#cactus").css('left', q1 +'px');
   $("#fence").css('left', q2 +'px');
   $("#big_wood").css('left', woodx +'px');
   $("#small_wood").css('left', wood2x +'px');
   $("#fly").css('left', flyx +'px');
   $("#hole").css('left', p +'px');
   if(x==740+283)
     x=283;
   if(wings==1){
    $("#flymeter").css("display","inline");
    $("#meter").css("width",152-(flytime/2)+"px")
   }
   else
    $("#flymeter").css("display","none");
  		  
   
  }


 });