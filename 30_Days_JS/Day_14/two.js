// #6 Leap Year

function checkLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? "Leap Year"
    : "Not  A Leap Year";
}

console.log(checkLeapYear(2024));
console.log(checkLeapYear(2023));

// #7 Find sum of all elements in an array

const arr1 = [10, 20, 30, 40, 50, 7];
let sum = 0;

arr1.forEach((val) => {
  sum += val;
  return sum;
});
console.log(sum);


// #8 object 
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
};

car.start = () => {
  console.log("Start the Engine");
};

car.start();
