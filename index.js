const myCities = ["London", "New York", "Singapore"];

/* Create a function called "arrayInfo" that will return string like 
"London is located at the index 0 in the myCities array" */
const arrayInfo = (element, index) =>
  element +
  " is located at the index " +
  index +
  " in the myCities array";

/* Iterate over the "myCities" array, call "arrayInfo" function for each of the elements and print result of the call to the console */

// Option 1: "for"
for (let i = 0; i < myCities.length; i++) {
  console.log(arrayInfo(myCities[i], i));
}

console.log("_____");

// Option 2: "forEach"
myCities.forEach((element, index) =>
  console.log(arrayInfo(element, index))
);
