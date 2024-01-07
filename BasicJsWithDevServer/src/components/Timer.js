// Timer of 10 sec diff

const Timer = (callback, time) => {
  let counter = 1;
  setInterval(() => {
    callback(counter++);
  }, time);
};

export default Timer;
