let marks = [85, 97, 44, 37, 76, 60];

let sum = 0;
marks.forEach((mark) => {
  sum += mark;
});
let avg = sum / marks.length;
console.log(avg);

let price = [250, 645, 300, 900, 50];

for (let i = 0; i < price.length; i++) {
  let offer = price[i] / 10;

  price[i] -= offer;
}
console.log(price);

let companies = ["Microdoft", "IBM", "Netflix", "Google"];
companies.shift();

console.log(companies);

companies.splice(0, 1, "OLA");
console.log(companies);

companies.push("Amazon");

console.log(companies);
