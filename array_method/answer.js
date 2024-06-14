// Create an array of numbers and use the push method to add a new number to the end of the array.

const arrOne = [1, 2, 3, 4, 5];
console.log("Array before :" + arrOne);
arrOne.push("6");
console.log("Array After:" + arrOne);

// Create an array of numbers and use the pop method to remove the last number from the array.

console.log("Deleted Element are: "+ arrOne.pop());
console.log("Array After deletion: "+arrOne);

// Create an array of numbers and use the shift method to remove the first number from the array.

arrOne.shift()
console.log("Array after shift: "+arrOne);

// Create an array of numbers and use the unshift method to add a new number to the beginning of the array.

arrOne.unshift("98")
console.log("Array after unshift: "+arrOne);

// Create two arrays of numbers and use the concat method to combine them into a single array.

const arrTwo=[1,2,3,-4,5,-6,0]
const arrThree=[21,43,56,67,87,98]
const arrCombine=arrTwo.concat(arrThree)

console.log("Combine Array are: "+arrCombine);

// Create an array of strings and use the join method to combine them into a single string with spaces between each word.

const strArr=["vishal","nitin","panku","are","friends"]
const resultStr=strArr.join(" ")
console.log(resultStr);

// Create an array of numbers and use the reverse method to reverse the order of the numbers.

const numbersOne=[1,2,3,4,5,6,7,8,9]

console.log("Reverse array are "+numbersOne.reverse());

// Create an array of numbers and use the sort method to sort the numbers in ascending order.

const numberTwo=[1,4,98,7,8,4,32,2,7,7,76,2,3,7,68,0,4,3,]

console.log("Sorted array are: ", numberTwo.sort((a,b)=> a- b));
