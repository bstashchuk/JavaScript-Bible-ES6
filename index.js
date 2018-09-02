/* Create a function "templateLiteral" with one parameter "num".

Function is expected to return template literal. Sample function calls are below.
*/

const templateLiteral = num => `Number is ${num}
This number is ${
  num >= 10 ? "greater or equal" : "less"
} than 10.
Square root of this number is ${Math.sqrt(num)}`;

// TEST 1
const myNumber = 9;
console.log(templateLiteral(myNumber));
/* 
Number is 9.
This number is less than 10.
Square root of this number is 3.
*/

// TEST 2
const myAnotherNumber = 25;
console.log(templateLiteral(myAnotherNumber));
/* 
Number is 25.
This number is greater than or equal 10.
Square root of this number is 5.
*/
