let minutes = 0;
let seconds = 0;
let miliseconds = 0;

let displayMilisec = miliseconds;
let displaySec = seconds;
let displayMins = minutes;

let interval = null;

let status = "stopped";

let lapNow = null;

function start() {
      miliseconds++;

 

      if (miliseconds / 100 === 1) {
            seconds++;
            miliseconds = 0;
            if (seconds / 60 === 1) {
                  minutes++;
                  seconds = 0;
            }
      }
     if (miliseconds < 10){
            displayMilisec = "0" + miliseconds;
      }
      else {
            displayMilisec = miliseconds;
      }
      
      if(seconds < 10) {
            displaySec = "0" + seconds;
      }
      else {
            displaySec = seconds;
      }
      
      if(minutes < 10) {
            displayMins = "0" + minutes;
      }
      else {
            displayMins = minutes;
      }
    

      document.getElementById("msec").innerHTML = displayMilisec;
      document.getElementById("second").innerHTML = displaySec;
      document.getElementById("minute").innerHTML = displayMins;
      

}

function startStop() {
      if (status === "stopped") {
            interval = window.setInterval(start, 10);
            document.getElementById('BUTTON1').innerHTML = "Stop";
            status = "started";
      }
      else {
            window.clearInterval(interval);
            document.getElementById('BUTTON1').innerHTML = "Start";
            status = "stopped";
      }
}

function reset() {
      window.clearInterval(interval);
      miliseconds = 0;
      seconds = 0;
      minutes = 0;
      displayMilisec = "00";
      displaySec = "00";
      displayMins = "00";
      document.getElementById("msec").innerHTML = "00";
      document.getElementById("second").innerHTML = "00";
      document.getElementById("minute").innerHTML = "00";
      document.getElementById('BUTTON1').innerHTML = "Start";
      status = "stopped";
      document.getElementById('lapRecord').innerHTML = "";
}

function lap() {

      lapNow =    displayMins + " : " + displaySec + " : " + displayMilisec; 

      document.getElementById('lapRecord').innerHTML = document.getElementById('lapRecord').innerHTML + "<p>" + lapNow + "</p>";
}