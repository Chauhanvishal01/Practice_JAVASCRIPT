let str = "Vishal";

for (const val of str) {
  console.log(val);
}

console.log(str.length);

let evenNumber = [];
let oddNumber = [];
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    evenNumber.push(i);
  } else {
    oddNumber.push(i);
  }
}
console.log(evenNumber);
console.log(oddNumber);

//game
// let randomNum = "24";
let randNum = Math.floor(Math.random() * 100);
console.log(randNum);

let userval = prompt("Guess the Number");
console.log(typeof userval);

while (randNum != userval) {
  userval = prompt("You guess wrong. Try Again!");
}

console.log("Congratulation You guess right");
