/* Create an array of numbers and use the find 
method to get the first number that is greater than 10.
 */
let numbers = [19, 2, 3, 5, 67, 78, 9, 0, 10, 12, 34, 13];

const firstgreaterThanTen = numbers.find((number) => number > 10);

console.log(firstgreaterThanTen);
/* 
Create an array of numbers and use the findIndex method 
to find the index of the first number that is even.
 */

const firstEvenNumber = numbers.findIndex((number) => number % 2 == 0);

console.log("Index :" + firstEvenNumber);

/* Create an array of numbers and use the slice method to 
get the first 3 numbers from the array. */

const firstThree = numbers.slice(0, 3);
console.log(firstThree);

/* Create an array of numbers and use the splice method to 
remove the second element from the array.
 */

console.log("Before splice " + numbers);
const removeSecondElement = numbers.splice(1, 1);
console.log("After splice " + numbers);
console.log(removeSecondElement);

/* Create an array of numbers and use the includes method
 to check if the array contains the number 5. */

 const hasFive=numbers.includes(5)
 console.log(hasFive);