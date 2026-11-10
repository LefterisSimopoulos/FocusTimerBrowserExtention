document.getElementById("btn15").addEventListener("click", ()=> setTimer(15));
document.getElementById("btn30").addEventListener("click", ()=> setTimer(30));
document.getElementById("btn60").addEventListener("click", ()=> setTimer(60));

document.getElementById("start").addEventListener("click", ()=> startTimer());

let minSelected = 15; //initialize the selected mins variable
let mins; //used for var in setTimer
var interval = null; //tracks if timer is alr running

function setTimer(mins){
  if (interval !== null) {
    alert('Please stop or wait for the current timer to finish!');
    return;
  }
  //alert('Set timer for ' + mins);
  minSelected = mins;
  $('h2').text(mins + ':' + '00');
}

function startTimer(){
  if (interval !== null) { //check if timer is alr running
    alert('Timer is already running!');
    return;
  }

  //alert('Started timer for ' + min + ' mins');

  var minutes = minSelected - 1; //minutes to use for ui
  var initialOffset = '440';
  var i = 0;
  let totalSeconds = minSelected * 60;
  let secsInMin = 59;

  $('.circle_animation').css('stroke-dashoffset', initialOffset-(1*initialOffset/totalSeconds));

  interval = setInterval(function(){
    $('h2').text(minutes + ':' + secsInMin);
    if (i == totalSeconds){
      clearInterval(interval);  
      return;
    }
    if(secsInMin == 0){
      secsInMin = 60;
      minutes--;
    }
    
    $('.circle_animation').css('stroke-dashoffset', initialOffset-((i+1)*(initialOffset/totalSeconds)));
    secsInMin--;
    i++;
  }, 1000);
}