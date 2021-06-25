const refs = {
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
  body: document.body,
};
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const TIME = 1000;
let timerId = null;
refs.start.addEventListener("click", onStartClick);
refs.stop.addEventListener("click", onStopClick);

function onStartClick() {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, TIME);

  refs.start.setAttribute("disabled", true);
}

function onStopClick() {
  refs.start.removeAttribute("disabled");
  clearInterval(timerId);
}
