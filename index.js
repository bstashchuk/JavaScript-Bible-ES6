/**
 * CHALLENGE 7-3: SOLUTION
 *
 * Convert all function constructors to ES6 Classes keeping same functionality
 */

class Product {
  constructor({ price }) {
    this.price = price;
  }

  priceInfo() {
    console.log(`Price of the product is ${this.price}`);
  }
}

class ElectricDevice extends Product {
  constructor(props) {
    super(props);
    this.energyEfficiencyClass =
      props.energyEfficiencyClass;
  }

  energyInfo() {
    console.log(
      `Energy Efficiency Class is ${
        this.energyEfficiencyClass
      }`
    );
  }
}

class TV extends ElectricDevice {
  constructor(props) {
    super(props);
    this.model = props.model;
    this.diagonal = props.diagonal;
  }
}

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
