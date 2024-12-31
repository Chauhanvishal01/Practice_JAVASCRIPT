/* let [first, second] = ["red", "green", "blue"];
console.log(first);
console.log(second);
 */
let arr = ["red", "green", "blue"];

let [first, second] = arr;
console.log(first);
console.log(second);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// let combined = arr1.concat(arr2);
// let combined = arr1.join();
let combined = [...arr1, ...arr2];

console.log(combined);

let charArray = Array.from("Vishal");
console.log(charArray);

console.log(Array.isArray(charArray)); //true
console.log(Array.isArray("true")); //false

let elem = ["a", "b", "c", "d"];
let [firstElem, secondElem] = elem;
console.log(firstElem);
console.log(secondElem);

console.log(Array.from("JavaScript"));

numbers = [40, 100, 1, 5, 25];

numbers.reverse();
console.log(numbers);
numbers.sort((a, b) => a - b);
arr.sort();
console.log(arr);

console.log(numbers);

let isFive = numbers.includes(5);
console.log(isFive);

function reverseArr(arr) {
  return arr.reverse();
}
console.log(reverseArr(numbers));
console.log(reverseArr(elem));

function allNum(arr) {
  return arr.every((val) => val >= 0);
}
let num1 = [1, 2, 3, 4, true, "chauhan"];
let num2 = ["1", "2", "3"];
console.log(allNum(elem)); //false
console.log(allNum(numbers)); //true
console.log(allNum(num1)); //false
console.log(allNum(num2)); //true

let res = num2.map((val) => val * 2);
console.log(res);

console.log(typeof num2);
console.log("-------------------------");

let num3 = [1, 2, 3, 4, 2, 5, 3, 5];

let others = [];
let duplicate = [];
for (let i = 0; i < num3.length; i++) {
  //   console.log(num3[i]);

  if (others.includes(num3[i])) {
    duplicate.push(num3[i]);
  } else {
    others.push(num3[i]);
  }
}

console.log(duplicate);
console.log(others);

console.log("-------------------------");
let arr4 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr4.length; i++) {
  
  console.log(arr4[i+2]);
  
}
