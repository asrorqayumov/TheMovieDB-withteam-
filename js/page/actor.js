import config from "../../config.js"
import * as actors from "../apis/actor.js"

export async function Main_Actor(id){
    function main_actor(actors) {
        let html = "" ;
        let her = document.querySelector(".actor__section__container")
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
        <p class="gender api">${actors.gender}</p>
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
                    <h3 class="actor_movie_simple_h3">
                        Movies
                    </h3>
                    <ul class="actor_movie_simple_list">
                        <li class="actor_movie_simple_list_item">
                            <img class="actor_movie_simple_list_item_poster" width="130" height="135">
                            <p class="actor_movie_simple_list_item title">
                                Title
                            </p>
                        </li>
                        <li class="actor_movie_simple_list_item">
                            <img class="actor_movie_simple_list_item_poster" width="130" height="135">
                            <p class="actor_movie_simple_list_item title">
                                Title
                            </p>
                        </li>
                        <li class="actor_movie_simple_list_item">
                            <img class="actor_movie_simple_list_item_poster" width="130" height="135">
                            <p class="actor_movie_simple_list_item title">
                                Title
                            </p>
                        </li>
                        <li class="actor_movie_simple_list_item">
                            <img class="actor_movie_simple_list_item_poster" width="130" height="135">
                            <p class="actor_movie_simple_list_item title">
                                Title
                            </p>
                        </li>
                        <li class="actor_movie_simple_list_item">
                            <img class="actor_movie_simple_list_item_poster" width="130" height="135">
                            <p class="actor_movie_simple_list_item title">
                                Title
                            </p>
                        </li><li class="actor_movie_simple_list_item">
                            <img class="actor_movie_simple_list_item_poster" width="130" height="135">
                            <p class="actor_movie_simple_list_item title">
                                Title
                            </p>
                        </li>
                    </ul>
                </div>
        </div>
        </div>
        `
        her.innerHTML = html
    }
    actors.getActorInfo(id).then(data => main_actor(data))
};
actors.Actor_Movies(30614).then(data => console.log(data))