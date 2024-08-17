function product(val1, val2 = 1) {
  return val1 * val2;
}
console.log(product(3, 5));
console.log(product(3));

const firstName = "John";
const lastName = "Doe";
const age = 28;
const dynamicKey = "occupation";
const dynamicValue = "Engineer";

const person = {
  firstName,
  lastName,
  age,
  [dynamicKey]: dynamicValue,
  greet() {
    console.log(`Hello, I am ${firstName} ${lastName}`);
  },
};
console.log(person);
person.greet();

const username = "vishal01";
const email = "admin@gmail.com";
const user = {
  username,
  email,
  getSummary() {
    return `Username: ${username} , Email: ${email}`;
  },
};
console.log(user);
console.log(user.getSummary());

const createBook = (title, author, year) => {
  return {
    title,
    author,
    year,
    getSummary() {
      return `${this.title} by ${this.author}, published in ${this.year}`;
    },
  };
};

const book = createBook("The Man", "Vishal Chauhan", 2015);
console.log(book);
console.log(book.getSummary());

const config = {
  host: "localhost",
  port: 8080,
  database: "test_db",
};

const { host, port, database, usernameone = "admin" } = config;

console.log(usernameone);

const key = "isEnabled";

const settings = {
  [key]: true,
  toggle() {
    this[key] = !this[key];
  },
};

console.log(settings.isEnabled);
settings.toggle();
console.log(settings.isEnabled);
settings.toggle();
console.log(settings.isEnabled);
