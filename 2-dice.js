"use sctrict";

const diceRundom = (dice) => {
  const regExp = /[0-9]/g;
  const num = Number(dice.match(regExp).join(""));
  const throwDice = Math.round(Math.random() * num) + 1;
  return throwDice;
};


console.log(diceRundom('d4'));
console.log(diceRundom('d10'));
console.log(diceRundom('d20'));