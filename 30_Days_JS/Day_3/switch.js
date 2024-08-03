const DayName = (day) => {
  switch (day) {
    case 1:
      console.log("Sunday");

      break;
    case 2:
      console.log("Monday");

      break;
    case 3:
      console.log("Tuesday");

      break;
    case 4:
      console.log("Wednesday");

      break;
    case 5:
      console.log("Thursday");

      break;
    case 6:
      console.log("Friday");

      break;
    case 7:
      console.log("Saturday");

      break;

    default:
      console.log("Enter a valid Day");
      break;
  }
};
DayName(2);
DayName(1);
DayName(7);
DayName(8);

console.log("--------------------Assign Grade------------");
function assignGrade(marks) {
  let grade;
  switch (true) {
    case marks >= 90 && marks <= 100:
      grade = "A";
      console.log(grade);
      break;
    case marks >= 70 && marks < 90:
      grade = "B";
      console.log(grade);
      break;
    case marks >= 50 && marks < 70:
      grade = "C";
      console.log(grade);
      break;
    case marks >= 33 && marks < 50:
      grade = "D";
      console.log(grade);
      break;
    case marks >= 0 && marks < 33:
      grade = "F";
      console.log(grade);
      break;

    default:
      console.log("Enter Valid marks");
      break;
  }
}

assignGrade(89);
assignGrade(90);
assignGrade(99);
assignGrade(100);
assignGrade(101);

function evenOrOdd(val) {
  return val% 2==0 ? "Even":"Odd"
  
}
console.log(evenOrOdd(5));
console.log(evenOrOdd(4));