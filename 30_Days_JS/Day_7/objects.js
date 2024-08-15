const book = {
  title: "The Hitman",
  author: "Vishal Chauhan",
  year: 2025,
  getDetails: function () {
    return `Title ${this.title} Author: ${this.author}`;
  },
  updateyear: function (year) {
    this.year = year;
    return this;
  },
};

console.log(book.updateyear(2026));


console.log(book);

const { title, author, getDetails } = book;

console.log(`Title of  book is ${title}`);
console.log(`Author of  book is ${author}`);
console.log(book.getDetails());

console.log(getDetails.call(book));
