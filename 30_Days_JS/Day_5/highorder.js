const callManyTimes = (func, number) => {
  for (let i = 0; i < number; i++) {
    func(i);
  }
};

const sayHello = (val) => {
  console.log(`hello ${val}`);
};
callManyTimes(sayHello, 5);

const applyFxn = (func1, func2, value) => {
  const result1 = func1(value);
  const finalresult = func2(result1);
  return finalresult;
};
const add = (value) => {
  return value + 3;
};
const multiply = (value) => {
  return value * 2;
};

const result = applyFxn(add, multiply, 5);
console.log(result);

const applysecond = (func1, func2, value) => {
  const result1 = func2(value);
  const finalresult = func1(result1);
  return finalresult;
};

const secondresult=applysecond(add,multiply,5)
console.log(secondresult);