//array destructuring

let arr1 = ["vishal", "chauhan", "is", "best"];

let [item1, item2, ...item3] = arr1;

console.log("item1", item1);
console.log("item2", item2);
console.log("item3", item3);

//Objects inside array

let arr = [
  { user: 1, name: "vishal" },
  { user: 2, name: "chauhan" },
  { user: 3, name: "best" },
];

for (let ar of arr) {
  console.log(ar.name);
}

let [name1, name2] = arr;
console.log(name2);
console.log(name1.name);

//function inside function

function func1() {
    func2()
  console.log("I am func1");
  function func2() {
    console.log("I am func2");
  }
}
func1();

