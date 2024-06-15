// Create an object representing a person with properties name, age, and city. Access and print each property.

const Person = {
  name: "vishal",
  age: 21,
  city: "Mandi",
};

console.log(Person);
console.log(`Person name is : ${Person.name}`);
console.log(`Person Age is: ${Person.age}`);
console.log(`Person city is: ${Person.city}`);

/* Create an object representing a car with properties brand, model, and year. 
Add a new property color to the car object and print the updated object. */

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};
car.color = "Red";
console.log(car);

// Create an object representing a book with properties title, author, and pages. Update the pages property and print the updated object.

const book = {
  title: "The new book",
  author: "Vishal",
  pages: 245,
};

book.pages = 300;

console.log(book);

// Create an object representing a student with properties firstName, lastName, and grade. Write a function that takes the student object and returns a formatted string with the student's full name and grade.

const student = {
  firstname: "Vishal",
  lastname: "chauhan",
  grade: "A",
};

function display(student) {
  return `Student name is ${student.firstname} ${student.lastname} and grade is ${student.grade}`;
}
console.log(display(student));

// Create an object representing a library with properties name, location, and an array of books. Each book should have title and author properties. Add a new book to the library and print the updated library object.

const library = {
  name: "Gyan Library",
  location: "New Delhi",
  books: [
    {
      title: "Manmade Earth",
      author: "Vishal Chauhan",
    },
    {
      title: "History of Objects",
      author: "Vishal Chauhan",
    },
  ],
};

let newbook = { title: "Future of Objects", author: "vishal" };
library.books.push(newbook);

console.log(library);

/*Create an object representing a company with properties name, address, and employees (an array of employee names). 
Write a function that takes the company object and returns the number of employees. */

const company = {
  name: "abc",
  address: "Himachal",
  employees: ["employeeOne", "employeeTwo","dash","lobo","dobo"],
};

function numberofEmployees(company) {
  return company.employees.length;
}

console.log("Number of employees: "+numberofEmployees(company));


/* Create an object representing a recipe with properties title, ingredients (an array of ingredient names), and servings. 
Add a new ingredient to the recipe and print the updated recipe object.*/


let recipe = {
    title: "Chocolate Chip Cookies",
    ingredients: ["flour", "sugar", "butter", "chocolate chips", "eggs", "vanilla extract"],
    servings: 24
};

recipe.ingredients.push("salt")

console.log(recipe);