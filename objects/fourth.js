const book = {
  title: "The Man",
  author: "Vishal Chauhan",
  publicationYear: 2025,
};
console.log(book);

const { title, author, publicationYear } = book;

console.log(author);
console.log(title);
const person = {
  name: "Vishal",
  age: 21,
  address: {
    po: "qabc",
    teh: "mandi",
    state: "HP",
    country: "India",
  },
};

console.log(person);
console.log(person.address.teh);

const { po, teh, state, country } = person.address;

console.log(po);
console.log(teh);
console.log(state);



