const API_KEY = "d2c1eb0fb637933fd234de25558e1319";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const moviesDiv = document.getElementById("movies");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const filterSelect = document.getElementById("filterRating");
const toggleMode = document.getElementById("toggleMode");

let allMovies = [];
let likedMovies = JSON.parse(localStorage.getItem("liked")) || [];


async function fetchTrending() {
  const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  const data = await res.json();

  allMovies = data.results;
  displayMovies(allMovies);
}


async function searchMovies(query) {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data = await res.json();
  allMovies = data.results;
  displayMovies(allMovies);
}


function displayMovies(movies) {

  moviesDiv.innerHTML = "";

  if (!movies || movies.length === 0) {
    moviesDiv.innerHTML = "<p>No results found</p>";
    return;
  }

  movies.map(movie => {

    const div = document.createElement("div");
    div.classList.add("movie");
    const rating5 = Math.round(movie.vote_average / 2);

    const liked = likedMovies.find(m => m.id === movie.id && m.type === "like");
    const disliked = likedMovies.find(m => m.id === movie.id && m.type === "dislike");

    div.innerHTML = `
      <img src="${IMG_URL + movie.poster_path}" />

      <h3>${movie.title}</h3>

      <p>⭐ ${rating5}/5</p>

      <button onclick="rateMovie(${movie.id},'like')">
        ${liked ? "👍 Liked" : "👍 Like"}
      </button>

      <button onclick="rateMovie(${movie.id},'dislike')">
        ${disliked ? "👎 Disliked" : "👎 Dislike"}
      </button>
    `;

    moviesDiv.appendChild(div);

  });

}



let timeout;
searchInput.addEventListener("input", () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    const query = searchInput.value.trim();
    if (query) {
      searchMovies(query);
    } else {
      fetchTrending();
    }

  }, 300);
});


filterSelect.addEventListener("change", () => {
  const value = filterSelect.value;
  let filtered = allMovies;
  if (value === "popular") {
    filtered = allMovies.filter(movie =>
      movie.popularity > 100
    );
  }
  if (value === "rating4") {
    filtered = allMovies.filter(movie =>
      Math.round(movie.vote_average / 2) >= 4
    );
  }
  if (value === "rating3") {
    filtered = allMovies.filter(movie =>
      Math.round(movie.vote_average / 2) >= 3
    );
  }
  if (value === "liked") {
    filtered = likedMovies
      .filter(m => m.type === "like");
  }
  if (value === "disliked") {
    filtered = likedMovies
      .filter(m => m.type === "dislike");
  }
  displayMovies(filtered);
});



sortSelect.addEventListener("change", () => {
  let sorted = [...allMovies];
  if (sortSelect.value === "az") {
    sorted.sort((a,b) =>
      a.title.localeCompare(b.title)
    );
  }

  if (sortSelect.value === "za") {
    sorted.sort((a,b) =>
      b.title.localeCompare(a.title)
    );
  }

  if (sortSelect.value === "highRating") {
    sorted.sort((a,b) =>
      b.vote_average - a.vote_average
    );
  }

  if (sortSelect.value === "lowRating") {
    sorted.sort((a,b) =>
      a.vote_average - b.vote_average
    );
  }

  displayMovies(sorted);
});


function rateMovie(id, type) {
  likedMovies = likedMovies.filter(m => m.id !== id);
  const movie = allMovies.find(m => m.id === id);
  likedMovies.push({
    ...movie,
    type
  });

  localStorage.setItem(
    "liked",
    JSON.stringify(likedMovies)
  );

  displayMovies(allMovies);

}


toggleMode.addEventListener("click", () => {

  document.body.classList.toggle("light");

});



fetchTrending();