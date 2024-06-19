/*Create an object representing a book with properties like title, author, and numberOfPages. 
Access and print each property. */

const book = {
  title: "JavaScript mystery",
  author: "Vishal Chauhan",
  numberOfPages: 295,
};

console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);

/*Write a function that takes an object representing a person with properties like name, age, 
and city, and prints a formatted string introducing the person. */

// function displayDetails(obj) {
//   return `Hello my name is ${obj.name}.I am ${obj.age} years old and I live in ${obj.city}`;
// }
function displayDetails(person) {
  const { name, age, city } = person;
  console.log(
    `Hello my name is ${name} .I am ${age} years old and I live in ${city}`
  );
}
const person = {
  name: "Vishal",
  age: 22,
  city: "Mandi",
};
displayDetails(person);

// Write a function that adds a new property to an existing object.

function addProperty(obj, key, value) {
  obj[key] = value;
}
addProperty(person, "pincode", 123456);
console.log(person);

// Write a function that deletes a property from an object.

function deleteproperty(obj, key) {
  delete obj[key];
}
deleteproperty(person, "name");
console.log(person);

// Write a function that checks if a property exists in an object.

function isexists(obj, key) {
  return obj.hasOwnProperty(key);
}

console.log(isexists(person, "name"));
console.log(isexists(person, "city"));

// Merge Two Objects:

const objone = {
  name: "one",
  age: 1,
  city: "NY",
  zipcode: 1234,
};
const objtwo = {
  name: "two",
  age: 2,
  city: "USA",
  zipcode: 4321,
};

const mergeobj = [objone, objtwo];

console.log(mergeobj);

// List Object Keys:

const objonekeys = Object.keys(objone);
const objtwokeys = Object.keys(objtwo);

console.log("---------------Keys------------");
console.log(objonekeys);
console.log(objtwokeys);

// List Object Values:

const objonevalue = Object.values(objone);
const objtwovalue = Object.values(objtwo);
console.log("---------------Values------------");
console.log(objonevalue);
console.log(objtwovalue);

// Copy an Object:
const copyObj = { ...objone };

copyObj.name = "nitin";

console.log("Copy object", copyObj);
console.log("Original object", objone);

// Convert Object to Array:

const objoneArr = Object.entries(objone);

console.log(objoneArr);
console.log(Array.isArray(objoneArr));
