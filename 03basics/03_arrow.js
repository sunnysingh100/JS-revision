/*
const user = {
  username: "sunny",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to the website`);
    console.log(this);
  },
};
*/

// user.welcomeMessage();
// user.username = "juli";
// user.welcomeMessage();
// console.log(this);

// function chai() {
//   let userName = "Sunny";
//   console.log(this.userName);
// }
// chai();

// const chai = function () {
//   let city = "delhi";
//   console.log(this.city);
// };
// chai();

const chai = () => {
  let city = "delhi";
  console.log(this.city);
};
// chai();

// explicit function
const add = (num1, num2) => {
  return num1 + num2;
};

// console.log(add(45, 39));

// implicit function
const multiply = (num1, num2) => num1 * num2;
console.log(multiply(5, 6));
