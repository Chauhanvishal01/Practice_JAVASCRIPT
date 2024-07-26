const library = {
  book: [
    {
      name: "Book one",
      author: "V Chauhan ",
      year: 2020,
    },
  ],
};
function addBook(obj, newBook) {
   obj.book.push(newBook);
}
addBook(library, { name: "book two", author: "V Ji", year: 2001 });

console.log(library);

const company = {
    employee:['empone']
}

const addnewEmployee = (obj, newEmpName) => {
    obj.employee.push(newEmpName)
}
addnewEmployee(company,"emptwo")
console.log(company);

