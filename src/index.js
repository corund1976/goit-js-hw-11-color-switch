const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomColor() {
    return colors[randomIntegerFromInterval(0, colors.length)];
}

const startButton = document.querySelector('button[data-action="start"]');
const stopButton = document.querySelector('button[data-action="stop"]');

startButton.addEventListener('click', onStart);
stopButton.addEventListener('click', onStop);

let timerId = null;
let i = 0;

function onStart() {
    startButton.disabled = true;
    timerID = setInterval(() => {
        document.body.style.backgroundColor = randomColor();
    }, 1000);
}

function onStop() {
    startButton.disabled = false;
    clearInterval(timerID);
}

