const book = {
  title: "The Hitman",
  author: "Vishal Chauhan",
  year: 2025,
  getDetails: function () {
    return `Title ${this.title} Author: ${this.author}`;
  },
};

for (const key in book) {
  console.log(`keys are ${key} and values are ${book[key]}`);
}

console.log("Keys are:"+Object.keys(book));
console.log("Values Are:",Object.values(book));
