/*
Modify "personInfo" function to match console.log output at the end of the challenge.

Object that is returned by "personInfo" function must contain only shorthand property names.
*/

const personInfo = ({
  name,
  age: personAge,
  location: { country: origin, city: homeCity },
  friendsQty = 0,
  recordCreatedAt = new Date().getFullYear()
}) => {
  return {
    name,
    personAge,
    origin,
    homeCity,
    friendsQty,
    recordCreatedAt
  };
};

const person = {
  name: "Alice",
  age: 19,
  location: {
    country: "England",
    city: "London"
  }
};

console.log(personInfo(person));
/*
{
  name: "Alice",
  personAge: 19,
  origin: "England",
  homeCity: "London",
  friendsQty: 0,
  recordCreatedAt: *current year*
}
*/
