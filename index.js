/* 
1. Sorting algorithm
Insertion Sort - Google Chrome, Firefox, Node.js
Merge Sort - Safari
2. Qty of iterations
13
*/
const myNumbers = [10, 5, 79, 27, 50, 14, 27];

let i = 0;
console.log(
  myNumbers.sort((a, b) => {
    console.log(a, b);
    i++;
    return a - b;
  })
);
console.log("Qty of iterations is " + i);
