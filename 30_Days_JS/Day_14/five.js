// #15 Use map to double all the elements in an array

const arr = [1, 2, 319, 1, 2247, 58, 6, 1, 1];

const doubleArr = arr.map((element) => {
  return element * 2;
});

console.log(doubleArr);
console.log(arr);

//#16 find the largest using in an array using reduce method

const largest = arr.reduce((max, current) => (max < current ? current : max));

console.log(`largest number in above array is ${largest}`);

//#17 Remove all occurence of a specific element from an array

function removeElement(arr, targetValue) {
  return arr.filter((element) => element !== targetValue);
}

console.log(removeElement(arr,1));


// #18 create a function thatvdiplay the current date and time in a specific format

const showDate = () => {
    const date = new Date();
    const todayDate = date.toLocaleString();
    return `Today date is ${todayDate}`;
  };
  
  console.log(showDate());
  