let username = "vishal";
let password = "";
const person = {
  username: "vishal",
  password: "admin",
};

if (username === person.username && password === person.password) {
  console.log("User logged in");
} else {
  console.log("Wrong username or password");
}

// Write a function that takes two boolean arguments and returns true if both are true, and false otherwise.
function andOperation(val1, val2) {
  return val1 && val2;
}
console.log("And op", andOperation(false, false));

// Write a function that takes two strings and returns the first non-empty string. If both are empty, return "Both are empty".
function orOperation(str1, str2) {
  return str1 || str2 || "Both are empty";
}
console.log(orOperation("hi", ""));

// Write a function that takes a number and returns true if the number is not zero, otherwise returns false.
function notZero(num) {
  return num !== 0;
}
console.log(notZero(0)); //false
console.log(notZero(10)); //true

// Write a function that takes three boolean arguments and returns true if at least one is true, and false otherwise.
function combineOperations(a, b, c) {
  return a || b || c;
}

console.log(combineOperations(false, true, false)); //true
console.log(combineOperations(false, false, false)); //false

function checkNum(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "Zero";
}
console.log(checkNum(1));// +
console.log(checkNum(-1));// -
console.log(checkNum(0));// Zeor

function evenOrodd(num) {
    return num % 2 === 0 ? 'even':'odd'
    
}
console.log(evenOrodd(2));//even
console.log(evenOrodd(3));//odd