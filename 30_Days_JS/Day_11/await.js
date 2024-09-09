const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "me", pass: "9876" });
    } else {
      reject("Error: JS Went Wrong");
    }
  }, 1000);
});
async function waitForPromise() {
  try {
    const res = await promiseOne;
    console.log(res);
  } catch (error) {
      console.log(error);
    
  }
}

waitForPromise()