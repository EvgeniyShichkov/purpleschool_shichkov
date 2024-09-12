"use strict";

const timerPizza = (time) => {
  const date2 = new Date(0, 0, 0, 0, time.split(":")[0], time.split(":")[1]);

  const interval = setInterval((title) => {
    date2.setMilliseconds(date2.getMilliseconds() - 1000);
    console.log(`${date2.getMinutes()}:${date2.getSeconds()}`);
    if (date2.getMinutes() === 0 && date2.getSeconds() === 0) {
        clearInterval(interval);
        console.log(title);
      }
  }, 1000, 'Пицца готова');

};

// console.log(timerPizza("01:10"));
