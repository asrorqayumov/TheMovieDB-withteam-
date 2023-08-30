import config from "../../config.js"
import * as actorapi from "../apis/actor.js"

export async function barabara(id){
    function displayactors(actors) {
        let html = "" ;
        actors.forEach((actors) => {
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
            </div>
            </div>
            `
        });
    }
    actorapi.getPopularMovies(id).then(data => data)
}