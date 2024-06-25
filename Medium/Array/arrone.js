// Given an array of numbers, write a function that returns a new array with each number squared.
function squaredNum(arr) {
  return arr.map((num) => num * num);
}
const number = [1, 2, 3, 4, 5];
const squaredNumbsers = squaredNum(number);
console.log(squaredNumbsers);
/* // Write a function that takes an array of numbers and 
returns a new array containing only the even numbers. */

function onlyEven(arr) {
  return arr.filter((num) => num % 2 === 0);
}

const evenNumbers = onlyEven(number);
console.log(evenNumbers);

/* Use the reduce method to find the sum of
 all elements in an array of numbers. */

function sumArr(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
const totalsum = sumArr(number);
console.log(totalsum);
/* 

Write a function that takes an array of strings and 
returns a new array with the strings sorted in
    alphabetical order. */

const names = ["damu", "papu", "ramu", "kaka", "arijit"];

function sortedStr(str) {
  return str.sort();
}
const sortedArray = sortedStr(names);
console.log(sortedArray);
/* 
Given two arrays, write a function that returns a
new array that is the concatenation of the two
 input arrays. */

 function ConcatenateArr(arrone,arrtwo) {
    return arrone +" , " + arrtwo
    
 }
 const combineArr=ConcatenateArr(names,number)
 console.log(combineArr);