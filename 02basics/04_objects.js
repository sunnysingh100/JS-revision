// singleton object
// const tinderUser = new Object();

// non single ton object
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "sunny";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userFullName: {
      firstName: "Sunny",
      lastName: "singh",
    },
  },
};
// console.log(regularUser.fullname.userFullName.lastName);
const obj1 = {1: "a", 2: "b"};

const obj2 = {3: "c", 4: "d"};
// const obj3 = {...obj1, ...obj2};
const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLogged"));

/* +++++++++++++++++++++++++++++++++++++++++++++++++++  */
const course = {
  courseName: "JS-mastery",
  price: "999",
  courseInstructor: "Sam tu",
};

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course;
console.log(instructor);
