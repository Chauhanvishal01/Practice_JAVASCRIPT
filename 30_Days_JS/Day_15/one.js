//for in

let arr = [10, 20, 30, 40, 50];
for (let ar in arr) {
  console.log(ar); //print index
}
for (let ar in arr) {
  console.log(arr[ar]); //print values
}
console.log("------For Of--------");

for (let ar of arr) {
  console.log(ar); //print values directly
}

console.log("------MultiDimensional array--------");

let arr2 = [
  ["Enginer", 20],
  ["vishal", 22],
  ["Chauhan", 21],
];

console.log(arr2[2][0]);

for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr2[i].length; j++) {
    console.log(arr2[i][j]);
  }
}
console.log("----Using ForEach------");

arr2.forEach((data) => {
  data.forEach((val) => {
    console.log(val);
  });
});
console.log("----Using For Of------");

for (let ar of arr2) {
    for (i of ar) {
        console.log(i);
        
    }
}
