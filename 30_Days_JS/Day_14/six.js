// #19 implement a try-catch block to handle on error that occurs durinf API data fetching

async function fetchData() {
  try {
    const response = await fetch("http://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error while fetching Data", error);
  }
}

fetchData();
