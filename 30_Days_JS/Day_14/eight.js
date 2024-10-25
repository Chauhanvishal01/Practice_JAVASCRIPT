//23 implement a private variable using closure

const createCounter = () => {
  let count = 0;
  //closure
  function increment() {
    count++;
    console.log("Count:", count);
  }
  return {
    incrementCounter: function () {
      increment();
    },
    getCount: function () {
      return count;
    },
  };
};
const counter = createCounter();
counter.incrementCounter();
console.log(counter);
