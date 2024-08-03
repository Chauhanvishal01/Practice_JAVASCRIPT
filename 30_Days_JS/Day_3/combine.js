function isLeapyear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? "Leap Year"
    : "Not a leap Year";
}

console.log(isLeapyear(2014));
console.log(isLeapyear(2100));
console.log(isLeapyear(2000));
console.log(isLeapyear(1600));
console.log(isLeapyear(2016));
console.log(isLeapyear(2020));
console.log(isLeapyear(1900));
