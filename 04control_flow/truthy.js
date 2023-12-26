const useremail = [];

if (useremail) {
  console.log("Got user eamail");
} else {
  console.log("don't have user eamail");
}

// falsy values => false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value => "0", "false", " ", [], {}, function(){}

if (useremail.length === 0) {
  //   console.log("Array is empty");
}

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
  //   console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 50 ?? 10;
// val1 = null ?? 100;
// val1 = undefined ?? 3767;
val1 = null ?? 79 ?? 32;
// console.log(val1);

// Ternary operttor
// condition ? true : false

const iceTeaprice = 100;
iceTeaprice >= 80 ? console.log("value for money") : console.log("okay-okay");
