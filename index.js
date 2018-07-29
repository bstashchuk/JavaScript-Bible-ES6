// regular function declaration
function sum() {
  console.log(arguments);
  console.log(typeof arguments); // object
  const argumentsArray = Array.from(arguments);
  console.log(argumentsArray);
}

// arrow function expression
const sum2 = () => {
  console.log(arguments); //ReferenceError: arguments is not defined
  console.log(typeof arguments);
  const argumentsArray = Array.from(arguments);
  console.log(argumentsArray);
};

sum(1, 2, 3, 4, 5);
sum2(1, 2, 3, 4, 5);
