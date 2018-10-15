/**
 * CHALLENGE 7-4: TASK
 *
 * Create new class "ExtendedArray" that should extend built-in "Array".
 *
 * Add two custom methods to the new class:
 * 1. "sum" - it should return sum of all elements in the array
 * 2. "onlyNumbers" - it should return new array that will contain only numbers from the source array
 *
 * Create several instances of the new "ExtendedArray" class and test both methods "sum" and "onlyNumbers"
 */

class ExtendedArray extends Array {
  sum() {
    return this.reduce((sum, el) => sum + el);
  }

  onlyNumbers() {
    return this.filter(el => typeof el === "number");
  }
}

const firstInstance = new ExtendedArray(2, 3, 6, 10);

console.log(firstInstance.sum());
console.log(firstInstance.onlyNumbers()); // [2, 3, 6, 10]

firstInstance.push("abc");

console.log(firstInstance); // [2, 3, 6, 10, "abc"]

console.log(firstInstance instanceof ExtendedArray); // true

console.log(firstInstance instanceof Array); // true

console.log(firstInstance instanceof Object); // true

console.log(
  firstInstance.__proto__ === ExtendedArray.prototype
); // true

const secondInstance = new ExtendedArray(
  true,
  "",
  null,
  2,
  10,
  false,
  "abc"
);

const filteredArray = secondInstance.onlyNumbers();

console.log(filteredArray); // [2, 10] - still instanceof ExtendedArray
