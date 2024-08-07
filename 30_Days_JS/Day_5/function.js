function EvenOrOdd(value) {
  return value % 2 === 0 ? "Even" : "Odd";
}
console.log(EvenOrOdd(2));
console.log(EvenOrOdd(3));

function calculateSquare(value) {
  return value * value;
}
console.log(calculateSquare(5));
console.log(calculateSquare(7));

function maxOfTwo(num1, num2) {
  return num1 > num2
    ? "Num 1 is greater"
    : num2 > num1
    ? "Num 2 is greater"
    : "Both are equals";
}
console.log(maxOfTwo(12, 3));
console.log(maxOfTwo(2, 2));
console.log(maxOfTwo(2, 3));

let str1="Hello"
let str2="Ram"

function concatTwoString(str1, str2) {
  return str1 +" "+str2;
}
console.log(concatTwoString('hello','vishal'));
console.log(concatTwoString(str1, str2));

