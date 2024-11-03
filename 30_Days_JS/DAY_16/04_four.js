const initials = (fullName) => {
  const name = fullName.split(" ");
  let initials = "";
  name.forEach((name) => {
    initials += name.charAt(0).toUpperCase();
  });
  return initials;
};

let res = initials("vishal Chauhan");
console.log(res);

let str1 = "vishal";
let str2 = "vishal";
let str3 = "chauhan";
console.log(str1 === str2); //true
console.log(str3 === str2); //false
