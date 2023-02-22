// Get the HTML elements
const stopwatchText = document.querySelector(".stopwatch-text");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

// Initialize the stopwatch variables
let time = 0;
let interval;
let running = false;

// Define the functions for starting, stopping, and resetting the stopwatch
function start() {
  if (!running) {
    interval = setInterval(() => {
      time += 10;
      displayTime();
    }, 10);
    running = true;
  }
}

function stop() {
  clearInterval(interval);
  running = false;
}

function reset() {
  clearInterval(interval);
  running = false;
  time = 0;
  displayTime();
}

// Define the function to display the stopwatch time
function displayTime() {
  let minutes = Math.floor(time / 60000);
  let seconds = Math.floor((time % 60000) / 1000);
  let milliseconds = (time % 1000) / 10;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;

  stopwatchText.textContent = `${minutes}:${seconds}.${milliseconds}`;
}

// Add event listeners to the buttons
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);