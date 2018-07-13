// Function declaration

console.log(smile); // function contents in the string format
smile(); // declared, initialized and assigned

function smile() {
  console.log("☺");
}

smile(); // success

// IIFE - Immediately Invoked Function Expression
(function() {
  console.log("That's function expression");
})();

// Function Expression assigned to the variable
// console.log(sum(5, 10)); // TDZ
const sum = function(a, b) {
  return a + b;
};
console.log(sum(5, 10)); // success
