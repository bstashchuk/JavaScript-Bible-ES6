// // EXAMPLE 1 - sum numbers
// const myNumbers = [5, 10, 3, 15];

// const sum = arrayOfNumbers =>
//   arrayOfNumbers.reduce((accumulator, number) => {
//     console.log(
//       "Accumulator is " +
//         accumulator +
//         " and number is " +
//         number
//     );
//     return accumulator + number;
//   }, 0);

// console.log(sum(myNumbers));

// // EXAMPLE 2 - reduce array of objects to single array

// const persons = [
//   {
//     name: "Veronica",
//     age: 25
//   },
//   {
//     name: "John",
//     age: 21
//   },
//   {
//     name: "Mike",
//     age: 27
//   }
// ];

// const personsNames = arrayOfPersons =>
//   arrayOfPersons.reduce((names, person) => {
//     // console.log(names, person);
//     names.push(person.name);
//     return names;
//   }, []);

// console.log(personsNames(persons));

// // EXAMPLE 3 - remove duplicates
// const fruits = [
//   "banana",
//   "orange",
//   "apple",
//   "apple",
//   "orange",
//   "mango"
// ];

// const uniqueFruits = arrayOfFruits =>
//   arrayOfFruits.reduce((uniqueElements, fruit) => {
//     if (!uniqueElements.includes(fruit))
//       uniqueElements.push(fruit);
//     return uniqueElements;
//   }, []);

// console.log(uniqueFruits(fruits));
