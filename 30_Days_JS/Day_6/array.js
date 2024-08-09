const numbers = [1, 2, 3, 4, 5]
/* for (let i = 0; i <= numbers.length; i++){
    console.log(i);
} */
console.log('Original Array'+numbers);

console.log(`First element of array is ${numbers[0]}`);
console.log(`Last element of array is ${numbers[numbers.length - 1]}`);


numbers.push(6)
console.log(`Updated array after push: ${numbers}`);

numbers.pop()
console.log(`Updated array after pop: ${numbers}`);

numbers.shift()
console.log(`Updated array after shift: ${numbers}`);
numbers.unshift(20)
console.log(`Updated array after unshift: ${numbers}`);
