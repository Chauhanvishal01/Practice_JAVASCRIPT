const sumOfTwoNumbers = (num1, num2) => {
  return num1 + num2;
};
console.log(sumOfTwoNumbers(10, 20));

let sentence = "Hello, My name is Vishal Chauhan";
const containsChar = (str, char) => {
  return str.includes(char);
};
console.log(containsChar(sentence, "v")); //false
console.log(containsChar(sentence, "V")); //true

const product = (val1, val2 = 20) => {
  return val1 * val2;
};
console.log(product(2, 3));
console.log(product(2));

const greetPerson = (name, age = 18) => {
  return `Hello ,${name}! you are ${age} years old. Welcome to my website`;
};
console.log(greetPerson("vishal", 22));
console.log(greetPerson("chauhan"));
