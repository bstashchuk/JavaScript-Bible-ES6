// 1. function declaration
function fn(a, b) {
  return a + b;
}

fn(2, 3); // 5

// 2. anonymous function expression
// 2.1 Assignment to the variable
const fn1 = function(a, b) {
  return a + b;
};

fn1(2, 3); //5

// 2.2 IIFE
(function(a, b) {
  console.log("IIFE is executed");
  return a + b;
})(2, 3);

// 2.3 Callback function
setTimeout(function(a, b) {
  console.log("Callback function is executed");
  return a + b;
}, 1000);

// 3. named function
// 3.1 Assignment to the variable
const fn2 = function sum(a, b) {
  return a + b;
};

fn1(2, 3); //5

// 3.2 IIF
(function sum(a, b) {
  console.log("IIFE is executed");
  return a + b;
})(2, 3);

// 3.3 Named callback function
setTimeout(function sum(a, b) {
  console.log("Callback function is executed");
  return a + b;
}, 1000);
