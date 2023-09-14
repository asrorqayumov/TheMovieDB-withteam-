import config from "../../config.js"
import * as actors from "../apis/actor.js"

export async function Main_Actor(id){
    function main_actor(actors,movie) {
        let html = "" ;
        let her = document.querySelector(".actor__section__container")
        function gender (){
            let string = ``
            if(actors.gender == 2){
                string += `Male`
            }else if(actors.gender ==1){
                string += `Female`
            }else{
                string += `Unknown`
            }
            return string
        }
        html += `
        <div class="box">
        <div class="box1">
        <img class="actorimg" src="${config.BASE_IMG_URL}${actors.profile_path}" alt="actor" width="250" height="400">
        <div class="internet__box">
        <i class='bx bxl-facebook-circle'></i>
        <i class='bx bxl-twitter' ></i>
        <i class='bx bxl-instagram' ></i>
        <i class='bx bxl-tiktok' ></i>
        </div>
        <div class="personalinfo__box">
        <h2 class="title">Personal Info</h2>
        <div class="personal__box">
        <p>Known For</p>
        <p class="acting api">${actors.known_for_department}</p>
        </div>
        <div class="personal__box">
        <p>Gender</p>
        <p class="gender api">${gender()}</p>
        </div>
        <div class="personal__box">
        <p>Birthday</p>
        <p class="birthday api">${actors.birthday}</p>
        </div>
        <div class="personal__box">
        <p>Place of Birth</p>
        <p class="placeofbirth api">${actors.place_of_birth}</p>
        </div>
        </div>
        </div>
        <div class="box2">
        <h1 class="actor__name">${actors.name}</h1>
        <h2 class="biography__title">Biography</h2>
        <p class="biography">${actors.biography}</p>
        <div class="actor_movie_simple">
        
        </div>
        </div>
        </div>
        `
        her.innerHTML = html
        let prank = document.querySelector(".actorimg")
    prank.addEventListener("click",()=>{
        location.replace("https://youtu.be/GFq6wH5JR2A")
    })
        getmoviesActed(movie)
        function getmoviesActed(know){
            let s = ``
            s +=`
            <h3 class="actor_movie_simple_h3">
            Movies
            </h3>
            <ul class="actor_movie_simple_list">
            ${movie_credits(know)}
            </ul>
            `
            function movie_credits(got){
                let l = ``
                let movie = got.cast
                let numbers = [];
                while (numbers.length < 12) {
                    let randomNumber = Math.floor(Math.random() * (movie.length-2)) + 1;
                    
                    if (!numbers.includes(randomNumber)) {
                        numbers.push(randomNumber);
                    }
                }
                for (let i=0 ; i<=10; i++) {
                    let b = numbers[i]
                    l += `
                    <li class="actor_movie_simple_list_item" id = "${movie[b].id}">
                    <img class="actor_movie_simple_list_item_poster" width="130" height="195" src="${config.BASE_IMG_URL}${movie[b].poster_path}">
                    <p class="actor_movie_simple_list_item_title">
                    ${movie[b].original_title}
                    </p>
                    </li>
                    `
                }
                return l
            }
            let cat = document.querySelector(".actor_movie_simple")
            cat.innerHTML = s
        }
    }
    actors.getActorInfo(id).then((actor)=>{
        actors.Actor_Movies(id).then((movie)=>{
            main_actor(actor,movie)
        })
    })
    
};