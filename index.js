numbers1 = [23, 87, 110, 11, 20, 5, 34];
numbers2 = [11, 21, 31];

var onlyOddNumbers = function(arr) {
  oddNumbers = [];
  EVEN_NUMBERS_QUANTITY = 0;
  len = arr.length;

  for (i = 0; i < len; i++) {
    arr[i] % 2
      ? oddNumbers.push(arr[i])
      : EVEN_NUMBERS_QUANTITY++;
  }

  var info;
  if (EVEN_NUMBERS_QUANTITY === 0) {
    info = "Array contains only odd numbers";
    console.log(info);
  } else {
    info =
      "There are " +
      EVEN_NUMBERS_QUANTITY +
      " even numbers";
    console.log(info);
  }

  return {
    oddNumbers: oddNumbers,
    EVEN_NUMBERS_QUANTITY: EVEN_NUMBERS_QUANTITY
  };

  var oddNumbers;
};

var EVEN_NUMBERS_QUANTITY;

console.log(onlyOddNumbers(numbers1));
console.log(onlyOddNumbers(numbers2));
