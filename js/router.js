import * as GetHomeMovies from "./apis/home.js";
import * as Home from "./page/home.js";

document.addEventListener("DOMContentLoaded", async () => {
  if (location.pathname === "/index.html" || location.pathname === "/") {
    let movieListS = document.querySelector(".selected");
    let MovieListN = document.querySelector(".not__selected");

    GetHomeMovies.getTrendingWeek().then((data) => {
      Home.displayMoviesWeek(data, MovieListN);
      let cards = document.querySelectorAll(".content__poster");
      cards.forEach((movieCard) => {
        movieCard.addEventListener("click", (e) => {
         e.preventDefault()
          history.pushState( e.target.id, null, `/movie_page.html`);
          location.reload()
        });
      });

    });

    GetHomeMovies.getTrendingDay().then(async (data) => {
      Home.displayMoviesDay(data, movieListS);
      let cards = document.querySelectorAll(".content__poster");
      cards.forEach((movieCard) => {
        movieCard.addEventListener("click", (e) => {
         e.preventDefault()
          history.pushState( e.target.id, null, `/movie_page.html`);
          location.reload()
        });
      });
    });

  } else if (location.pathname === "/movie_page.html") {
  } else if (location.pathname === "popularMovie.html") {
  } else if (location.pathname === "profile.html") {
  }
});
