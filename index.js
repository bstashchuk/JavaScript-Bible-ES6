const myNumbers = [123, 50, 27];

/* Create a function "pushIfUnique" with two parameters "inputArray" and "newElement".

If "inputArray" already contains "newElement" print "{newElement} is already in the array" to the console.

Otherwise push "newElement" to the "inputArray". 

NOTE: We assume that "inputArray" may contain only primitive variables types
*/

pushIfUnique(myNumbers, 50); // "50 is already in the array"
console.log(myNumbers); // [123, 50, 27]

pushIfUnique(myNumbers, 80);
console.log(myNumbers); // [123, 50, 27, 80]

pushIfUnique(myNumbers, 80); // "80 is already in the array"
console.log(myNumbers); // [123, 50, 27, 80]

pushIfUnique(myNumbers, 77);
console.log(myNumbers); // [123, 50, 27, 80, 77]
