let username = prompt("Enter your username");

username = username.split(" ").join("");
let generatedUsername = `@${username}${username.length}`;

console.log(`Your username must be ${generatedUsername}`);
