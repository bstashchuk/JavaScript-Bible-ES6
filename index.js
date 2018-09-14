/*
Modify parameters section in the "processQuantities" function to match console.log outputs
*/

const processQuantities = (/* parameters */) => {
  console.log(minQty); // 8
  console.log(maxQty); // 29
  console.log(defaultQty); // 0
  return maxQty - minQty; // returns 21
};

const qtyRange = [8, 29];

processQuantities(qtyRange);
