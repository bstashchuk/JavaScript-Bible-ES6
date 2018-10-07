const Parent = {
  type: "Parent",
  typeInfo() {
    console.log(`Hello from ${this.type}`);
  },
  modifyType(newType) {
    this.type = newType;
  }
};

console.log(Parent.type); // "Parent"
Parent.typeInfo(); // "Hello from Parent"

console.log(Parent.prototype); // undefined

const child = Object.create(Parent);

console.log(child.__proto__ === Parent); // true

child.type = "Child"; // Create "type" property for "child" object

child.typeInfo(); // "Hello from Child"

child.modifyType("Modified Child");

console.log(child.type); // "Modified Child"

child.typeInfo(); // "Hello from Modified Child"
