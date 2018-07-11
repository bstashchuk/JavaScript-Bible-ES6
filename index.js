// // 1. Make code readable for other developers
// // BAD Code
// a = "Mike";
// b = "London";

// function test(x, y) {
//   d = "Hello " + x + " from " + y;
//   return d;
// }

// var a, b, d;

// console.log(test(a, b));

// // GOOD Code
// var personName = "Mike";
// var personCity = "London";

// function greet(personName, personCity) {
//   var greetPerson = "Hello " + personName + " from " + personCity;
//   return greetPerson;
// }

// console.log(greet(personName, personCity));

// // 2. Always declare variables before first usage
// // BAD Code
// a = 10;
// var a;

// // GOOD Code
// var a;
// a = 10;

// // 3. Always add "use strict" at the beginning of each JS file
// // BAD Code
// // b, d will be automatically decleared in the global scope
// b = 10;
// function fn() {
//   d = b;
//   return d;
// }
// fn();

// // GOOD Code
// "use strict";
// var b = 10;
// function fn() {
//   var d = b;
//   return d;
// }
// fn();

// // 4. Don't expose to the outer scopes locally used variables
// // Expose
// var myArray;
// var i;
// function fn2() {
//   myArray = [1, 2, 3];
//   for (i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
//   }
// }

// //Don't expose
// function fn2() {
//   var myArray = [1, 2, 3];
//   for (var i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
//   }
// }
// fn2();
