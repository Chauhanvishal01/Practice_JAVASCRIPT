/* Create an object representing a smartphone with properties brand, model, and specifications (an object with properties storage and battery). 
Update the storage property and print the updated smartphone object. */

const smartphone = {
  brand: "Vivo",
  model: "Y12",
  specification: {
    storage: "500GB",
    battery: "5000mAh",
  },
};
smartphone.specification.storage = "50GB";
console.log(smartphone);

/* Create an object representing a course with properties title, instructor, and students (an array of student names).
 Write a function that takes the course object and adds a new student to the course. */

const course = {
  title: "Backend Development",
  instructor: "Er. Vishal Chauhan",
  students: ["panku", "nitin", "lobo", "dobo", "jojo"],
};

function newStudent(course, studentname) {
  course.students.push(studentname);
}

newStudent(course, "tiki");
console.log(course);

/* Create an object representing a playlist with properties name, genre, and songs (an array of song objects with title and artist properties). 
Write a function that adds a new song to the playlist. */

const playlist = {
  name: "Chill Vibes",
  genre: "Lo-Fi",
  songs: [
    {
      title: "Moonlight",
      artist: "harnoor",
    },
    {
      title: "Changes",
      artist: "XXXtentacion",
    },
  ],
};

// function addSong(playlist,songDetials){
//     playlist.songs.push(songDetials)
// }
// addSong(playlist,{title:"hello",artist:"me"})
// console.log(playlist);

//One more approach

function addSongs(playlist, songTitle, songArtist) {
  const newSong = {
    title: songTitle,
    artist: songArtist,
  };
  playlist.songs.push(newSong);
}
addSongs(playlist, "Happy Nation", "Ace of Base");

console.log(playlist);

/* Create an object representing a store with properties name, location, and products (an array of product objects with name and price properties).
Write a function that calculates the total price of all products in the store. 
*/
const store = {
  name: "The Mall",
  location: "New Delhi",
  products: [
    {
      name: "Shoes",
      price: 500,
    },
    {
      name: "T-Shirt",
      price: 200,
    },
    {
      name: "Jeans",
      price: 600,
    },
  ],
};

function calculateTotalPrice(store) {
  let TotalPrice = 0;
  for (let product of store.products) {
    TotalPrice += product.price;
  }
  return TotalPrice;
}

let result = calculateTotalPrice(store);
console.log("Total price of all products are: ", result);


/*Create an object representing a movie with properties title, director, and year.
 Write a function that takes the movie object and checks if the movie is older than 20 years. */

 const movie={
    title:"6 underGround",
    director:"Vishal",
    year:2001
 }
// let currentyear=2024
//  function CheckMovieAge(movie){
//     let age=currentyear - movie.year
//     if(age > 20){
//         console.log(`Movie is older than 20 years`);
//     }else{
//         console.log("Movie is not older than 20 years");
//     }
    
//  }

//  CheckMovieAge(movie)

//Second approach

function CheckMovieAge(movie){
    let currentyear= new Date().getFullYear()
    let movieAge=currentyear - movie.year

    return movieAge > 20
}

let ageresult= CheckMovieAge(movie)

if(ageresult){
    console.log(`${movie.title} is older than 20 years`);
}else{
    console.log(`${movie.title} is  not older than 20 years`);

}