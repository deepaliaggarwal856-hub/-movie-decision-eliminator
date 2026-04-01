const API_KEY = "d2c1eb0fb637933fd234de25558e1319";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const moviesDiv = document.getElementById("movies");
const searchInput = document.getElementById("searchInput");

// Fetch trending movies
async function fetchTrending() {
  const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  const data = await res.json();
  displayMovies(data.results);
}

// Search movies
async function searchMovies(query) {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data = await res.json();
  displayMovies(data.results);
}

// Display movies
function displayMovies(movies) {
  moviesDiv.innerHTML = "";

  if (!movies || movies.length === 0) {
    moviesDiv.innerHTML = "<p>No results found</p>";
    return;
  }

  movies.forEach(movie => {
    const div = document.createElement("div");
    div.classList.add("movie");

    div.innerHTML = `
      <img src="${IMG_URL + movie.poster_path}" />
      <h3>${movie.title}</h3>
      <p>⭐ ${movie.vote_average}</p>
    `;

    moviesDiv.appendChild(div);
  });
}

// Search input listener (debounce)
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

// Initial load
fetchTrending();