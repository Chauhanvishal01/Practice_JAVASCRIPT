// Write a function that converts an object into an array of [key, value] pairs.

const person = {
    name: "Thakur Jii",
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
const objToArr = (obj) => {
    return Object.entries(obj)
}
console.log(objToArr(person));

// Write a function that converts an array of [key, value] pairs back into an object.

const arrToObj = (obj) => {
    return Object.fromEntries(obj);
}

console.log(arrToObj(objToArr(person)));