// Create an Array:
const myArray = [1, 2, 3, 4, 5];
// Accessing Array Elements:
console.log("Third element of array : " + myArray[2]);
//Array Length:
console.log("Length of array: " + myArray.length);
// Modify Array Element:
myArray[1] = 10;
console.log("Updated array: " + myArray);
//Iterate Through Array:
for (i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
// Adding Elements:
myArray.push(6);
console.log("Add 6th element " + myArray);
// Removing Elements:
myArray.pop();
console.log("After removing the last element: " + myArray);
// Checking Array Includes:
console.log("Check the number 3 is present or not: ", myArray.includes(3));
// Concatenating Arrays:
const anotherArr = [7, 8, 9];
let newarr = myArray.concat(anotherArr);
console.log("After concatenate: ", newarr);

// Sorting an Array:
let unsortedArr = [3, 4, 2, 5, 67, 54, 98, 76, 129, 0, 1, 34];
let sortedArr = unsortedArr.sort((a, b) => a - b);
console.log("Sorted array are:" + sortedArr);

// Reversing an Array:

let reverseArr = myArray.reverse();
console.log(reverseArr);

// Slicing an Array:
let slicedArray = myArray.slice(2, 4);
console.log(slicedArray);

// Finding Maximum Element:
let maxElem = Math.max(...myArray);
console.log(maxElem);
// Finding Minimum Element:
let minElem = Math.min(...myArray);
console.log(minElem);

// Filtering an Array:
const myArrayTwo = [1, 2, 3, 4, 5];

let filteredArr = myArrayTwo.filter((val) => {
  return val % 2 === 0;
});

console.log(filteredArr);

// Mapping an Array:
let mappedArr = myArrayTwo.map((val) => val * 2);
console.log(mappedArr);

// Copying an Array:

let copiedArr = [...myArrayTwo];

copiedArr[0] = 20;

console.log("Copied Arr:", copiedArr);
console.log("Original Arr:", myArrayTwo);

// Checking Array Type:

// let isArray=Array.isArray(myArrayTwo)
// console.log(isArray);

if (Array.isArray(myArrayTwo)) {
  console.log(true);
} else {
  console.log(false);
}

let numbers = [1, 2, 3, 4, 5];

let SquareOddNum = numbers
  .filter((num) => num % 2 !== 0)
  .map((num) => num ** 2);

console.log(SquareOddNum);
