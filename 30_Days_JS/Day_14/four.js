//# 12 Factorial of a number

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact *= i;
    }
    return fact;
  }
}

console.log(factorial(6));

// #13 generate random number between range

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNumber(500, 1000));
console.log(randomNumber(500, 1000));
console.log(randomNumber(500, 1000));

//#14 function takes an array of numbers and resturn a new array with only even numbers

const arr1 = [1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 12];

function onlyEven(arr) {
  let newArr = [];
  arr.map((element) => (element % 2 === 0 ? newArr.push(element) : ""));

  return newArr;
}

console.log("Using Map", onlyEven(arr1));

function onlyEven(arr) {
  return arr.filter((element) => element % 2 === 0);
}

console.log("Using Filter: "+ onlyEven(arr1));
