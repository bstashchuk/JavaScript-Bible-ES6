// /**
//  * EXAMPLE 1
//  *
//  * Each function in JS (not arrow function)
//  * has .prototype property and can be used
//  * as a constructor function.
//  *
//  * Prototype chain:
//  * CivilPlane.prototype -> Object.prototype -> null
//  */
// // Function Declaration
// // function CivilPlane() {}
// // Anonymous function Expression
// const CivilPlane = function() {};

// console.log(CivilPlane.prototype); // {constructor: ƒ}

// console.log(
//   CivilPlane.prototype.constructor === CivilPlane
// ); // true

// console.log(
//   CivilPlane.prototype.__proto__ === Object.prototype
// ); // true

// console.log(
//   CivilPlane.prototype.__proto__.__proto__ === null
// ); // true

// /**
//  * EXAMPLE 2
//  *
//  * Create new instance of the prototype
//  * using "new" syntax:
//  * 1. Function constructor is called
//  * 2. New object {} is created
//  * 3. __proto__ is added
//  * 4. New props are added (optional)
//  * 5. Object is returned by constructor function
//  */

// function CivilPlane(props) {
//   console.log(this); // {__proto__: ...}
//   console.log(this.__proto__); // CivilPlane.prototype
//   this.numberOfSeats = props.numberOfSeats;
//   console.log(this); // {numberOfSeats: ..., __proto__: ...}
// }

// const propsForSmallPlane = {
//   numberOfSeats: 4
// };

// const smallPlane = new CivilPlane(propsForSmallPlane);

// console.log(smallPlane);

// console.log(smallPlane.__proto__ === CivilPlane.prototype);

// /**
//  * EXAMPLE 3
//  *
//  * DON'T DO THIS!
//  * Method "seatsInfo" will be added to every instance
//  * of the prototype
//  */
// function CivilPlane(props) {
//   this.numberOfSeats = props.numberOfSeats;
//   this.seatsInfo = function() {
//     console.log(
//       `Number of seats in the plane is ${
//         this.numberOfSeats
//       }`
//     );
//   };
// }

// const propsForSmallPlane = {
//   numberOfSeats: 4
// };

// const smallPlane = new CivilPlane(propsForSmallPlane);

// const propsForLargePlane = {
//   numberOfSeats: 250
// };

// const largePlane = new CivilPlane(propsForLargePlane);

// /**
//  * EXAMPLE 4
//  *
//  * CORRECT - method is added to the prototype
//  */
// function CivilPlane(props) {
//   this.numberOfSeats = props.numberOfSeats;
// }

// // // Don't use arrow function here
// // CivilPlane.prototype.seatsInfo = () => {
// //   console.log(this);
// //   console.log(
// //     `Number of seats in the plane is ${this.numberOfSeats}`
// //   );
// // };

// CivilPlane.prototype.seatsInfo = function() {
//   console.log(this); // instance of the prototype
//   console.log(
//     `Number of seats in the plane is ${this.numberOfSeats}`
//   );
// };

// CivilPlane.prototype.modifySeatsNumber = function(
//   newSeatsQty
// ) {
//   this.numberOfSeats = newSeatsQty;
// };

// const propsForSmallPlane = {
//   numberOfSeats: 4
// };

// const smallPlane = new CivilPlane(propsForSmallPlane);

// const propsForLargePlane = {
//   numberOfSeats: 250
// };

// const largePlane = new CivilPlane(propsForLargePlane);

// smallPlane.seatsInfo(); // 4

// smallPlane.modifySeatsNumber(10); // modifies property of the "smallPlane"

// smallPlane.seatsInfo(); // 10
