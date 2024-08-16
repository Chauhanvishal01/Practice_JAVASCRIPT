const library = {
  name: "The National Library",
  books: [
    {
      title: "first book",
      author: "me",
    },
    {
      title: "second book",
      author: "Again me",
    },
    {
      title: "third book",
      author: "Its me",
    },
    {
      title: "fourth book",
      author: "Only me",
    },
    {
      title: "fifth book",
      author: "Again Its me",
    },
  ],
};

console.log(library);

// console.log(library.books[0].title);

const { books } = library;

const titlesofBooks = books.map((book) => {
  return book.title;
});
console.log(titlesofBooks);
//Best Appraoch
const bookTitle = library.books.map((book) => book.title);
console.log(bookTitle);
