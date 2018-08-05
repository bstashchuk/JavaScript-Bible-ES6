const myArray = [1, true, "abc"];

// don't use
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// use this instead
myArray.forEach(element => console.log(element));
