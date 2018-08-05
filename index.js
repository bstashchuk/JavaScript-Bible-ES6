const myNumbers = [3, 5, 7, 2];

// // for loop
// let mySquareNumbers = [];

// for (let i = 0; i < myNumbers.length; i++) {
//   mySquareNumbers.push(myNumbers[i] * myNumbers[i]);
// }

// // map()
// let mySquareNumbers = myNumbers.map(
//   element => element * element
// );

// // map() with external function
// const squareNumbers = element => element * element;
// let mySquareNumbers = myNumbers.map(squareNumbers);

// // map() with external function with index
// const squareNumbers = (element, index) => {
//   console.log(
//     "Element at the index " + index + " is " + element
//   );
//   return element * element;
// };let mySquareNumbers = myNumbers.map(squareNumbers);
//

// map() with Math.pow()
let mySquareNumbers = myNumbers.map(element =>
  Math.pow(element, 2)
);

// // map() with direct call to Math.pow()
// // "index" in Math.pow will be treated as exponent value
// let mySquareNumbers = myNumbers.map(Math.pow);

console.log(mySquareNumbers);
console.log(myNumbers);
