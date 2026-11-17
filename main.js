//buttons to set time 
document.getElementById("btn15").addEventListener("click", ()=> setTimer(15));
document.getElementById("btn30").addEventListener("click", ()=> setTimer(30));
document.getElementById("btn60").addEventListener("click", ()=> setTimer(60));
//stop start buttons
document.getElementById("start").addEventListener("click", ()=> startTimer());
document.getElementById("stop").addEventListener("click", ()=> stopTimer());


const timerState = {
  interval: null,
  minSelected: 15,
  totalSeconds: 0,
  initialOffset: 440,
  secondsCounted: 0,
  minutes: 15,
  secsInMin: 0
}
let mins; //used for var in setTimer

function setTimer(mins){
  if (timerState.interval !== null) {
    alert('Please stop or wait for the current timer to finish!');
    return;
  }

  $('h2').text(mins + ':' + '00');
  $('.circle_animation').css('stroke-dashoffset', 0);
  timerState.minSelected = mins;
  timerState.secondsCounted = 0;
}

function startTimer(){
  if (timerState.interval !== null) { //check if timer is alr running
    alert('Timer is already running!');
    return;
  }
  
  if(timerState.secondsCounted === 0 || timerState.secondsCounted >= timerState.totalSeconds){
    timerState.minutes = timerState.minSelected - 1; //minutes to use for ui

    timerState.totalSeconds = timerState.minSelected * 60;
    timerState.secsInMin = 59;
  }

  timerState.interval = setInterval(function(){
    if (timerState.secondsCounted == timerState.totalSeconds){
      clearInterval(timerState.interval); 
      timerState.interval = null; 
      return;
    }

    if(timerState.secsInMin < 10){
      $('h2').text(timerState.minutes + ':0' + timerState.secsInMin);
    }else{
      $('h2').text(timerState.minutes + ':' + timerState.secsInMin);
    }

    if(timerState.secsInMin == 0){
      timerState.secsInMin = 60;
      timerState.minutes--;
    }

    
    $('.circle_animation').css('stroke-dashoffset', ((timerState.secondsCounted+1)*(timerState.initialOffset/timerState.totalSeconds)));
    timerState.secsInMin--;
    timerState.secondsCounted++;
  }, 1000);
}

function stopTimer(){
  if(timerState.interval === null){
    alert('No timer to stop!');
    return;
  }

  clearInterval(timerState.interval);
  timerState.interval = null;

}