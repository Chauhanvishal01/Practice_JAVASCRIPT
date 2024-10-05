const errorFxn = () => {
  throw new Error("Intentionally error");
};

try {
  errorFxn();
} catch (error) {
  console.log("Caught an error", error.message);
}

function dividestwo(firstValue, secondValue) {
  if (secondValue === 0) {
    throw new Error(" Divide By Zero Error");
  }
  return firstValue / secondValue;
}

try {
    console.log("Entering try block");
  console.log(dividestwo(2, 0)); //Error
} catch (error) {
  console.log("Caught An Error", error.message);
} finally {
  console.log("Execute Always weather an error was caught or not");
}
