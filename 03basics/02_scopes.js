// var c = 300;

let a = 500;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a);
// console.log(a);

function one() {
  const username = "sunny";

  function two() {
    const website = "youtube.com";
    // console.log(username);
  }

  //   console.log(website);
  two();
}
one();

if (true) {
  const username = "sunny";
  if (username === "sunny") {
    const name = " juli";
    // console.log(username + name);
  }
  //   console.log(name);
}
// console.log(username);

/********************* Interesting***************/

console.log(addOne(7));
function addOne(num) {
  return num + 1;
}

console.log(addTwo(6));
const addTwo = function (num) {
  return num + 2;
};
