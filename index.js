let b = 5;

a = b;

{
  let c = a;
}

var a = 1;

var c;

// 1, 5, undefined
console.log(a, b, c);
