"use strict";

const numbers1 = [23, 87, 110, 11, 20, 5, 34];
const numbers2 = [11, 21, 31];

const onlyOddNumbers = function(arr) {
  var oddNumbers = [];
  var evenNumbersQuantity = 0;
  const LEN = arr.length;

  for (let i = 0; i < LEN; i++) {
    arr[i] % 2
      ? oddNumbers.push(arr[i])
      : evenNumbersQuantity++;
  }

  if (evenNumbersQuantity === 0) {
    let info = "Array contains only odd numbers";
    console.log(info);
  } else {
    let info =
      "There are " + evenNumbersQuantity + " even numbers";
    console.log(info);
  }

  return {
    oddNumbers: oddNumbers,
    evenNumbersQuantity: evenNumbersQuantity
  };
};

console.log(onlyOddNumbers(numbers1));
console.log(onlyOddNumbers(numbers2));
