// // What is const?

// // WRONG
// // const - constant - value that doesn't change

// // CORRECT
// // const - variable that can't be reassigned
// const myConst = []; // reference type
// myConst.push("newElement");
// myConst.push("anotherElement");
// // myConst = [1, 2, 3];

// const anotherConst = {}; // reference type
// anotherConst.a = 10;
// // anotherConst = {
// //   b: 20
// // };

// const primitiveTypeConst = null; // primitive type
// // primitiveTypeConst = undefined;

// const PI = Math.PI;

// // Scope
// const a = 10;
// console.log(a);

// function fn() {
//   console.log(a);
//   const b = true;
//   console.log(b);
// }

// fn();

// // console.log(b);
// {
//   const b1 = 1;
// }

// for (let j = 0; j < 5; j++) {
//   console.log(j);
// }

// // Reassignment
// const c = 1;
// // c = 2; // not possible with const

// function fn2() {
//   // c = 3; // not possible with const
// }

// fn2();

// // Redeclaration
// const d = false;
// // const d = true;
// console.log(d);

// function fn3() {
//   const d = 5;
//   console.log(d);
// }

// fn3();

// {
//   const d = "abc";
//   console.log(d);
// }

// console.log(d);

// // Hoisting
// const e = 5;

// function fn4() {
//   const f = 10;
//   console.log(f);
// }

// fn4();
