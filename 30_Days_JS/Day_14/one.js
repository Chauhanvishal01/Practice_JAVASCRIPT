console.log("Hello Vishal");

//#2 Print the number from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("Using while loop");
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
console.log("Using do while loop");
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

// #3 Add two numbers
function add(val1, val2) {
  return val1 + val2;
}
console.log(`sum of two numbers are: ${add(23, 7)}`);

// #3 Area of Rectangle
const areaOfRectangle = (height, width) => {
  return height * width;
};

console.log(areaOfRectangle(20, 10));

// #4

function reversedString(str) {
  return str.split("").reverse().join("");
}

console.log(reversedString("vishal"));

//#5

function evenOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd(3));
console.log(evenOrOdd(2));

