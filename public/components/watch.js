// Code adapted from https://www.w3schools.com/howto/howto_js_draggable.asp

const { init } = require("events");

window.onload = function(){ 

//Make Watch draggagle:
dragElement(document.getElementById('watch'));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0;
  if (document.getElementById('watch')) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById('watch').onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos3 = e.clientX;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//Stopwatch

// Attempt to toggle play/pause button but was advised by tutor to keep them as two separate buttons
// let btn = document.querySelector('.toggle');
// let icon = btn.querySelector('.fa-play');
// console.log(btn);
// btn.addEventListener('click', () => {
//   console.log('button clicked');
//   if (icon.classList.contains('fa-play')) {
//     icon.classList.replace('fa-play', 'fa-pause');
//   }
//   else {
//     icon.classList.replace('fa-pause', 'fa-play');
//   }
// })

//Global Variables
const watch = document.getElementById('watch');
const activateWatchButton = document.getElementById('watch-btn');
const stopwatch = document.getElementById('stopwatch-feature');
const pomodoro = document.getElementById('pomodoro-feature');
const pomodoroSettings = document.getElementById('settings-modal-container');
const activateStopwatchButton = document.getElementById('stopwatch');
const activatePomodoroButton = document.getElementById('pomodoro');
const openPomodoroSettingsButton = document.getElementById('pomodoro-settings-btn');
const closePomodoroSettingsButton = document.getElementById('closeSettings');
const closeWatchButton = document.getElementById('close-watch');

// Watch opening event listener
activateWatchButton.addEventListener('click', () => {
  watch.style.display='block';
  watch.style.left = '525px';
  activateWatchButton.style.color = '#FCFCFC';
  activateWatchButton.style.backgroundColor = '#4D7A7A';
  activateStopwatchButton.style.color = '#4d7a7a';
  activateStopwatchButton.style.backgroundColor = '#FCFCFC';
  activatePomodoroButton.style.color = '#FCFCFC';
  activatePomodoroButton.style.backgroundColor = '#4d7a7a';
  
})

// Stopwatch Toggle opening event listener
activateStopwatchButton.addEventListener('click', () => {
  stopwatch.style.display='block';
  pomodoro.style.display='none';
  pomodoroSettings.classList.remove('show');
  activateStopwatchButton.style.color = '#4d7a7a';
  activateStopwatchButton.style.backgroundColor = '#FCFCFC';
  activatePomodoroButton.style.color = '#FCFCFC';
  activatePomodoroButton.style.backgroundColor = '#4d7a7a';
})

// Pomodoro Toggle opening event listener
activatePomodoroButton.addEventListener('click', () => {
  pomodoro.style.display='block';
  stopwatch.style.display='none';
  pomodoroSettings.classList.remove('show');
  activatePomodoroButton.style.color = '#4d7a7a';
  activatePomodoroButton.style.backgroundColor = '#FCFCFC';
  activateStopwatchButton.style.color = '#FCFCFC';
  activateStopwatchButton.style.backgroundColor = '#4d7a7a';
})

// Pomodoro Settings opening event listener
openPomodoroSettingsButton.addEventListener('click', () => {
  pomodoroSettings.classList.add('show');
  stopwatch.style.display='none';
  pomodoro.style.display='block';
})

// Pomodoro Settings closing event listener
closePomodoroSettingsButton.addEventListener('click', () => {
  pomodoroSettings.classList.remove('show');
})

// Close Watch Modal
closeWatchButton.addEventListener('click', () => {
  watch.style.display='none';
  pomodoroSettings.classList.remove('show');
  activateWatchButton.style.color = '#4D7A7A';
  activateWatchButton.style.backgroundColor = '#FCFCFC';
})

// Stopwatch
const stopwatchTime_el = document.getElementById('stopwatch-time');
const startStopwatchButton = document.getElementById('start');
const stopStopwatchButton = document.getElementById('stop');
const resetStopwatchtButton = document.getElementById('reset');

let stopwatchSeconds = 0;
let interval = null;

//Stopwatch Event Listerners
startStopwatchButton.addEventListener('click', stopwatchStart);
stopStopwatchButton.addEventListener('click', stopwatchStop);
resetStopwatchtButton.addEventListener('click', stopwatchReset);


//Update time
function stopwatchTimer () {
    stopwatchSeconds++;

    //Format time
    let hrs = Math.floor(stopwatchSeconds / 3600);
    let mins = Math.floor((stopwatchSeconds - (hrs * 3600)) / 60);
    let secs = stopwatchSeconds % 60;

    if (hrs < 10) hrs = "0" + hrs;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;

    stopwatchTime_el.innerText = `${hrs}:${mins}:${secs}`;
}

function stopwatchStart () {
    if(interval) {
        return
    }
    interval = setInterval(stopwatchTimer, 1000);
    startStopwatchButton.style.color = '#5E9797';
    startStopwatchButton.style.cursor = 'default';
    resetStopwatchtButton.style.color = '#FCFCFC'
    stopStopwatchButton.style.color = '#FCFCFC'
}

function stopwatchStop () {
    clearInterval(interval);
    interval = null;
    startStopwatchButton.style.color = '#FCFCFC';
    resetStopwatchtButton.style.color = '#FCFCFC'
    stopStopwatchButton.style.color = '#5E9797';
    stopStopwatchButton.style.cursor = 'default';
}

function stopwatchReset () {
    stopwatchStop();
    stopwatchSeconds = 0;
    stopwatchTime_el.innerText = '00:00:00';
    resetStopwatchtButton.style.color = '#5E9797'
    resetStopwatchtButton.style.cursor = 'default';
    startStopwatchButton.style.color = '#FCFCFC';
    stopStopwatchButton.style.color = '#FCFCFC';
}

// Pomodoro timer
// Adapted from https://github.com/Web-Dev-Jr/JS-Pomodoro
const start = document.getElementById('pomodoro-start');
const reset = document.getElementById('pomodoro-reset');
const stop = document.getElementById('pomodoro-stop');
const submitSettingsForm = document.getElementById('submitSettings');

const focusInputField = document.getElementById('focusDurationInput');
const breakInputField = document.getElementById('breakDurationInput');

const wm = document.getElementById('w-minutes');
const ws = document.getElementById('w-seconds');
const bm = document.getElementById('b-minutes');
const bs = document.getElementById('b-seconds');
let startTimer;

// Start timer button
start.addEventListener('click', function(){
  start.style.color = '#5E9797';
  start.style.cursor = 'default';
  stop.style.color = '#FCFCFC';
  reset.style.color = '#FCFCFC';
  if (wm.innerText <= 0 && ws.innerText == 0) {
    alert("Please enter focus time!")
  } else if (bm.innerText <= 0 && bs.innerText == 0) {
    alert("Please enter break time!")
  } else if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000)
    focusInputField.value = '';
    breakInputField.value = '';
    clearInterval(stop);
  } else {
    alert("Timer is already running!")
  }
})

