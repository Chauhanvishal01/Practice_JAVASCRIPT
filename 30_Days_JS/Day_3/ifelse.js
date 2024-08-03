let num = 9;

if (num < 0) {
  console.log("num is negative");
} else {
  console.log("num is positive");
}

const isEligible = (age) => {
  if (age >= 18) {
    console.log("You are  eligible to vote");
  } else {
    console.log("You are not  eligible to vote");
  }
};
isEligible(1900);


const greatestOfThree = (a,b,c) => {
  if (a > b && a > c) {
    console.log("A is greater");
  }
  else {
    if (b > a && b > c) {
      console.log("B is greater");
    } else {
      console.log("C is greater");
    }
  }
  
}
greatestOfThree(-4,4,4)