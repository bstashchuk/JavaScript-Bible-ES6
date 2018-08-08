const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(a === b); // false

/* Create a function "arraysAreEqual" with two parameters "arrayOne" and "arrayTwo". 

If two arrays are equal (have same quantity of the elements and all elements match e.g. arrayOne[0] === arrayTwo[0] etc.) return "true".

Otherwise return "false". */

const c = [2, 1, 3];
const d = [1, 2, 3, 4];

console.log(arraysAreEqual(a, b)); // true
console.log(arraysAreEqual(a, c)); // false
console.log(arraysAreEqual(a, d)); // false
