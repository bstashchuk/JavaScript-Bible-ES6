// // EXAMPLE 1 - Object literal
// const num = {
//   value: 100,
//   // info: () => {
//   //   console.log(this); // Window
//   //   return this.value;
//   // }
//   info: function() {
//     console.log(this); // num object
//     return this.value;
//   }
// };

// // EXAMPLE 2 - Function constructor
// function GroceryItem(title, kind) {
//   this.title = title;
//   this.kind = kind;
// }

// // // Uncaught TypeError: GroceryItem is not a constructor
// // const GroceryItem = (title, kind) => {
// //   this.title = title;
// //   this.kind = kind;
// // };

// GroceryItem.prototype.info = function() {
//   return this.title + " is " + this.kind;
// };

// // // "this" is Window and function always returns "undefined is undefined"
// // GroceryItem.prototype.info = () => {
// //   console.log(this);
// //   return this.title + " is " + this.kind;
// // };

// const apple = new GroceryItem("Apple", "fruit");
// console.log(apple);
// const brocolli = new GroceryItem("Brocolli", "vegetable");
// console.log(brocolli);
