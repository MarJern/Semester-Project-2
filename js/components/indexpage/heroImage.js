import { baseUrl } from "../../constants/api.js";
import displayMessage from "../displayMessage.js";

const heroUrl = baseUrl + "/home";

export async function getHeroImage() {
    const heroContainer = document.querySelector(".hero__container");
    const message = document.querySelector(".message_container");

    try{
        const response = await fetch(heroUrl);
        const json = await response.json();
        console.log(json);

        document.getElementById("hero__image").style.backgroundImage = "url(`${baseUrl + json.hero_banner.url}`)";

        // heroContainer.innerHTML = "";
        // json.forEach(function(hero) {
        //     heroContainer.innerHTML += 
        //     `<div class="container" style="background-image: url(${baseUrl + hero.hero_banner.url})">
        //     </div>`;
        // });

    }catch(error) {
        displayMessage("error", "Something went wrong when loading the content", ".message_container");
    };
};