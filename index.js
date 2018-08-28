const persons = [
  {
    name: "Andy",
    friendsQty: 10,
    index: 1
  },
  {
    name: "Mike",
    friendsQty: 5,
    index: 2
  },
  {
    name: "Sophia",
    friendsQty: 10,
    index: 3
  },
  {
    name: "Joshua",
    friendsQty: 3,
    index: 4
  },
  {
    name: "John",
    friendsQty: 10,
    index: 5
  },
  {
    name: "Gabriella",
    friendsQty: 8,
    index: 6
  },
  {
    name: "Tyler",
    friendsQty: 7,
    index: 7
  },
  {
    name: "Dylan",
    friendsQty: 2,
    index: 8
  },
  {
    name: "Sarah",
    friendsQty: 5,
    index: 9
  },
  {
    name: "Alexa",
    friendsQty: 10,
    index: 10
  },
  {
    name: "Henry",
    friendsQty: 10,
    index: 11
  },
  {
    name: "Arianna",
    friendsQty: 10,
    index: 12
  }
];

/* Create a function "sortPersonsByFriendsQty" with one parameter "persons".

This function "sortPersonsByFriendsQty" should sort input array of persons by friendsQty of each person in ascending order and return resulting array.
*/

const sortPersonsByFriendsQty = persons => {
  let it = 0;
  persons.sort((a, b) => {
    console.log(a.name, b.name);
    it++;
    return a.friendsQty - b.friendsQty;
  });
  console.log("Qty of iterations is " + it);
  return persons;
};

sortPersonsByFriendsQty(persons);
/* Which sorting algorithm is used here in Google Chrome, Firefox, Node.js? 

QuickSort - Google Chrome (Qty > 10) - 21 iterations (NOT stable)
Insertion Sort - Firefox - 31 iterations (stable)
Merge Sort - Safari - 29 iterations (stable)

Is this sorting stable or not?
*/

console.log(persons);
/* Array of persons sorted by friendsQty in ascending order 
*/
