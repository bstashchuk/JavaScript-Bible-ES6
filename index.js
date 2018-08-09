const myArray = [
  10,
  "abc",
  true,
  undefined,
  null,
  [1, 2],
  {}
];

console.log(true, myArray.includes(true));
console.log(10, myArray.includes(10));
console.log("abc", myArray.includes("abc"));

console.log(
  "abc",
  "starting from index 3",
  myArray.includes("abc", 3)
);

console.log("null", myArray.includes(null));
console.log("undefined", myArray.includes(undefined));
console.log("[1, 2]", myArray.includes([1, 2]));
console.log("{}", myArray.includes({}));
