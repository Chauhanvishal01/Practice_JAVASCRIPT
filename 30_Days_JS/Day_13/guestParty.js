var prompt = require("prompt-sync")();
const guest = ["vishal", "pankaj", "nitin", "diya", "divya"];
const name = prompt("Enter your name");

const checkGuest = () => {
  if (guest.includes(name)) {
    console.log(`Welcome to the party ${name}`);
  } else {
    console.log("Sorry,you're not on the guest list.");
  }
};
checkGuest();
