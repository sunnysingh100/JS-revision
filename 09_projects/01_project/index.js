/* ************************* one way  ********************** */

// const start = document.getElementById("start");
// const stop = document.getElementById("stop");
// const mainBody = document.querySelector("body");
// let startInterval;
// function generateRandomColor() {
//   // Generate random values for red, green, and blue components

//   const randomRed = Math.floor(Math.random() * 256);
//   const randomGreen = Math.floor(Math.random() * 256);
//   const randomBlue = Math.floor(Math.random() * 256);

//   // Create a CSS color string

//   const randomColor = `rgb(${randomRed},${randomGreen},${randomBlue})`;
//   mainBody.style.backgroundColor = randomColor;
//   console.log(randomColor);
// }

// start.addEventListener("click", function () {
//   startInterval = setInterval(generateRandomColor, 1000);
// });

// stop.addEventListener("click", function () {
//   clearInterval(startInterval);
// });

/* ************************* Second way  ********************** */

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const mainBody = document.querySelector("body");

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(randomColor());
