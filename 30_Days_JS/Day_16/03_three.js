let str = "hello world";

function strLength(str) {
  return str.length;
}
console.log(strLength(str));

let word = "JAVASCRIPT";

console.log(`first character is ${word[0]}`);

let fstr = "GOOD";
let lstr = " MORNING";
let combinedStr = fstr.concat(lstr);
console.log(combinedStr);

let example = "This is a bad example";
console.log(example.replace("bad", "good"));

console.log(example.substring(5, 9));

let str1 = "  apple,banana,cherry  ";
console.log(str1.split(","));
console.log(str1);

console.log(str1.trim());

console.log(str1.localeCompare(str));

let str2 = "banana";
console.log(str2.indexOf("a"));

let str3 = "example";
console.log(str3.lastIndexOf("e"));

let count = 0;
for (const str of str2) {
  if (str === "a") {
    count++;
  }
}
console.log("Occurence of a in banana", count);

let arr = ["Hello", "world", "!"];

console.log(arr.join(" "));

let num = 123;
let strFromNum = String(num);
console.log(typeof strFromNum);
console.log(typeof num);

console.log(typeof num.toString());


