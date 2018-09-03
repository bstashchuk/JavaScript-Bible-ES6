// Arrow function
const sumNumbers = (...nums) => {
  // console.log(nums);
  // console.log(arguments); // Error
  return nums
    .filter(num => typeof num === "number")
    .reduce((sum, num) => sum + num, 0);
};

console.log(sumNumbers("abc", 2, 3, 4));

// // Regular function
// function sumNumbers(...nums) {
//   // ARGUMENTS VARIABLE
//   // arguments.forEach(elem => console.log(elem)); // Uncaught TypeError: arguments.forEach is not a function
//   // console.log(arguments);
//   // return Array.from(arguments)
//   //   .filter(num => typeof num === "number")
//   //   .reduce((sum, num) => sum + num, 0);

//   // REST PARAMETER
//   console.log(nums);
//   return nums
//     .filter(num => typeof num === "number")
//     .reduce((sum, num) => sum + num, 0);
// }

// console.log(sumNumbers("abc", 2, 3, 4));
