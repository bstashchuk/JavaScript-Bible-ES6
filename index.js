// /**
//  * EXAMPLE 1
//  *
//  * Class declaration and instance of the Class
//  */
// class MyClass {}

// const firstInstance = new MyClass();

// console.log(firstInstance);

// console.log(firstInstance.__proto__ === MyClass.prototype); // true

// console.log(MyClass.prototype.constructor === MyClass); // true

// console.log(
//   MyClass.prototype.__proto__ === Object.prototype
// ); // true

// /**
//  * EXAMPLE 2
//  *
//  * Hoisting (not hoisted)
//  * Class can be accessed only after its declaration in the code
//  */
// const firstInstance = new MyClass(); // Uncaught ReferenceError: MyClass is not defined

// class MyClass {}

// /**
//  * EXAMPLE 3
//  *
//  * Class Expression
//  */
// const MyClass = class {};

// const firstInstance = new MyClass();

// console.log(firstInstance);

// console.log(firstInstance.__proto__ === MyClass.prototype); // true

// /**
//  * EXAMPLE 4
//  *
//  * Constructor method in the class
//  */
// class ComputerMouse {
//   constructor(props) {
//     this.type = props.type;
//     this.color = props.color;
//     this.interface = props.interface;
//   }
// }

// const propsForWirelessMouse = {
//   type: "Wireless",
//   color: "white",
//   interface: "Bluetooth"
// };

// const wirelessMouse = new ComputerMouse(
//   propsForWirelessMouse
// );

// console.log(wirelessMouse);

// /**
//  * EXAMPLE 5
//  *
//  * Class is NOT object literal and its methods are not shorthand method names
//  */
// // INCORRECT
// class ComputerMouse {
//   title: "My Title", // Unexpected token :
//   constructor: function(props) { // Unexpected token :
//     this.type = props.type;
//     this.color = props.color;
//     this.interface = props.interface;
//   }
// }

// // CORRECT
// class ComputerMouse {
//   constructor() {}
//   method1() {}
//   method2(props) {}
// }

// /**
//  * EXAMPLE 6
//  *
//  * Default values for properties
//  */
// class ComputerMouse {
//   constructor(props) {
//     this.type = props.type || "Computer";
//     this.color = props.color;
//     this.interface =
//       props.interface !== undefined
//         ? props.interface
//         : "Not specified";
//   }
// }

// const propsForWirelessMouse = {
//   type: "Wireless",
//   color: "white",
//   interface: "Bluetooth"
// };

// const wirelessMouse = new ComputerMouse(
//   propsForWirelessMouse
// );

// const propsForGenericMouse = {
//   color: "red",
//   type: ""
// };

// const genericMouse = new ComputerMouse(
//   propsForGenericMouse
// );

// console.log(genericMouse);

// /**
//  * EXAMPLE 7
//  *
//  * Class methods
//  */
// class ComputerMouse {
//   constructor(props) {
//     this.type = props.type;
//     this.color = props.color;
//     this.interface = props.interface;
//   }

//   // , // COMMA not allowed - Uncaught SyntaxError: Unexpected token ,

//   mouseInfo() {
//     console.log(
//       `Type of the mouse is ${this.type} and color is ${
//         this.color
//       }`
//     );
//   }

//   changeMouseType(newType) {
//     this.type = newType;
//   }
// }

// const propsForWirelessMouse = {
//   type: "Wireless",
//   color: "white",
//   interface: "Bluetooth"
// };

// const wirelessMouse = new ComputerMouse(
//   propsForWirelessMouse
// );

// console.log(wirelessMouse);

// wirelessMouse.mouseInfo(); // Type of the mouse is Wireless and color is white

// wirelessMouse.changeMouseType("USB");

// console.log(wirelessMouse);

// wirelessMouse.mouseInfo(); // Type of the mouse is USB and color is white

// /**
//  * EXAMPLE 7
//  *
//  * Class extension (add new class to the prototype chain)
//  */

// class ComputerAccessories {
//   constructor(props) {
//     this.compatibility = props.compatibility || [
//       "PC",
//       "Mac"
//     ];
//   }
// }

// // class ComputerMouse extends ComputerAccessories {} // constructor of the ComputerAccessories will be called automatically

