const name = "Sophia";
const age = 15;

const checkAge = (arrayOfStrings, name, age) => {
  console.log(arrayOfStrings, name, age);
  return age >= 18
    ? `${name} is adult`
    : `${name} is underage`;
};

console.log(checkAge`${name} is ${age} years old`);
