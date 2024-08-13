let numbers = [1, 2, 3, 4, 5, 5];

function sum(arr) {
  let sum = 0;
  arr.forEach((val) => {
    sum += val
  });

  return sum;
}

console.log(sum(numbers));

const withIndex = (arr) => {
  arr.forEach((val, index) => {
    console.log(`value is ${val} and index is ${index}`);
  });
};

withIndex(numbers)

let names=["vishal","nitin","pankaj","ramu"]

function tolowercase(arr) {
    let uppercase=[]
    arr.forEach((str) => {
        uppercase.push(str.toUpperCase())
    })
    return uppercase
    
}

console.log(tolowercase(names));