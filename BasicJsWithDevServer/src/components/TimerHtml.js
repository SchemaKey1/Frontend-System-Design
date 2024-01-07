import Timer from "./Timer";

const TimerCallback = (element) => (time) => {
  element.innerHTML = time;
};

const TimerHtml = () => {
  const divEl = document.createElement("div");
  const timerEl1 = document.createElement("span");
  const timerEl2 = document.createElement("span");
  divEl.appendChild(timerEl1);
  divEl.appendChild(timerEl2);
  Timer(TimerCallback(timerEl1), 1000);
  Timer(TimerCallback(timerEl2), 2000);
  return divEl;
};

export default TimerHtml;
