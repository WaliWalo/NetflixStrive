// Movie Object

<<<<<<< Updated upstream
const movie = {
=======
// initialize movie object
let movie = {
>>>>>>> Stashed changes
  name: "",
  date: "",
  genre: "",
  url: "",
<<<<<<< Updated upstream
=======
  watched: false,
>>>>>>> Stashed changes
};

genre = [
  "Horror",
  "Action",
  "Drama",
  "Science Fiction",
  "Comedy",
  "Crime Film",
  "Romance",
  "Western",
  "Thriller",
  "Adventure",
  "Animation",
  "War",
  "Documentaries",
  "Martial Arts",
];

//const { func } = require("prop-types");

//movie class with name, url, category
const movies = [
  {
    name: "adnaskjl",
    date: "2019",
    genre: "Horror",
    url: "images/movies/1-1.jpg",
  },
];

<<<<<<< Updated upstream
// Function to add new Movies
const addNewMovie = function (name, date, genre, url, watched) {
  // clone movie object
  let newMovie = Object.assign({}, movie);
=======
// Add New Movie
const addMovie = function (name, date, genre, url, watched) {
  const newMovie = Object.assign({}, movie);
>>>>>>> Stashed changes
  newMovie.name = name;
  newMovie.date = date;
  newMovie.genre = genre;
  newMovie.url = url;
  newMovie.watched = watched;

<<<<<<< Updated upstream
  // push new movie to Movies array
=======
  // push to movies array
>>>>>>> Stashed changes
  movies.push(newMovie);
};

//FUNCTION TO CREATE INPUT BASED ON WHAT GENRE WE HAVE
//1. Create Input button
//2. create genre array
//3. loop array to remove repeating genre
//4. loop genre array to populate input
const categoryInp = function () {};

//FUNCTION TO FILTER BY GENRE
//1. Get genre
//2. remove main section
//3. create movies by genre
const filterByGenre = function (genre) {};

//FUNCTION FOR HOME ON CLICK
//1. on click remove main section
//2. create all movies
const homeBtn = function () {};

//FUNCTION TO FILTER BY DATE
//1. sort movies by date
//2. remove main section
//3. populate main section with 10 latest dated movies
const filterByLatest = function () {};

//FUNCTION TO CREATE ALL MOVIES
const createAllCard = function () {
  let row = document.createElement("div");
  let head = document.createElement("h4");
  let text = document.createTextNode("TEST");
  head.appendChild(text);
  row.setAttribute("class", "row");
  let container = document.querySelector("#main");
  container.appendChild(head);
  container.appendChild(row);
  //for each movie create a card
  for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    row.appendChild(card);
    let img = document.createElement("img");
    img.setAttribute("src", movies[i].url);
    img.setAttribute("class", "card-img-top");
    card.appendChild(img);
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-img-overlay");
    let cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title");
    let cardTitleText = document.createTextNode(movies[i].name);
    cardTitle.appendChild(cardTitleText);
    cardBody.appendChild(cardTitle);
    card.appendChild(cardBody);
  }
};

//create cards
const createMain = function () {
  createAllCard();
};

<<<<<<< Updated upstream
window.onload = function () {
  addNewMovie(
    "The Terror Season 1",
    "2019",
    genre[0],
    "./images/movies/1-2.jpg",
    false
  );
  console.log(movies);
=======
// Onload Method
window.onload = function () {
  console.log("This is working");
>>>>>>> Stashed changes
};
