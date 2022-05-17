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
const time_el = document.querySelector('.time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

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
    startButton.classList.add('active');
    resetButton.classList.remove('active');
    stopButton.classList.remove('active');
}

function stop () {
    clearInterval(interval);
    interval = null;
    startButton.classList.remove('active');
    resetButton.classList.remove('active');
    stopButton.classList.add('active');
}

function reset () {
    stop();
    seconds = 0;
    time_el.innerText = '00:00:00';
    resetButton.classList.add('active');
    startButton.classList.remove('active');
    stopButton.classList.remove('active');
}
