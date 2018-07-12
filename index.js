numbers1 = [23, 87, 110, 11, 20, 5, 34];
numbers2 = [10, 20, 30];

var onlyOddNumbers = function(arr) {
  oddNumbers = [];
  EVEN_NUMBERS_QUANTITY = 0;
  len = arr.length;
  for (i = 0; i < len; i++) {
    arr[i] % 2
      ? oddNumbers.push(arr[i])
      : EVEN_NUMBERS_QUANTITY++;
  }
  return {
    oddNumbers: oddNumbers,
    EVEN_NUMBERS_QUANTITY: EVEN_NUMBERS_QUANTITY
  };
  var oddNumbers, EVEN_NUMBERS_QUANTITY;
};

console.log(onlyOddNumbers(numbers1));
console.log(onlyOddNumbers(numbers2));
