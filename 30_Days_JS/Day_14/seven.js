// #20 write a recursive function to calculate the factorial of a given number

function fact(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * fact(number - 1);
  }
}

console.log(fact(5));

// #21 implement a recursive function to find the nth Fibonacci number

function fibbo(num) {
  if (num < 2) return num;
  return fibbo(num - 1) + fibbo(num - 2);
}
console.log(fibbo(6));

// #22 create a counter function using closures that increments and returns the count on each call

function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

let counter=createCounter()



console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

