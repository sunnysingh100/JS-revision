function sayMyName() {
  console.log("S");
  console.log("U");
  console.log("N");
  console.log("N");
  console.log("y");
}
// sayMyName();

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const result = addTwoNumbers(4, 8);
// console.log("Result: ", result);

/*
function loginUserMessage(username) {
  if (!username) {
    console.log("please enter your name ");
    return;
  }
  return `${username} just logged in`;
}
*/

function loginUserMessage(username = "sam") {
  return `${username} just logged in`;
}
// console.log(loginUserMessage("sunny"));

function calculatePrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculatePrice(200, 500, 700, 100, 600));

const user = {
  userName: "sunny",
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `my name is ${anyObject.userName} and price is ${anyObject.price}`
  );
}
// handleObject(user);
handleObject({
  userName: "ali",
  price: 599,
});

const myNewArray = [200, 654, 400, 707];

function returnSecondValue(getArray) {
  return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 654, 400, 707]));
