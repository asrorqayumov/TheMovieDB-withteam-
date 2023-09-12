import * as GetHomeMovies from "./apis/home.js";
import * as Home from "./page/home.js";
import * as Movie from "./page/movie_page.js";
let account_id = 20195959;
document.addEventListener("DOMContentLoaded", async () => {
  if (location.pathname === "/index.html" || location.pathname === "/") {
    let movieListS = document.querySelector(".selected");
    let MovieListN = document.querySelector(".not__selected");
    let  selected_tv = document.querySelector(".selected-tv");
    let not__selected_tv = document.querySelector(".not__selected-tv");
    
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
          history.pushState( {id:e.target.id, category:e.target.parentElement.id}, null, `/movie_page.html`);
          location.reload()
        });
      });
    });

    GetHomeMovies.getpopularTv().then((data)=>{
      Home.displayMoviesTv(data, not__selected_tv);
      let cards = document.querySelectorAll(".content__poster");
      cards.forEach((movieCard) => {
        movieCard.addEventListener("click", (e) => {
          e.preventDefault()
          history.pushState( {id:e.target.id, category:e.target.parentElement.id}, null, `/movie_page.html`);
          location.reload()
        });
      });
    });
    
    GetHomeMovies.getpopularKinoTv().then((data) => {
      Home.displayMoviesKino(data, not__selected_tv);
      let cards = document.querySelectorAll(".content__poster");
      cards.forEach((movieCard) => {
        movieCard.addEventListener("click", (e) => {
          e.preventDefault();
          history.pushState( {id:e.target.id, category:e.target.parentElement.id}, null, `/movie_page.html`);
          location.reload();
        });
      });
    })
    
  } else if (location.pathname === "/movie_page.html") {
    console.log(history.state.id);
    Movie.hero_all(history.state.id);
    Movie.keywords_all(history.state.id);
    Movie.rec_all(history.state.id);
    Movie.top_cast_all(history.state.id);
    Movie.coll_all(history.state.id);
    Movie.favorite__add(history.state.id , history.state.category)
    Movie.watchlist_add(history.state.id , history.state.category)
  } else if (location.pathname === "popularMovie.html") {
  } else if (location.pathname === "profile.html") {
  }
});
