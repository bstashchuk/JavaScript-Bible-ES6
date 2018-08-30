// Pre-ES6 - Template Strings
const myNumber = 10; // "10"
const myStr = "Hello";
const myArr = [1, 2]; // "1,2"
const myObj = { x: 10 }; // [object Object]
const myBool = true; // "true"
const myGreeting = name => "Hello " + name;

const templateStr =
  "Number is " +
  myNumber +
  " and string is " +
  myStr +
  " and array is " +
  myArr +
  " and object is " +
  myObj +
  " and boolean is " +
  myBool +
  " and result of the function call is " +
  myGreeting("Mike");

console.log(templateStr);

// ES6 - Template literals
const templateLiteral = `Number 
is ${myNumber} and string is ${myStr} and array is ${myArr} and object is ${myObj} and boolean is ${myBool} and result of the function call is ${(name =>
  "Hello " + name)(
  "Mike"
)} and result of the ternary operator is ${
  myBool ? 15 : "World"
}`;
console.log(templateLiteral);

const btn1 = "Button 1";
const btn2 = "Button 2";

const myButtons = `
  <div>
    <button>${btn1}</button>
    <button>${btn2}</button>
  </div>
`;

document.body.innerHTML = myButtons;
