var startTime = new Date().getTime();

  setInterval(function() {
    var currentTime = new Date().getTime();
    var elapsed = currentTime - startTime;
    var elapsedSeconds = Math.floor(elapsed / 1000);
    var elapsedMinutes = Math.floor(elapsedSeconds / 60);
    var timeOnPage = '';

    if (elapsedMinutes > 0) {
      timeOnPage += elapsedMinutes + ' perc ';
    }

    var secondsRemaining = elapsedSeconds % 60;
    if (secondsRemaining > 0) {
      timeOnPage += secondsRemaining + ' másodperc';
    }

    document.getElementById('time-on-page').innerHTML = 'Ennyi ideje játszol: ' + timeOnPage;

    if (localStorage.getItem("GameTime")) {
       var game_time_clock = 0;
       let save_time = 0;
       let game_time = 0;
       var game_time_exist = false;
       var saved_date_0 = true;
       var play_Time = 0;
       var gametime_saved = false;
       var gametime_disable = false;
       var gametime_disable2 = false;
       var saved_play_time = 0;

       const saved_date = localStorage.getItem("GameTime");
        

       if(localStorage.getItem("saved_date"))
       {
        game_time_clock += elapsedSeconds;
        game_time = game_time_clock
        save_time = game_time;
        play_Time = save_time;
        if (localStorage.getItem("Gametime_saved") == true) {

          localStorage.setItem("Gametime_Disable", true)

          if(localStorage.getItem("Gametime_Disable") == true){
           localStorage.setItem("Play_Time", play_Time);
           
             if(localStorage.getItem("gametime_disable_2") == true){

              localStorage.setItem("saved_play_time", localStorage.getItem("Play_Time"));
              
           }
          }
        } else {

        localStorage.setItem("Play_Time", JSON.stringify(play_Time));
        localStorage.setItem("Gametime_saved", true);
        localStorage.setItem("saved_date", true);
        localStorage.setItem("Gametime_Disable", true);
        localStorage.setItem("gametime_disable_2", true);
        
        
       }}

       if(localStorage.getItem("game_time_exist") == true)
       {
        localStorage.getItem("GameTime");
       }
       
    } else {

        localStorage.setItem("GameTime", JSON.stringify(timeOnPage));

        game_time_exist = true
        localStorage.setItem("game_time_exist", JSON.stringify(game_time_exist));

        saved_date_0 = false
        localStorage.setItem("saved_date", JSON.stringify(saved_date_0));

        gametime_saved = false;
        localStorage.setItem("Gametime_saved", JSON.stringify(gametime_saved));

        gametime_disable = false;
        localStorage.setItem("Gametime_Disable", JSON.stringify(gametime_disable));

        gametime_disable2 = false;
        localStorage.setItem("Gametime_Disable2", JSON.stringify(gametime_disable2));

        saved_play_time = 0
        localStorage.setItem("saved_play_time", JSON.stringify(saved_play_time));
        
    }
 
    

        
    
    
  }, 1000);

  