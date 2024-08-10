let number=[1,2,3,4,5]

let doubleArr=number.map((value) => {
    return value + value
    
})

console.log(doubleArr);

let onlyEven = number.filter((value) => {
    return value % 2 === 0
})
console.log(onlyEven);

let sumArr = number.reduce((sum,value) => {
    return sum + value
})
console.log(sumArr);