// User focus time input 
focusInputField.addEventListener('input', function() {
  if (startTimer === undefined ) {
    wm.innerText = focusInputField.value;
     } 
     if (focusInputField.value === undefined) {
       wm.innerText = "0";
     }
})

// User break time input 
breakInputField.addEventListener('input', function() {
  if (startTimer === undefined ) {
    bm.innerText = breakInputField.value;
     } 
     if (breakInputField.value === undefined) {
       bm.innerText = "0";
     }

})

submitSettingsForm.addEventListener('click', function(event) {
  event.preventDefault();
  pomodoroSettings.classList.remove('show');
})

// Stop pomodoro timer button
stop.addEventListener('click', function(){
  stop.style.color = '#5E9797';
  stop.style.cursor = 'default';
  start.style.color = '#FCFCFC';
  reset.style.color = '#FCFCFC';
  if (startTimer != undefined) {
    clearInterval(startTimer);
    startTimer = undefined;
  } else if (startTimer === undefined) {
    alert("Timer is already stopped!")
  }
})

// Reset pomodoro timer button
reset.addEventListener('click', function(){
  reset.style.color = '#5E9797';
  reset.style.cursor = 'default';
  stop.style.color = '#FCFCFC';
  start.style.color = '#FCFCFC';
  clearInterval(startTimer);
  startTimer = undefined;
  wm.innerText = "0";
  ws.innerText = "00";
  bm.innerText = "0";
  bs.innerText = "00";
})

