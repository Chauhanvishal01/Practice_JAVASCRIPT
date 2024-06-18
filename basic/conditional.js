// // Write a function that checks if a number is positive, negative, or zero and prints the result.

function checknum(val) {
  if (val > 0) {
    console.log("Number is Positive");
  } else if (val < 0) {
    console.log("Number is Negative");
  } else {
    console.log("Number is zero");
  }
}

checknum(10);
checknum(-10);
checknum(0);

//  Write a function that checks if a number is even or odd.

function isEven(val) {
  if (val % 2 == 0) {
    console.log("Number is Even");
  } else {
    console.log("Number is odd");
  }
}

isEven(4);
isEven(3);
isEven(40);

// Write a function that finds the largest of three numbers.

function largestOfThree(first, second, third) {
  if (first > second && first > third) {
    console.log("First is the largest");
  } else if (second > first && second > third) {
    console.log("Second is the largest");
  } else if (third > first && third > second) {
    console.log("Third is the largest");
  } else {
    console.log("All three are equals");
  }
}

largestOfThree(1, 2, 3);
largestOfThree(20, 3, 4);
largestOfThree(3, 34, 4);
largestOfThree(2, 2, 2);

/* Write a function that prints "Fizz" for multiples of 3, "Buzz" for multiples of 5, 
and "FizzBuzz" for multiples of both 3 and 5 for numbers from 1 to 50. */

function FizzBuzz() {
  for (let i = 0; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
FizzBuzz();

//Store Those elements to  array
let multiplyWithThree = [];
let multiplyWithFive = [];
let multiplyWithBoth = [];
let restElements = [];

function FizzBuzzTwo() {
  for (let i = 0; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      multiplyWithBoth.push(i);
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      multiplyWithThree.push(i);
      console.log("Fizz");
    } else if (i % 5 === 0) {
      multiplyWithFive.push(i);
      console.log("Buzz");
    } else {
      restElements.push(i);
      console.log(i);
    }
  }
}
FizzBuzzTwo();

console.log("Elements multiply with both: " + multiplyWithBoth);
console.log("Elements multiply with Three: " + multiplyWithThree);
console.log("Elements multiply with Five: " + multiplyWithFive);
console.log("rest Elements: " + restElements);

// Write a function that checks if a string is a palindrome.

function ispalindrome(str) {
  let lowercasevalue = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversedString = lowercasevalue.split("").reverse().join("");

  return lowercasevalue === reversedString;
}

console.log(ispalindrome("Racecar"));
