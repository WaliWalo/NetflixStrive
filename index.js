// Movie Object
// initialize movie object
let movie = {
  name: "",
  date: "",
  genre: "",
  url: "",
  watched: false,
};
genres = {
  drama: "Drama",
  scienceFiction: "Science Fiction",
  comedy: "Comedy",
  crime: "Crime Film",
  romance: "Romance",
  western: "Western",
  thriller: "Thriller",
  adventure: "Adventure",
  animation: "Animation",
  war: "War",
  documentaries: "Documentaries",
  martial: "Martial Arts",
};

//movie class with name, url, category
const movies = [];

// Function to add new Movies
const addNewMovie = function (name, date, genre, url, watched) {
  // clone movie object
  let newMovie = Object.assign({}, movie);
  newMovie.name = name;
  newMovie.date = date;
  newMovie.genre = genre;
  newMovie.url = url;
  newMovie.watched = watched;

  // push new movie to Movies array

  // push to movies array
  movies.push(newMovie);
};


const loadMovies = function () {
  addNewMovie(
    "Rogue",
    "2020-08-20",
    genres.romance,
    "https://image.tmdb.org/t/p/w220_and_h330_face/uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
    false
  );
  addNewMovie(
    "Welcome to Sudden Death",
    "2020-09-29",
    genres.adventure,
    "https://image.tmdb.org/t/p/w220_and_h330_face/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
    false
  );
  addNewMovie(
    "2067",
    "2019",
    genres.war,
    "https://image.tmdb.org/t/p/w220_and_h330_face/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
    false
  );
  addNewMovie(
    "Enola Holmes",
    "2019",
    genres.romance,
    "https://image.tmdb.org/t/p/w220_and_h330_face/riYInlsq2kf1AWoGm80JQW5dLKp.jpg",
    false
  );
  addNewMovie(
    "Mulan",
    "2020-09-04",
    genres.martial,
    "https://image.tmdb.org/t/p/w220_and_h330_face/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
    false
  );
  addNewMovie(
    "American Spies Presents: Girls Rule",
    "2020-10-06",
    genres.romance,
    "https://image.tmdb.org/t/p/w220_and_h330_face/ov1sd4gvHpoVheHuJHCXJjadeIT.jpg",
    true
  );
  addNewMovie(
    "Money Plane",
    "2020-09-29",
    genres.comedy,
    "https://image.tmdb.org/t/p/w220_and_h330_face/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
    true
  );
  addNewMovie(
    "Hard Kill",
    "2020-08-25",
    genres.crime,
    "/images/movies/1-2.jpg",
    false
  );
  addNewMovie(
    "Beckam",
    "2019",
    genres.thriller,
    "https://image.tmdb.org/t/p/w220_and_h330_face/z0r3YjyJSLqf6Hz0rbBAnEhNXQ7.jpg",
    true
  );
  addNewMovie(
    "AVA",
    "2020-05-02",
    genres.thriller,
    "https://image.tmdb.org/t/p/w220_and_h330_face/qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg",
    false
  );
};
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
    item.setAttribute("onclick", "filterByGenre(this.innerText)");
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
const filterByGenre = function (genre) {
  console.log(genre);
  let main = document.querySelector("#main");
  main.remove();
  let newMain = document.createElement("div");
  let mainContainer = document.querySelector("#mainContainer");
  newMain.classList.add("container");
  newMain.setAttribute("id", "main");
  mainContainer.appendChild(newMain);
  let row = document.createElement("div");
  let head = document.createElement("h4");
  let text = document.createTextNode("TEST");
  newMain.appendChild(row);
  head.appendChild(text);
  row.setAttribute("class", "row");
  let container = document.querySelector("#main");
  container.appendChild(head);
  container.appendChild(row);
  //if movie.genre = genre create card
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre === genre) {
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
  }
};

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

window.onload = function () {
  loadMovies();
  console.log(movies);
};
