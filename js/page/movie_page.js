import * as Movie from "../apis/movie_page.js"
import  config from "../../config.js";
let hero = document.querySelector(".movie_hero")
let movie = document.querySelector(".movie")

function getMovies (got){ 
    function genre (){
        let genre = ""
        for (const i of got.genres) {
            genre += `<a href="#">${i.name}</a> ,`
        }
        return genre
    }
    // genre()
    let html = ""
    movie.style.cssText = `background-image: url("${config.BASE_IMG_URL}${got.backdrop_path}") ;`
    html +=`
    <img src="${config.BASE_IMG_URL}${got.poster_path}" width="300" height="450" style="border-radius: 20px;">
    
    <div class="movie_hero__text">
    <div class="movie_hero__text__title">
    <h1 class="movie_hero__text__title__h1">
    ${got.original_title}
    <span>
    (${got.release_date})
    </span>
    </h1>
    <div class="movie_hero__text__title__small">
    <span class="movie_hero__text__title__small__certification">PG</span>
    <span class="movie_hero__text__title__small__release">17/03/2009(UZ)</span>
    <span class="movie_hero__text__title__small__genre">
    ${genre()}
    </span>
    <span class="movie_hero__text__title__small__runtime">${got.runtime} m</span>
    </div>
    </div>
    <ul class="movie_hero__text__actions">
    <li class="movie_hero__text__actions__progressbar">
    <div class="circle-progressbar movie_hero__text__actions__progressbar__bar">
    <div
    role="progressbar"
    aria-valuenow="${Math.round(got.vote_average *10)}"
    aria-valuemin="0"
    aria-valuemax="100"
    style="--value: ${Math.round(got.vote_average *10)}"
    ></div>
    </div>
    <p class="movie_hero__text__actions__progressbar__p">
    User Score
    </p>
    </li>
    <li class="movie_hero__text__actions__action">
    <i class="fa-solid fa-list" style="color:#ffffff;"></i>
    </li>
    <li class="movie_hero__text__actions__action">
    <i class="fa-solid fa-heart" style="color:#ffffff;"></i>
    </li>
    <li class="movie_hero__text__actions__action">
    <i class="fa-solid fa-bookmark" style="color:#ffffff;"></i>
    </li>
    <li class="movie_hero__text__actions__action">
    <i class="fa-solid fa-star" style="color:#ffffff;"></i>
    </li>
    </ul>
    <div class="movie_hero__text__main">
    <h3 class="movie_hero__text__main__tagline">
    ${got.tagline}
    </h3>
    <div class="movie_hero__text__main__info">
    <h3 class="movie_hero__text__main__info__h3">
    Overview
    </h3>
    <p class="movie_hero__text__main__info__p">
    ${got.overview}
    </p>
    </div>
    <ul class="movie_hero__text__main__creators">
    <li class="movie_hero__text__main__creators__creator">
    <a href="#">Person</a>
    <span>profesion</span>
    </li>
    </ul>
    </div>
    </div>
    `
    hero.innerHTML = html
}
Movie.getMovie(569094).then(data=>{
    console.log(data);
    getMovies(data)
})

let rec = document.querySelector(".rec")
function recomendations(got){
    function lil (){
        let li = ""
        for (const i of got.results) {
            li+=`
            <li class="rec__list__item">
            <img src="${config.BASE_IMG_URL}${i.backdrop_path}" width="250" height="141" style="border-radius: 20px;">
            <div class="rec__list__item__text">
            <p class="rec__list__item__text__p">
            ${i.title}
            </p>
            <span class="rec__list__item__text__span">
            ${Math.round(i.vote_average *10)}%
            </span>
            </div>
            </li>
            `
        }
        return li
    }
    lil()
    let html = ""
    html +=`
    <h3 class="rec__h3">
    Recomendations
    </h3>
    
    <ul class="rec__list">
    ${lil()}
    </ul>
    `
    rec.innerHTML = html
}
Movie.Recomendations(569094).then(data =>{
    recomendations(data)
})

let full_info = document.querySelector(".full_info")
function main_cast (got){
    let html = ``
    html+=`
    <div class="full_info__main">
    <div class="full_info__main__top_cast">
        <h2 class="full_info__main__top_cast__h2">
            Top Billed Cast
        </h2>
        <ul class="full_info__main__top_cast__list">
            <li class="full_info__main__top_cast__list__item">
                <img src="./img/цифровой мир.jpg" width="138" height="175" style="border-radius: 15% 15% 0% 0% / 10% 10% 0% 0% ;">
                <div class="full_info__main__top_cast__list__item__text">        
                    <a href="" class="full_info__main__top_cast__list__item__text__h3">
                        Robert Douney Jr
                    </a>
                    <p class="full_info__main__top_cast__list__item__text__p">
                        Charachter
                    </p>
                </div>
            </li>
        </ul>
    </div>
</div>


    `
}
function main_keyword (got){
    let html = ``
    html+= `
    <div class="full_info__key">
    <ul class="full_info__key__info">
        <li class="full_info__key__info__item">
            <strong>Status</strong>
            <p class="full_info__key__info__item__p">
                INNer html
            </p>
        </li>
        <li class="full_info__key__info__item">
            <strong>Original language</strong>
            <p class="full_info__key__info__item__p">
                INNer html
            </p>
        </li>
        <li class="full_info__key__info__item">
            <strong>Budget</strong>
            <p class="full_info__key__info__item__p">
                INNer html
            </p>
        </li>
        <li class="full_info__key__info__item">
            <strong>Revenue</strong>
            <p class="full_info__key__info__item__p">
                INNer html
            </p>
        </li>
    </ul>
    <div class="full_info__key__keywords">
        <p class="full_info__key__keywords__title">
            Keywords
        </p>
        <div class="full_info__key__keywords__box">
            <a href="#" class="full_info__key__keywords__box__keyword">
                hero
            </a>
        </div>
    </div>
</div>`
}