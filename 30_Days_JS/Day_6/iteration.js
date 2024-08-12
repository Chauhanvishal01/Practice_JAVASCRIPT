const fruits=["mango","apple","banana","orange","pineapple","watermelon","grapes"]

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log("---------For Of loop--------");
for (const fruit of fruits) {
    console.log(fruit);
    
}
console.log("---------For in loop--------");

for (const fruit in fruits) {
    console.log(fruits[fruit]);
   
}
console.log("---------For Each loop--------");


fruits.forEach((fruit) => {
    console.log(fruit);
    
})