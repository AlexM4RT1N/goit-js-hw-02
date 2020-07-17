"use strict";

const numbers = [];
let input;
let total = 0;

do {
  input = prompt("Введите число:");

  input = input === null ? null : +input ;
  
  if (input !== input) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    numbers.push(input);
  }
} while (input !== null);

for (const item of numbers) {
  total += item;
}

alert(`Общая сумма чисел равна ${total}`);