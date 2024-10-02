function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Data from ${url}`);
    }, 2000); 
  });
}

const url1 = "https://api.example.com/data1";
const url2 = "https://api.example.com/data2";
const url3 = "https://api.example.com/data3";

fetchData(url1)
  .then((response1) => {
    console.log(response1);
    return fetchData(url2);
  })
  .then((response2) => {
    console.log(response2);
    return fetchData(url3);
  })
  .then((response3) => {
    console.log(response3);
    console.log("All data fetched");
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
