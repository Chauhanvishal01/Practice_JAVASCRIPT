let star = "";
for (let i = 0; i < 5; i++) {
  star += "* ";
}

console.log(star);
console.log("-------------------");

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
console.log("-------------------");

for (let i = 0; i < 5; i++) {
  let row = " ".repeat(5 - i);
  row += "* ".repeat(i);
  console.log(row);
}
console.log("-------------------");

for (let i = 5; i >= 1; i--) {
  let row = " ".repeat(5 - i);
  row += "* ".repeat(i);
  console.log(row);
}
