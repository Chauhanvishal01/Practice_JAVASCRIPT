/* let arr1 = ["Vishal", 20, true];
let arr2 = arr1;


arr1.push("Chauhan")
arr2.push("blabla")
//dono me push hoga
console.log("Arr1",arr1);
console.log("Arr2",arr2);
 */
let arr1 = ["Vishal", 20, true];

let arr2 = arr1.slice(0);

arr2.push("item"); //only arr2

console.log("Arr1", arr1);
console.log("Arr2", arr2);

let arr3 = ["Vishal", "Chauhan"];
let arr4 = [...arr3];

arr3.push("yes")
arr4.push("ji")

console.log("Arr3", arr3);
console.log("Arr4", arr4);
