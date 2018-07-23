/* EXECUTION PHASE
Line 1: 
Global scope variable "a" becomes assigned.
Value of the "a" is 2.

Line 2:
Global scope const "b" becomes initialized and assigned.
Value of the "b" is 5.

Line 4: 
Global scope const "sum" becomes initialized and assigned.
Value of the "sum" is "function(a, b) {
  return a + b;
};".
sum {
  Line 4:
  var a; decleared, initialized with "undefined"
  var b; decleared, initialized with "undefined"
}

Line 8:
"b" is already assigned and has value 5
"a" is already assigned and has value 2
(b > a) -> true
{
  Line 9:

  Safe to call mult function (assigned in the global scope). "a" and "b" are assigned and have values 2 and 5.
  mult(2, 5);

  Line 18: (mult function execution)
    Function scope:
      a = 2; becomes assigned
      b = 5; becomes assigned

    Line 21:
    var result; decleared and initialized with "undefined"

    Line 19:
    2 * 5 -> "result" becomes assigned and get value 10

    Line 20:
    10 is returned
    *MULT FUNCTION CALL ENDS HERE*

  Block scope let variable "multResult" becomes initialized and assigned.
  "multResult" value is 10

  Line 10:
  Global Scope {
    var finalResult = 10;  decleared, initialized and assigned.
  }
}

Line 24:
"finalResult" is found in the global scope and it's value is 10

console.log(finalResult); -> 10 is printed

...
*/