// // Default behaviour if constructor is absent
// class ComputerMouse extends ComputerAccessories {
//   constructor(...allProps) { // rest
//     console.log(allProps);
//     super(...allProps); // spread
//   }
// }

// const myMouse = new ComputerMouse({
//   compatibility: ["Mac"]
// });

// console.log(myMouse);

// /**
//  * EXAMPLE 8
//  *
//  * Set properties in different classes
//  */
// class ComputerAccessories {
//   constructor(props) {
//     this.compatibility = props.compatibility || [
//       "PC",
//       "Mac"
//     ];
//   }
// }

// // // super() MUST BE present in the constructor
// // class ComputerMouse extends ComputerAccessories {
// //   constructor(props) { // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
// //   at new ComputerMouse
// //     this.type = props.type;
// //   }
// // }

// // // super() is called withou arguments
// // class ComputerMouse extends ComputerAccessories {
// //   constructor(props) {
// //     super(); // Uncaught TypeError: Cannot read property 'compatibility' of undefined
// //     at new ComputerAccessories
// //     this.type = props.type;
// //   }
// // }

// class ComputerMouse extends ComputerAccessories {
//   constructor(props) {
//     super(props);
//     this.type = props.type;
//   }
// }

// const myMouse = new ComputerMouse({
//   compatibility: ["Mac"],
//   type: "Optical"
// });

// console.log(myMouse);

// /**
//  * EXAMPLE 9
//  */
// class ComputerAccessories {
//   constructor(props) {
//     this.compatibility = props.compatibility || [
//       "PC",
//       "Mac"
//     ];
//   }

//   compatibilityInfo() {
//     this.compatibility.forEach(el =>
//       console.log(`Accessory is compatible with ${el}`)
//     );
//   }
// }

// class ComputerMouse extends ComputerAccessories {
//   constructor(props) {
//     super(props);
//     this.type = props.type;
//   }

//   mouseInfo() {
//     console.log(`Type of the mouse is ${this.type}`);
//   }
// }

// const myMouse = new ComputerMouse({
//   compatibility: ["Mac", "Tablet"],
//   type: "Bluetooth"
// });

// console.log(myMouse);

// myMouse.compatibilityInfo();

// myMouse.mouseInfo();

// /**
//  * EXAMPLE 10
//  *
//  * typeof and instanceof in classes
//  */
// class ComputerAccessories {
//   constructor(props) {
//     this.compatibility = props.compatibility || [
//       "PC",
//       "Mac"
//     ];
//   }

//   compatibilityInfo() {
//     this.compatibility.forEach(el =>
//       console.log(`Accessory is compatible with ${el}`)
//     );
//   }
// }

// class ComputerMouse extends ComputerAccessories {
//   constructor(props) {
//     super(props);
//     this.type = props.type;
//   }

//   mouseInfo() {
//     console.log(`Type of the mouse is ${this.type}`);
//   }
// }

// const myMouse = new ComputerMouse({
//   compatibility: ["Mac", "Tablet"],
//   type: "Bluetooth"
// });

// console.log(typeof ComputerMouse); // function

// console.log(myMouse instanceof ComputerMouse); // true

// console.log(myMouse instanceof ComputerAccessories); // true

// console.log(myMouse instanceof Object); // true

// console.log(typeof ComputerMouse.prototype); // object

// console.log(typeof ComputerMouse.prototype.constructor); // function

// console.log(
//   ComputerMouse.prototype.constructor === ComputerMouse
// ); // true

// /**
//  * EXAMPLE 11
//  *
//  * Static methods
//  */

// class ComputerMouse {
//   constructor(props) {
//     this.type = props.type;
//   }

//   static ownClassMethod() {
//     console.log("This class sets props for the Mouses");
//   }

//   mouseInfo() {
//     console.log(`Type of the mouse is ${this.type}`);
//   }
// }

// const myMouse = new ComputerMouse({ type: "Gaming" });

// console.log(myMouse);

// myMouse.mouseInfo(); // Type of the mouse is Gaming

// // myMouse.ownClassMethod(); // Uncaught TypeError: myMouse.ownClassMethod is not a function

// ComputerMouse.ownClassMethod(); // This class sets props for the Mouses

// ComputerMouse.mouseInfo(); // Uncaught TypeError: ComputerMouse.mouseInfo is not a function
