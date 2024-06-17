// Write a function to find the maximum element in an array.

const arr = [1, 2, 3, 4, 56, 7, 8, 9, 8, 656, 4, 34];

function maxvalue(arr) {
  return Math.max(...arr);
}
console.log(maxvalue(arr));

// Write a function to find the minimum element in an array.

function minvalue(arr) {
  return Math.min(...arr);
}

console.log(minvalue(arr));

function findmaxValue(arr) {
  let max = arr[0];
  arr.forEach((num) => {
    if (num > max) {
      max = num;
    }
  });
  return max;
}
console.log("Max value is ", findmaxValue(arr));

// Write a function that reverses an array.

function reverseArr(arr) {
  return arr.slice().reverse();
}
// slice() is used to avoid mutating the original array

console.log(reverseArr(arr));
console.log(arr);

//using for loop

function reverseArrUsingFor(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
console.log("Reverse:" + reverseArrUsingFor(arr));

