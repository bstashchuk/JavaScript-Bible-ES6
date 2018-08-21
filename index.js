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

/* Create a function "quantityByCategories" with one parameter "products".

This function "quantityByCategories" should return an object with keys equal to categories and values equal to sum of all quantities in each category.
*/
const quantityByCategories = products =>
  products.reduce((counts, product) => {
    console.log(
      "Counts is " +
        JSON.stringify(counts) +
        " and product is " +
        JSON.stringify(product)
    );
    counts[product.category] =
      (counts[product.category] || 0) + product.quantity;
    return counts;
  }, {});

console.log(quantityByCategories(products));
/* {
  Accessories: 3,
  Phones: 1,
  Watches: 2
} */
