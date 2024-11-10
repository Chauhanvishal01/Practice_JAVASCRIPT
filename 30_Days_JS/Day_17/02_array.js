/* Create an array of five different animals and print the third animal. */
const animal = ["lion", "tiger", "elephant", "giraffe", "zebra"];

console.log(animal[2]);
// Create an array of numbers [10, 20, 30]. Use the appropriate methods to:
/* Add 40 to the end.
Remove the first element.
Add 5 to the beginning. */
let numArr = [10, 20, 30];
numArr.push(40);
numArr.shift();
numArr.unshift(5);

console.log(numArr);

// #Create an array of five colors and loop through it using both a for loop and forEach method.
let colors = ["blue", "red", "green", "white", "black"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

console.log("Using For Each :-");

colors.forEach((color) => {
  console.log(color);
});

// #

let mapArr = [1, 2, 3, 4];
const res = mapArr.map((num) => {
  return num ** 2;
});
console.log(res);

let num = [1, 2, 3, 4, 5, 6];

let evenNum = num.filter((num) => num % 2 == 0);
console.log(evenNum);

let arr = [5, 10, 15];
let total = arr.reduce((acc, curr) => acc + curr, 0);
console.log(total);

// #Practice
const numFind = [10, 45, 60, 25];
let numGreater = numFind.find((age) => age > 50);
console.log(numGreater);

let sortStr = ["James", "Alice", "John"];
let resu = sortStr.sort();
console.log(resu);

