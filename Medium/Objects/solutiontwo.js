// Write a function that takes an object and returns an array of its keys.
const person = {
  name: "vishal",
  age: 21,
  city: "mandi",
  state: "HP",
  country: "India",
};

const keys = (obj) => {
  const arrkey = Object.keys(obj);
  return arrkey;
};

console.log(keys(person));

// Write a function that takes an object and returns an array of its values.
const values = (obj) => {
  const arrvalues = Object.values(obj);
  return arrvalues;
};

console.log(values(person));

// Write a function that takes two objects and returns a new object that combines the properties of both.

const persontwo = {
  naam: "nitin",
  umar: 23,
  shar: "solan",
  jila: "HP",
  country: "India",
};
const combineObj = (obj1, obj2) => {
  const newObj = { ...obj1, ...obj2 };
  return newObj;
};
console.log(combineObj(person, persontwo));

// Write a function that clones an object.

const cloneObj = (obj) => {
  return { ...obj };
};

console.log("clone ", cloneObj(persontwo));

// Write a function that returns the number of properties in an object.

const numOfProperties = (obj) => {
  return Object.keys(obj).length;
};
console.log(numOfProperties(persontwo));

// Write a function that iterates over all properties of an object and logs the key-value pairs.

const personthree = {
  name: "Bla bla",
  age: 30,
  isEmployed: true,
  address: {
    street: "123 Main St",
    city: "Anytown",
    pincode: "12345",
  },
  greet: function () {
    console.log("Hello, " + this.name);
  },
};
personthree.greet();
const keyvaluepair = (obj) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
};
keyvaluepair(personthree);
