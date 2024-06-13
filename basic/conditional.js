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
