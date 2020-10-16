// Movie Object
// initialize movie object
let movie = {
  name: "",
  date: "",
  title: "",
  genre: "",
  url: "",
  watched: false,
};

genres = [
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

//movie class with name, url, category
const movies = [];

// Function to add new Movies
const addNewMovie = function (name, date, genre, url, watched) {
  const newMovie = Object.assign({}, movie);

  newMovie.name = name;
  newMovie.date = date;
  newMovie.genre = genre;
  newMovie.url = url;
  newMovie.watched = watched;

  // push new movie to Movies array

  // push to movies array
  movies.push(newMovie);
};
addNewMovie(
  "The Terror Season 1",
  "2019",
  genres[0],
  "/images/movies/1-2.jpg",
  false
);
console.log(movies);
//FUNCTION TO CREATE INPUT BASED ON WHAT GENRE WE HAVE
//1. Create Input button
//2. create genre array
//3. loop array to remove repeating genre
//4. loop genre array to populate input
const genreInp = function () {
  let inp = document.querySelector("#genreDropDown");
  genres.forEach((genre) => {
    let item = document.createElement("a");
    item.setAttribute("class", "dropdown-item");
    item.setAttribute("href", "#");
    item.setAttribute("value", genre);
    let text = document.createTextNode(genre);
    item.appendChild(text);
    inp.appendChild(item);
  });
};

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

createMain();
genreInp();
