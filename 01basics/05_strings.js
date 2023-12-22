const name = "Sunny";
const repoCount = 50;
// console.log(name + repoCount + " singh");
console.log(`${name}${repoCount} singh`);
console.log(
  `Hello my name is ${name.toUpperCase()} and repocount is ${repoCount}`
);

const gameName = new String("sunny-hc-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   sunny    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sunny.com/hitesh%20singh";

console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"));

console.log(gameName.split("-"));