// Decrement seconds and minutes after timer starts
function timer() {
  if (ws.innerText != 0) {
    ws.innerText--;
       // add leading zero to break seconds
       if (ws.innerText <10) {
        ws.innerText = `0${ws.innerText}`;
      }
  } else if (wm.innerText != 0 && ws.innerText == 0) {
    ws.innerText = 59;
    wm.innerText--;
  } 
  if (wm.innerText == 0 && ws.innerText == 0) {
    if (bs.innerText != 0) {
      bs.innerText--;
        // Add leading zero to work seconds < 10
        if (bs.innerText <10){
        bs.innerText = `0${bs.innerText}`;
        }
    } else if (bm.innerText != 0 && bs.innerText == 0){
      bs.innerText = 59;
      bm.innerText--;
    } else if (bm.innerText == 0 && bs.innerText == 0) {
      clearInterval(startTimer);
      startTimer = undefined;
      wm.innerText = "0";
      ws.innerText = "00";
      bm.innerText = "0";
      bs.innerText = "00";
      timerEndAlert();
    }
  }
 }

function timerEndAlert() {
  const audioSound = document.getElementById('myAudio');
  audioSound.play();
}
}

// Pomodoro
// const submitSettingsForm = document.getElementById('submitSettings');
// const pomodoroTime_el = document.getElementById('pomodoro-time');
// const startPomodoroButton = document.getElementById('pomodoro-start');
// const stopPomodoroButton = document.getElementById('pomodoro-stop');
// const resetPomodorotButton = document.getElementById('pomodoro-reset');

// //Pomodoro Event Listerners
// startPomodoroButton.addEventListener('click', pomodoroStart);
// stopPomodoroButton.addEventListener('click', pomodoroStop);
// resetPomodorotButton.addEventListener('click', pomodoroReset);

// // DOM elements for Pomodoro Settings input
// var workDurationInput = document.getElementById('workDurationInput');
// var breakDurationInput = document.getElementById('breakDurationInput');

// submitSettingsForm.addEventListener('click', function(event) {
//   event.preventDefault();
//   let workDuration = workDurationInput.value;
//   let breakDuration = breakDurationInput.value;
  
//   pomodoroTimer(workDuration, breakDuration);

//   pomodoroSettings.classList.remove('show');
// })


// //Update time
// function pomodoroTimer (workDuration, breakDuration) {
//     let pomodoroSeconds = workDuration * 60;

//     //Format time
//     let mins = Math.floor(pomodoroSeconds / 60);
//     let secs = pomodoroSeconds % 60;

//     if (mins < 10) mins = "0" + mins;
//     if (secs < 10) secs = "0" + secs;

//     pomodoroTime_el.innerText = `${mins}:${secs}`;
// }

// function pomodoroStart (workDuration) {
//     seconds = workDuration*60 || 0;
//     console.log(seconds);
//     interval = setInterval(function() {
//       seconds--;
//       if(!seconds) {
//         clearInterval(interval);
//       }
//     },1000)
//     startPomodoroButton.style.color = '#5E9797';
//     startPomodoroButton.style.cursor = 'default';
//     stopPomodoroButton.style.color = '#FCFCFC'
//     resetPomodorotButton.style.color = '#FCFCFC'
// }

// function pomodoroStop () {
//     clearInterval(interval);
//     interval = null;
//     startPomodoroButton.style.color = '#FCFCFC';
//     resetPomodorotButton.style.color = '#FCFCFC'
//     stopPomodoroButton.style.color = '#5E9797';
//     stopPomodoroButton.style.cursor = 'default';
// }

// function pomodoroReset () {
//     pomodoroStop();
//     pomodoroSeconds = 1500;
//     pomodoroTime_el.innerText = '25:00';
//     resetPomodorotButton.style.color = '#5E9797'
//     resetPomodorotButton.style.cursor = 'default';
//     startPomodoroButton.style.color = '#FCFCFC';
//     stopPomodoroButton.style.color = '#FCFCFC';
// }
