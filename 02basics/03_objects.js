// singleton
// objects.create

// object literals

const mySym = Symbol("key1");
const jsUser = {
  name: "Sunny",
  fullName: "Sunny Singh",
  [mySym]: "mykey1",
  age: 20,
  location: "Lucknow",
  email: "sunny@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturaday"],
};
// console.log(jsUser.fullName);
// console.log(jsUser["fullName"]);
// console.log(jsUser[mySym]);

// Object.freeze(jsUser);
// jsUser.email = "sunny@chat.com";
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello js user");
};

jsUser.greetingTwo = function () {
  console.log(`Hello js user ${this.name}`);
};

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
