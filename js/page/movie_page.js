import * as Movie from "../apis/movie_page.js";
import config from "../../config.js";

export async function hero_all (id){
  let hero = document.querySelector(".movie_hero");
  let movie = document.querySelector(".movie");
  function getMovies(got) {
    function genre() {
      let genre = "";
      for (const i of got.genres) {
        genre += `<a href="#">${i.name}</a> ,`;
      }
      return genre;
    }
    // genre()
    let html = "";
    movie.style.cssText = `background-image: url("${config.BASE_IMG_URL}${got.backdrop_path}") ;`;
    html += `
    <img src="${config.BASE_IMG_URL}${
      got.poster_path
    }" width="300" height="450" style="border-radius: 20px;">
    
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
    <span class="movie_hero__text__title__small__runtime">${
      got.runtime
    } m</span>
    </div>
    </div>
    <ul class="movie_hero__text__actions">
    <li class="movie_hero__text__actions__progressbar">
    <div class="circle-progressbar movie_hero__text__actions__progressbar__bar">
    <div
    role="progressbar"
    aria-valuenow="${Math.round(got.vote_average * 10)}"
    aria-valuemin="0"
    aria-valuemax="100"
    style="--value: ${Math.round(got.vote_average * 10)}"
    ></div>
    </div>
    <p class="movie_hero__text__actions__progressbar__p">
    User Score
    </p>
    </li>
    <li class="movie_hero__text__actions__action">
    <i class="fa-solid fa-list" style="color:#ffffff;"></i>
    </li>
    <li class="movie_hero__text__actions__action favorite_add" id="true">
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
    `;
    hero.innerHTML = html;
  }
  Movie.getMovie(id).then((data) => {
    getMovies(data);
  });
}
// hero_all(569094)


export async function rec_all(id){
  let rec = document.querySelector(".rec");
  function recomendations(got) {
    let html = "";
    if(got.total_results == 0){
      html += `   
      <h3 class="rec__h3">
      Recomendations
      </h3>
      <p style="width: 1020px; font-size: 16px; font-family: Source Sans Pro;" >We don't have enough data to suggest any movies based on Heart of Stone. You can help by rating movies you've seen.</p>
      `
    }
    else{
      function lil() {
        let li = ""
        for (const i of got.results) {
          li += `
          <li class="rec__list__item">
          <img src="${config.BASE_IMG_URL}${
            i.backdrop_path
          }" width="250" height="141" style="border-radius: 20px;">
          <div class="rec__list__item__text">
          <p class="rec__list__item__text__p">
          ${i.title}
          </p>
          <span class="rec__list__item__text__span">
          ${Math.round(i.vote_average * 10)}%
          </span>
          </div>
          </li>
          `;
        }
        return li;
      }
      lil();
      html += `
    <h3 class="rec__h3">
    Recomendations
    </h3>
    
    <ul class="rec__list">
    ${lil()}
    </ul>
    `;
    }
    rec.innerHTML = html;
  }
  Movie.Recomendations(id).then((data) => {
    recomendations(data);
  });
}
// rec_all(569094)
export async function top_cast_all(id){
  let full_info__main = document.querySelector(".full_info__main");
  function main_cast(got) {
    let html = ``;
    let top_cast = got.cast;
    function lishka() {
      let lishka = "";
      for (let i = 0; i < 10; i++) {
        lishka += `
        <li class="full_info__main__top_cast__list__item" id = "${top_cast[i].id}">
        <img src="${config.BASE_IMG_URL}${top_cast[i].profile_path}" width="138" height="175" style="border-radius: 15% 15% 0% 0% / 10% 10% 0% 0% ;">
        <div class="full_info__main__top_cast__list__item__text">        
        <a class="full_info__main__top_cast__list__item__text__h3">
        ${top_cast[i].name}
        </a>
        <p class="full_info__main__top_cast__list__item__text__p">
        ${top_cast[i].character}
        </p>
        </div>
        </li>
        `;
      }
      return lishka;
    }
    
    html += `
    <div class="full_info__main">
    <div class="full_info__main__top_cast">
    <h2 class="full_info__main__top_cast__h2">
    Top Billed Cast
    </h2>
    <ul class="full_info__main__top_cast__list">
    ${lishka()}
    </ul>
    </div>
    </div>
    
    
    `;
    full_info__main.innerHTML = html;
  }
  Movie.Credits(id).then((data) => {
    main_cast(data);
  });
}
// top_cast_all(569094)
export async function keywords_all(id){
  let full_info__key = document.querySelector(".full_info__key");
  function main_keyinfo(got, main_key_key) {
    function lang() {
      let finder = got.original_language;
      for (const i of got.spoken_languages) {
        if (i.iso_639_1 == finder) {
          return i.name;
        }
      }
    }
    
    let html = ``;
    html += `
    <ul class="full_info__key__info">
    <li class="full_info__key__info__item">
    <strong>Status</strong>
    <p class="full_info__key__info__item__p">
    ${got.status}
    </p>
    </li>
    <li class="full_info__key__info__item">
    <strong>Original language</strong>
    <p class="full_info__key__info__item__p">
    ${lang()}
    </p>
    </li>
    <li class="full_info__key__info__item">
    <strong>Budget</strong>
    <p class="full_info__key__info__item__p">
    ${got.budget}$
    </p>
    </li>
    <li class="full_info__key__info__item">
    <strong>Revenue</strong>
    <p class="full_info__key__info__item__p">
    ${got.revenue}$
    </p>
    </li>
    </ul>
    <div class="full_info__key__keywords">
    ${main_key_key}
    </div>
    `;
    full_info__key.innerHTML = html;
  }
  function main_key_key(got) {
    function keywords() {
      let kalit = ``;
      if(got.keywords.length == 0){
        kalit += `<p class="ke_no"> No keywords have been added yet </p>`
      }
      else{
        for (const i of got.keywords) {
          kalit += `
          <a class="full_info__key__keywords__box__keyword" style="cursor: pointer;" id = "${i.id}">
          ${i.name}
          </a>
          `;
        }
      }
      return kalit;
    }
    let html = ``;
    html += `
    <p class="full_info__key__keywords__title">
    Keywords
    </p>
    <div class="full_info__key__keywords__box">
    ${keywords()}
    </div>
    `;
    return html;
  }
  Movie.getMovie(id).then(async (data) => {
    let keywords = await Movie.Keywords(id);
    main_key_key(keywords);
    main_keyinfo(data, main_key_key(keywords));
  });
}
// keywords_all(569094)
export async function coll_all (id){
  let coll_box = document.querySelector(".collection")
  function collection(got){
    let html = ``
    if(got.belongs_to_collection == null){

    }
    else{
      html += `
      <div class="collection__box" style="background-image: url(${config.BASE_IMG_URL}${got.belongs_to_collection.backdrop_path}) ;">
      <div class="collection__box__text">
      <div id="hell">
      <h3 class="collection__box__text__h3">Part of the ${got.belongs_to_collection.name}</h3>
      <p class="collection__box__text__p">Includes</p>
      <button class="collection__box__text__btn">
      VIEW THE COLLECTION
      </button>
      <div>
      </div>
      </div>
      `
    coll_box.innerHTML = html
    }
  }
  Movie.getMovie(id).then(data => collection(data))
  
}

let heart  = document.querySelector(".favorite_add")
heart.addEventListener("click",()=>{
  switch(heart.id){
    case "true":
      heart.id = "false"
    break;
    case "false":
      heart.id = "true"
      break;
  }
})