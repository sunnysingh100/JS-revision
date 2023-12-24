const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

// const formedArray = marvel_heroes.concat(dc_heroes);
// console.log(formedArray);

// const newFormedArray = [...marvel_heroes, ...dc_heroes];
// console.log(newFormedArray);

/*
const anotherArray = [1, 2, 3, 4, 5, [2, 3], [4, 8], 6];
const readableArray = anotherArray.flat(Infinity);
console.log(readableArray);
*/

// console.log(Array.isArray("Sunny"));
// console.log(Array.from("Sunny"));
// console.log(Array.from({name: "sunny"}));

let score1 = [100, 400, 600];
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
