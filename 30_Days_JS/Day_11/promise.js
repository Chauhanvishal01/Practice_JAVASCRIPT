const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const message = "Promise resolved after 2 seconds";
    resolve(message);
  }, 2000);
});

myPromise.then((message) => {
  console.log(message);
});

const rejectPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const errMsg = "Promise rejected after 2 seconds";
    reject(errMsg);
  }, 2000);
});

rejectPromise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

