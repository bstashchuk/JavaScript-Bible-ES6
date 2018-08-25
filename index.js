const products = [
  {
    title: "Phone case",
    price: 23,
    quantity: 2,
    category: "Accessories"
  },
  {
    title: "Android phone",
    price: 150,
    quantity: 1,
    category: "Phones"
  },
  {
    title: "Headphones",
    price: 78,
    quantity: 1,
    category: "Accessories"
  },
  {
    title: "Sport Watch",
    price: 55,
    quantity: 2,
    category: "Watches"
  }
];

/* Create a function "sortProductsByPrice" with one parameter "products".

This function "sortProductsByPrice" should sort input array of products by price of each product in ascending order and return resulting array.

*/

sortProductsByPrice(products);
/* Which sorting algorithm is used here in Google Chrome, Firefox? */

console.log(products);
/* Array of products sorted by price in ascending order 
Why original "products" array was mutated?
*/
