// // Where to use CONST?
// // Example 1
// function multiplier(a) {
//   const MULT = 10;
//   return a * MULT;
// }

// console.log(multiplier(3));
// console.log(multiplier(5));

// // Example 2 (Execute in Node.js)
// const path = require("path");

// console.log(path.resolve());

// // Example 3
// const sum = function(a, b) {
//   return a + b;
// };

// console.log(sum(2, 5));

// // Where to use LET?
// // Example 1
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// // Example 2
// function shortStr(str) {
//   const MAX_LENGTH = 15;

//   if (str.length > MAX_LENGTH) {
//     let newStr;
//     newStr = str.substring(0, MAX_LENGTH) + "...";
//     console.log(newStr);
//   } else {
//     // console.log(newStr); // not defined
//     console.log(str);
//   }
// }

// shortStr("Long string example");
// shortStr("Short");

// // Where to use VAR?
// // Example 1
// var person = {
//   name: "Bob",
//   age: 25
// };

// function updatePerson(person) {
//   var updatedPerson = {};

//   if (person.name) {
//     updatedPerson.name = person.name;
//   }
//   updatedPerson.updatedAt = new Date();

//   return updatedPerson;
// }

// console.log(updatePerson(person));
