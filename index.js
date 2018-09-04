// EXAMPLE 1 - function call
const myGreeting = (name, city, age) => {
  return `Hello from ${name} who is ${age} years old and lives in ${city}`;
};

const myPerson = ["Alice", "Boston", 20];
console.log(myGreeting(...myPerson));

const anotherPerson = ["New York", 25];
console.log(myGreeting("Bob", ...anotherPerson));

// // EXAMPLE 2 - concatenate arrays
// const a = [1, 2, 3];
// const b = [4, 5];

// const c = a.concat(b).concat(6);
// console.log(c);

// const d = [...a, ...b, 6];
// console.log(d);

// // EXAMPLE 3 - create date
// const dateInfo = [2025, 0, 10];

// const date = new Date(...dateInfo);
// console.log(date);

// // EXAMPLE 4 - copy array
// const myArray = ["a", 5, [], true];

// const newArray = [...myArray];
// newArray.push(10); // myArray is not mutated
// newArray[2].push(7); // myArray is mutated
// console.log(newArray);

// // EXAMPLE 5 - copy object (ES2018)
// const myObject = { a: 10, b: "c", d: [1, 2] };

// const copiedObject = { ...myObject };
// copiedObject.a = 20; // myObject is not mutated
// copiedObject.d.pop(); // myObject is mutated
// console.log(copiedObject);
// console.log(myObject);

// // EXAMPLE 6 - spread string

// const myStr = "Hello World";

// const letters = [...myStr];
// console.log(letters);

// const oldStyleLetters = myStr.split("");
// console.log(oldStyleLetters);
