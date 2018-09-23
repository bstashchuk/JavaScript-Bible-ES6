// // EXAMPLE 1 - declaration and assignment using array destructuring
// const myArray = [1, 2, 3];
// // let a, b, c;
// // a = myArray[0];
// // b = myArray[1];
// // c = myArray[2];

// let [a, b, c] = myArray;

// console.log(a, b, c);

// // EXAMPLE 2 - assignment using array destructuring
// const myArray = [1, 2, 3];

// let a, b, c;

// [a, b, c] = myArray;

// const anotherArray = [4, 5, 6];

// [a, b, c] = anotherArray;

// console.log(a, b, c);

// // EXAMPLE 3 - more variables than elements in the array
// const myArray = ["a"];
// const [a, b, c] = myArray;
// console.log(a, b, c);

// // EXAMPLE 4 - default values
// const myArray = ["a"];
// const [a, b, c = "c"] = myArray;
// console.log(a, b, c);

// // EXAMPLE 5 - skip element during destructuring
// const myArray = [1, 2, 3, 4, 5];
// const [, , a, , b] = myArray;
// console.log(a, b);

// // EXAMPLE 6 - rest operator in array destructuring
// const myArray = [1, 2, 3, 4, 5];
// const [a, b, ...c] = myArray; // rest operator
// console.log(a, b, c);
// const d = [...c]; // spread operator
// console.log(d);

// // EXAMPLE 7 - delete first element
// let myArray = [1, 2, 3];
// const [, ...anotherArray] = myArray;
// console.log(anotherArray);

// // EXAMPLE 8 - swap values
// let x = 5,
//   y = 10;
// [y, x] = [x, y];
// console.log(x, y);

// // EXAMPLE 9 - destructuring in the function
// const myPosts = [["Post 1", 10], ["Post 2", 20]];

// myPosts.forEach(([title, likes]) =>
//   console.log(`${title} has ${likes} likes`)
// );

// // EXAMPLE 10 - nested array destructuring
// const myArray = [1, 2, [3, 4]];
// const [a, b, [c, d]] = myArray;
// console.log(a, b, c, d);
