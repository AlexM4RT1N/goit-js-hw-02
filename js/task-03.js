"use strict";

const findLongestWord = function(string) {
  const array = string.split(' ');
  let bigWord = array[0];
  for (const item of array) {
    bigWord = (item.length > bigWord.length) ? item : bigWord;
  }
  return bigWord;
};


console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));