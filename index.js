/**
 * CHALLENGE 7-5: TASK
 *
 * Create new class "CustomArray" that should extend built-in "Array".
 *
 * Add one custom method "customPush" to the new class.
 * This method will have one parameter "newElement".
 *
 * It should perform following actions:
 * 1. Add new element to the existing array
 * (don't use "push" method for this)
 * 2. Modify "length" property of the array (increment it)
 * 3. Log following line to the console:
 * "New element <ELEMENT> was just added to the array"
 *
 * Create instance of the new "CustomArray" class and test new method "customPush" and compare it with "push"
 *
 * What will happen if name of the custom method in the "CustomArray" class will be also "push" instead of "customPush"?
 * Try this.
 */

class CustomArray extends Array {
  customPush(newElement) {
    console.log(`Initial length is ${this.length}`);
    this[this.length] = newElement;
    console.log(
      `Updated length of the array is ${this.length}`
    ); // length property is updated automatically

    console.log(
      `New element ${newElement} was just added to the array`
    );
  }
}

const firstInstance = new CustomArray();

firstInstance.customPush(1);

console.log(firstInstance); // [1]

firstInstance.customPush(10);

console.log(firstInstance); // [1, 10]
