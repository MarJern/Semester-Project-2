import { baseUrl} from "../../constants/api.js";
import displayMessage from "../displayMessage.js";


const heroUrl = baseUrl + "/home";

export async function getHeroImage() {
    const heroContainer = document.querySelector(".hero__container");
    try{
        const response = await fetch(heroUrl);
        const json = await response.json();

        heroContainer.innerHTML += 
            `<img class="hero__image mb-2 w-100 mb-0" src="${baseUrl + json.hero_banner.url}" alt="">`;
    }catch(error) {
        displayMessage("error", "Something went wrong when loading the content", ".hero__container");
    };
};