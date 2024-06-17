// Create an Array:
const myArray=[1,2,3,4,5]
// Accessing Array Elements:
console.log("Third element of array : "+myArray[2]);
//Array Length:
console.log("Length of array: "+myArray.length);
// Modify Array Element:
myArray[1]=10
console.log("Updated array: "+myArray);
//Iterate Through Array:
for(i=0;i<myArray.length;i++){
    console.log(myArray[i]);
}
// Adding Elements:
myArray.push(6)
console.log("Add 6th element "+myArray);
// Removing Elements:
myArray.pop()
console.log("After removing the last element: "+myArray);
// Checking Array Includes:
console.log("Check the number 3 is present or not: ",myArray.includes(3));
// Concatenating Arrays:
const anotherArr=[7,8,9]
let newarr=myArray.concat(anotherArr)
console.log("After concatenate: ",newarr);
