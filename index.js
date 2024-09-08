"use strict";

const persons = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];

// 1
let mapa  = new Map([persons]); 
console.log([...mapa]) // => [{"id": 1,"name": "Вася"},{"id": 2,"name": "Петя"}]

// 2
let set = new Set(persons);
const double = [...persons].findLast((item) => set.has(item))
set.delete(double)
console.log([...set]) // new Set([{ "id": 1,"name": "Вася"},{"id": 2,"name": "Петя"])

// 2
const uniquePerson = [...new Set(persons.map(item => persons.findLast(el => item.id !== el.id)))]
console.log(uniquePerson) // => { id: 2, name: "Петя" }, { id: 1, name: "Вася" }

