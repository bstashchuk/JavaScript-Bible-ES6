const myArray = [10, [], {}, "abc", true, 15];

const result = myArray.find(element => {
  console.log(element);
  return typeof element === "string";
});

console.log(result);
