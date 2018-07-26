// anonymous function expression
function (a, b) {
  return a + b;
}

// anonymous arrow function expression
// implicit return of a + b
(a, b) => a + b
// explicit return of a + b
(a, b) => {
  return a + b;
}
// omit () with one parameter
a => a * a
// () are mandatory without any parameters
() => 2
// explicit return of the object
(a, b) => {
  return {
    a1: a,
    b1: b
  }
}
// implicit return of the object
(a, b) => ({
  a1: a,
  b1: b
})
