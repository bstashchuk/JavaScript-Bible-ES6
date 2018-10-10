/**
 * CHALLENGE 7-3: TASK
 *
 * Convert all function constructors to ES6 Classes
 * keeping same functionality
 */

function Product(props) {
  this.price = props.price;
}

Product.prototype.priceInfo = function() {
  console.log(`Price of the product is ${this.price}`);
};

function ElectricDevice(props) {
  Product.call(this, props);
  this.energyEfficiencyClass = props.energyEfficiencyClass;
}

ElectricDevice.prototype = Object.create(Product.prototype);

ElectricDevice.prototype.constructor = ElectricDevice;

ElectricDevice.prototype.energyInfo = function() {
  console.log(
    `Energy Efficiency Class is ${
      this.energyEfficiencyClass
    }`
  );
};

function TV(props) {
  ElectricDevice.call(this, props);
  this.model = props.model;
  this.diagonal = props.diagonal;
}

TV.prototype = Object.create(ElectricDevice.prototype);

TV.prototype.constructor = TV;

const propsForMyTv = {
  model: "A1620",
  price: 1200,
  energyEfficiencyClass: "A+",
  diagonal: 42
};

const myTV = new TV(propsForMyTv);

/**
 * VERIFICATION
 */
console.log(myTV);
/* {
  model: "A1620",
  price: 1200,
  energyEfficiencyClass: "A+",
  diagonal: 42,
  __proto__: ...
} */

myTV.energyInfo(); // "Energy Efficiency Class is A+"

myTV.priceInfo(); // Price of the product is 1200

myTV instanceof TV; // true
myTV instanceof ElectricDevice; // true
myTV instanceof Product; // true
myTV instanceof Object; // true
