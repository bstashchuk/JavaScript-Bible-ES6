/*
Use object destructuring with rest object properties to quickly remove specific properties from the object.

Ensure that variables that will be used for destructuring of the deleted properties will not be accessible after the destructuring operation.
*/

let person = {
  _id: "5ad8cefcc0971792dacb3f1f",
  index: 4,
  processed: false,
  cart: ["item1", "item2", "item3"],
  email: "slarsen@test.com",
  name: "Samanta Larsen",
  cartId: 435
};

console.log(person);
/*
{
  index: 4,
  email: "slarsen@test.com",
  name: "Samanta Larsen",
  cartId: 435
}
*/
