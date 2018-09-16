// // Object literal
// let myObject = {
//   prop1: 10,
//   prop2: "String",
//   prop3: function() {
//     console.log(this.prop1, this.prop2);
//   }
// };

// // Enhanced object literals
// // EXAMPLE 1 - shorthand property names
// const num = 10;
// const str = "Hello world";
// const bool = true;

// const myObject = {
//   num,
//   str,
//   bool
//   // missingVar // Uncaught ReferenceError: missingVar is not defined
// };

// // EXAMPLE 2 - shorthand method names
// const myCar = (make, year) => {
//   return {
//     make,
//     year,
//     info(price) {
//       return `${this.make} costs ${price}$`;
//     }
//   };
// };

// const newCar = myCar("Tesla", 2020);
// console.log(newCar.info(50000));

// // EXAMPLE 3 - computed propery names
// const BG_COLOR_PROP = "backgroundColor";

// const btn = {
//   title: "Button 1",
//   [BG_COLOR_PROP]: "blue"
// };

// const list = {
//   options: ["Option 1", "Option 2"],
//   [BG_COLOR_PROP]: "grey"
// };

// console.log(btn);
// console.log(list);
