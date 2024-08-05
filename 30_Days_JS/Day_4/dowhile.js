let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

function factorial(num) {
  let result = 1;
  let counter = 1;
  do {
    result *= counter;
    counter++;
} while (counter <= num);
console.log(result);
}

factorial(5)
factorial(3)
factorial(0)