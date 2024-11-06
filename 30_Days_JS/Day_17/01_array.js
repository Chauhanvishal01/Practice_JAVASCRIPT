let matrix = [
  [1, 2],
  [3, 4],
];
console.log(matrix[1][1]);

let arr = [1, [2, [3, 4]], 5];
let res = arr.flat(Infinity);
console.log(res);

let num = [1, 2, 3, 4, 5];
let reverseArr = num.reverse();
console.log(reverseArr);
/* Reverse an Array: Write a function to reverse an array [1, 2, 3, 4, 5] → [5, 4, 3, 2, 1].

Array Flattening: Given a nested array, flatten it: [1, [2, [3, 4]], 5] → [1, 2, 3, 4, 5].

Find Duplicates: Write a function to find duplicate elements in an array [1, 2, 3, 4, 2, 5, 3] → [2, 3].

Rotate an Array: Rotate the elements of an array by n positions. For example, [1, 2, 3, 4, 5] rotated by 2 positions would become [4, 5, 1, 2, 3]. */

let colors = ["red", "green", "blue", "white"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

let number = [1, 2, 3, 4];
let doubled = number.map((val) => val * 2);
console.log(doubled);

let odd = number.filter((val) => val % 2 !== 0);
console.log(odd);

let sum = number.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

let find = number.find((val) => val > 2);
console.log(find);

let hasEven = number.some((val) => val % 2 === 0);
console.log(hasEven);

let allEven = number.every((n) => n % 2 === 0);
console.log(allEven);

let arrNum = [3, 7, 8, 12, 15, 21, 24, 27];
let onlyDivisbileByThree = arrNum.filter((num) => num % 3 === 0);
console.log(onlyDivisbileByThree);

let squaredNumber = arrNum.map((val) => val ** 2);
console.log(squaredNumber);

let totalSum = arrNum.reduce((acc, curr) => acc + curr, 0);

console.log(totalSum);

let numb = [1, 2, 3, 4, 5];
 numb.splice(1, 1, 12);
console.log(numb);

