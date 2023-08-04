import * as GetHomeMovies from "../apis/home.js";
import config from "../../config.js";

let movieListS = document.querySelector(".selected");

let moviesDay = await  GetHomeMovies.getTrendingDay();

function displayMoviesDay(moviesDay) {
    
    let html = "";
    moviesDay.forEach((movie) => {
        console.log(movie);
        html += `
        <div class="content">
        <a class="icon">
        <i class="fa-solid fa-ellipsis" style="color: white;"></i>
        </a>    
        <ul class="functions">
        <li class="function" id="list">
        <a>
        <i class="fa-solid fa-list black" ></i>
        Добавить в список 
        </a>
        </li>
        <li class="function" id="like">
        <a>
        <i class="fa-solid fa-heart black" ></i>   
        Избранное
        </a>
        </li>
        <li class="function" id="bookmark">
        <a>
        <i class="fa-solid fa-bookmark black" ></i>
        Список отслеживания
        </a>
        </li>
        <li class="function" id="rate">
        <a>
        <i class="fa-solid fa-star black" ></i>
        Ваш рейтинг
        </a>
        </li>
        </ul>
        <img class="content__poster " src="${
            config.BASE_IMG_URL
        }${movie.poster_path}" width="150" height="225" >
        <div class="circle-progressbar">
        <div
        role="progressbar"
        aria-valuenow='${Math.round(movie.vote_average * 10)}'
        aria-valuemin="0"
        aria-valuemax="100"
        style='--value:${Math.round(movie.vote_average * 10) }' >
        
        </div>
        </div>
        <div class="content__text">
        <p class="content__text__heading">
        ${movie.original_title}
        </p>
        <span>
        ${movie.release_date}
        </span>
        </div>
        </div>
        `;
    });
    movieListS.innerHTML = html;
}

displayMoviesDay(moviesDay)

let MovieListN = document.querySelector(".not__selected")
let MoviesWeek = await GetHomeMovies.getTrendingWeek()

function displayMoviesWeek(MoviesWeek) {
    
    let html = "";
    MoviesWeek.forEach((movie) => {
        console.log(movie);
        html += `
        <div class="content">
        <a class="icon">
        <i class="fa-solid fa-ellipsis" style="color: white;"></i>
        </a>    
        <ul class="functions">
        <li class="function" id="list">
        <a>
        <i class="fa-solid fa-list black" ></i>
        Добавить в список 
        </a>
        </li>
        <li class="function" id="like">
        <a>
        <i class="fa-solid fa-heart black" ></i>   
        Избранное
        </a>
        </li>
        <li class="function" id="bookmark">
        <a>
        <i class="fa-solid fa-bookmark black" ></i>
        Список отслеживания
        </a>
        </li>
        <li class="function" id="rate">
        <a>
        <i class="fa-solid fa-star black" ></i>
        Ваш рейтинг
        </a>
        </li>
        </ul>
        <img class="content__poster " src="${
            config.BASE_IMG_URL
        }${movie.poster_path}" width="150" height="225" >
        <div class="circle-progressbar">
        <div
        role="progressbar"
        aria-valuenow='${Math.round(movie.vote_average * 10)}'
        aria-valuemin="0"
        aria-valuemax="100"
        style='--value:${Math.round(movie.vote_average * 10) }' >
        
        </div>
        </div>
        <div class="content__text">
        <p class="content__text__heading">
        ${movie.original_title}
        </p>
        <span>
        ${movie.release_date}
        </span>
        </div>
        </div>
        `;
    });
    MovieListN.innerHTML = html;
}
displayMoviesWeek(MoviesWeek)