const existingarr = [1, 2, 3, 4, 5, 6];
const newArr = [7, 8, 9, 10, ...existingarr];
const newArrr = [...existingarr, 7, 8, 9, 10];
console.log(newArr);
console.log(newArrr);

function sum(...numbers) {
  let sum = 0;
  numbers.map((number) => (sum += number));
  return sum;
}
const values = sum(1, 2, 3, 4, 5);
console.log(values);
// console.log(sum(32,34,2,21,12,56,778,90,89));

console.log(sum(1, 2, 3));       
console.log(sum(4, 5, 6, 7, 8));
console.log(sum(10));            
console.log(sum()); 


function sumofNumber(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
  
console.log(sumofNumber(1, 2, 3));       
console.log(sumofNumber(4, 5, 6, 7, 8));
console.log(sumofNumber(10));            
console.log(sumofNumber()); 
