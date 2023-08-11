import * as GetHomeMovies from './apis/home.js'
import * as Home from './page/home.js';

document.addEventListener('DOMContentLoaded', async ()=>{
 if (location.pathname === '/index.html') {
    let movieListS = document.querySelector(".selected");
    let MovieListN = document.querySelector(".not__selected")
    let MoviesWeek = await GetHomeMovies.getTrendingWeek();
    let moviesDay = await  GetHomeMovies.getTrendingDay();
    console.log();
    Home.displayMoviesDay(moviesDay, movieListS);
    Home.displayMoviesWeek(MoviesWeek,MovieListN)
 } 
   else if (location.pathname === '/movie_page.html'){

  }
  else if (location.pathname === 'popularMovie.html'){

  }
  else if (location.pathname === 'profile.html'){

}

 


})