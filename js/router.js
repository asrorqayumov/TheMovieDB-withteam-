import * as GetHomeMovies from "./apis/home.js";
import * as Home from "./page/home.js";
import * as Movie from "./page/movie_page.js"
import * as Person from "./page/actor.js"
let account_id = 20195959;
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
          history.pushState( {id:e.target.id, category:e.target.parentElement.id}, null, `/movie_page.html`);
          location.reload()
        });
      });
    });
    
  } else if (location.pathname === "/movie_page.html") {
    console.log(history.state.id);
    Movie.hero_all(history.state.id)
    Movie.keywords_all(history.state.id)
    Movie.rec_all(history.state.id)
    Movie.top_cast_all(history.state.id)
    Movie.coll_all(history.state.id)
    Movie.favorite__add(history.state.id , history.state.category)
    Movie.watchlist_add(history.state.id , history.state.category)
    let lishka = document.querySelectorAll(".full_info__main__top_cast__list__item")
    let LI = Array.from(lishka)
    for (const i of LI) {
      i.addEventListener("click" ,(e)=>{
        e.preventDefault()
        history.pushState(e.target.id,null,`/`)
      })
    }
  } else if (location.pathname === "popularMovie.html") {

  } else if (location.pathname === "profile.html") {
  }else if (location.pathname === "actors.html"){
    console.log("History.State: ", history.state);
  }
});
