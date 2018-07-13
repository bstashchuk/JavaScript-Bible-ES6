function fn() {
  function fn2() {
    // console.log(a); // a is not defined
    a = 10; // a is decleard, initialized and assigned here
    console.log(a); // 10
  }

  fn2();
  console.log(a); // 10
}

fn();
console.log(a); // 10 - a is decleared in the global scope
