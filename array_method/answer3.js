/* Create an array of strings and use the indexOf method 
to find the index of a specific string in the array. */

const fruits = ["Apple", "abc", "Banana", "Cherry", "def", "Banana", "Date"];

const indexOfBanana = fruits.indexOf("Banana");
console.log(indexOfBanana);
const indexofSecondBanana = fruits.indexOf("Banana", 2);
console.log(indexofSecondBanana);
/* Create an array of strings and use the filter method to 
create a new array containing only the strings that have
 more than 3 characters. */

const moreThanThreeChar = fruits.filter((fruit) => fruit.length > 3);
console.log(moreThanThreeChar);

/* Create an array of numbers and use the forEach method 
to log each number to the console. */
const numbers = [1, 2, 24, 6, 8, 9];
numbers.forEach((num) => {
  console.log(num);
});

/* Create an array of numbers and use the map method to 
create a new array where each number is increased by 1. */

const increasedOne = numbers.map((num) => num + 1);

console.log(increasedOne);

/* Create an array of numbers and use the reduce method 
to find the total sum of the numbers. */

const sumOfnumbers = numbers.reduce((acc,currentvalue) => {
  return  acc + currentvalue
},0);

console.log(sumOfnumbers);

/* Create an array of numbers and use the some method to 
check if there is at least one number greater than 5. */

const hasGreaterThanFive=numbers.some(num => num > 5)

console.log(hasGreaterThanFive);