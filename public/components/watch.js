// Code adapted from https://www.w3schools.com/howto/howto_js_draggable.asp
// Make the watch draggable:
dragElement(document.getElementById("watch"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  let draggableWatch = document.getElementById("watch");
  draggableWatch.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//Stopwatch

//Global Variables
// const watch = document.getElementById('watch');
const activateWatchButton = document.getElementById('watch-feature');
const activateStopWatchButton = document.getElementById('stopwatch');
const activatePomodoroButton = document.getElementById('pomodoro');
const closeWatchButton = document.getElementById('close-watch');
const time_el = document.querySelector('.time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// Watch opening event listener
activateWatchButton.addEventListener('click', () => {
  document.getElementById('watch').style.display='block';
  activateWatchButton.style.color = '#FCFCFC';
  activateWatchButton.style.backgroundColor = '#4D7A7A';
  activateStopWatchButton.style.color = '#4d7a7a';
  activateStopWatchButton.style.backgroundColor = '#FCFCFC';
  activatePomodoroButton.style.color = '#FCFCFC';
  activatePomodoroButton.style.backgroundColor = '#4d7a7a';
  
})

// Stopwatch Toggle opening event listener
activateStopWatchButton.addEventListener('click', () => {
  document.getElementById('stopwatch-feature').style.display='block';
  document.getElementById('pomodoro-feature').style.display='none';
  activateStopWatchButton.style.color = '#4d7a7a';
  activateStopWatchButton.style.backgroundColor = '#FCFCFC';
  activatePomodoroButton.style.color = '#FCFCFC';
  activatePomodoroButton.style.backgroundColor = '#4d7a7a';
})

// Pomodoro Toggle opening event listener
activatePomodoroButton.addEventListener('click', () => {
  document.getElementById('pomodoro-feature').style.display='block';
  document.getElementById('stopwatch-feature').style.display='none';
  activatePomodoroButton.style.color = '#4d7a7a';
  activatePomodoroButton.style.backgroundColor = '#FCFCFC';
  activateStopWatchButton.style.color = '#FCFCFC';
  activateStopWatchButton.style.backgroundColor = '#4d7a7a';
})

// Close Watch Modal
closeWatchButton.addEventListener('click', () => {
  document.getElementById('watch').style.display='none';
  activateWatchButton.style.color = '#4D7A7A';
  activateWatchButton.style.backgroundColor = '#FCFCFC';
})

let seconds = 0;
let interval = null;

//Stopwatch Event Listerners
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);


//Update time
function timer () {
    seconds++;

    //Format time
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;

    if (hrs < 10) hrs = "0" + hrs;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;

    time_el.innerText = `${hrs}:${mins}:${secs}`;
}

function start () {
    if(interval) {
        return
    }
    interval = setInterval(timer, 1000);
    startButton.style.color = '#5E9797';
    resetButton.style.color = '#FCFCFC'
    stopButton.style.color = '#FCFCFC'
}

function stop () {
    clearInterval(interval);
    interval = null;
    startButton.style.color = '#FCFCFC';
    resetButton.style.color = '#FCFCFC'
    stopButton.style.color = '#5E9797';
}

function reset () {
    stop();
    seconds = 0;
    time_el.innerText = '00:00:00';
    resetButton.style.color = '#5E9797'
    startButton.style.color = '#FCFCFC';
    stopButton.style.color = '#FCFCFC';
}
