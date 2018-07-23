/* COMPILATION PHASE
Scopes:
Global {
  Line 2:
  const b; decleared, TDZ

  Line4:
  const sum; decleared, TDZ

  Line 16: 
  var a; decleared and initialized with "undefined"

  Line 18:
  function mult; decleared, initialized and assigned
}

sum {
 // nothing happens
}

if {
  Line 9:
  let multResult; decleared, TDZ
} else {
  Line 12:
  let sumResult; decleared, TDZ
}

mult {
  Line 18:
  var a; decleared, initialized with "undefined"

  Line 18:
  var b; decleared, initialized with "undefined"
}
*/
