/* Create an object representing a university with properties name,
 location, and departments (an array of department names). 
  Write a function that takes the university object and returns the number of departments.*/
const university = {
  name: "HPTU",
  location: "hamirpur",
  departments: ["CSE", "AI&ML", "ME", "ECE", "CIVIL"],
};

function numberofDepartments(obj) {
  return obj.departments.length;
}
console.log(numberofDepartments(university));

/* Create an object representing a user with properties 
username, email, and password. Write a function that takes
 the user object and updates the email property. */

const user = {
  username: "vishal",
  email: "vishal@test.com",
  password: "1234",
};
function updateEmail(obj, newEmail) {
  obj.email = newEmail;
}
updateEmail(user, "vishal@example.com");
console.log(user);

/* Create an object representing a sports team with 
properties teamName, players (an array of player names),
 and coach. Write a function that takes the team object
  and adds a new player to the team. */

const sportsTeam = {
  teamName: "Team X",
  players: ["Adam", "eve", "many", "eku"],
  coach: "Vishal Chauhan",
};

function addNewPlayer(obj, newPlayer) {
  obj.players.push(newPlayer);
}

addNewPlayer(sportsTeam, "Lucifer");
console.log(sportsTeam);

/* 
Create an object representing a library member with 
properties memberID, name, and borrowedBooks 
(an array of book titles). Write a function that 
adds a new book to the borrowedBooks array. */

const libraryMember = {
  memberID: 1,
  name: "Lucifer",
  borrowedBooks: ["firstBook", "TheHell", "TheHeaven"],
};
function newBorrowedBooks(obj, newbook) {
  obj.borrowedBooks.push(newbook);
}

newBorrowedBooks(libraryMember, "King of Hell");
console.log(libraryMember);

/* 
Create an object representing a computer with 
properties brand, model, and specifications 
(an object with properties RAM and CPU). 
Write a function that takes the computer object and 
updates the RAM property.
 */

const computer = {
  brand: "HP",
  model: "X2001",
  specification: {
    RAM: "8GB",
    CPU: "RYZEN 5",
  },
};

function updateRAM(obj, newRAMValue) {
  return (obj.specification.RAM = newRAMValue);
}
// console.log(updateRAM(computer, "32GB"));
updateRAM(computer, "32GB");

console.log(computer);

/* 
Create an object representing a festival with properties 
name, location, and events (an array of event objects 
with title and date properties).
Write a function that adds a new event to the 
festival. */

const festival = {
  name: "Summer Fest",
  location: "Water Park",
  events: [
    { title: "Opening Ceremony", date: "2024-07-01" },
    { title: "Food Fair", date: "2024-07-02" },
    { title: "Music Concert", date: "2024-07-03" },
  ],
};

function addEvent(obj, newevent) {
  obj.events.push(newevent);
}

addEvent(festival, { title: "Closing Cermony", date: "2024-07-04" });

console.log(festival);

/* 
Create an object representing a city with properties 
name, population, and landmarks (an array of landmark
objects with name and yearEstablished properties).
Write a function that adds a new landmark to the
city.
 */
const city = {
  name: "Dharamshala",
  population: 500000,
  landmarks: [
    { name: "HPCA Staduim", yearEstablished: 2011 },
    { name: "War Memorial", yearEstablished: 2019 },
  ],
};

function addLandmark(obj, newLandmark) {
  obj.landmarks.push(newLandmark);
}
addLandmark(city, { name: "Museum", yearEstablished: 2021 });

console.log(city);
/* 

Create an object representing a bank account with 
properties accountNumber, holderName, and balance. 
Write a function that takes the bank account object
 and a deposit amount, adds the deposit to the balance, 
 and returns the updated balance.
 */

const bankAccount = {
  accountNumber: 1234217462445432,
  holderName: "Ram Lal",
  balance: 2000,
};

function addDeposit(obj,depositAmount){
    obj.balance +=depositAmount
    return obj.balance
}
let updatedBalance=addDeposit(bankAccount,3000)
console.log("Updated Value: "+updatedBalance);
console.log("New Value: "+bankAccount.balance);