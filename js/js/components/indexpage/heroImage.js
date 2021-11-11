import { baseUrl } from "../../constants/api.js";
import displayMessage from "../displayMessage.js";

const heroUrl = baseUrl + "/home";

export async function getHeroImage() {
    const heroContainer = document.querySelector(".hero__container");
    try{
        const response = await fetch(heroUrl);
        const json = await response.json();
        console.log(json);
        console.log(json.hero_banner.url);

        heroContainer.innerHTML += 
            `<img class="card__image mb-2" src="${baseUrl + json.hero_banner.url}" alt="">`;
    }catch(error) {
        displayMessage("error", "Something went wrong when loading the content", ".hero__container");
    };
};