import { baseUrl } from "../../constants/api.js"
import displayMessage from "../displayMessage.js";

const featuredUrl = baseUrl + "/products?featured=true";

export async function getFeatured() {
    const featuredContainer = document.querySelector(".home__featured");
    const message = document.querySelector(".message__container");
    
    try{
        const response = await fetch(featuredUrl);
        const json = await response.json();

        featuredContainer.innerHTML = "";
        json.forEach(function (featured) {
            featuredContainer.innerHTML += 
            `<div class="col-md-5 col-lg-3 shadow-sm p-3 mb-5 card p-0 rounded-0">
                <img class="card__image mb-2" src="${baseUrl + featured.image.url}" alt="${featured.image.alternativeText}.name">
                <div class="card-body p-0">
                    <h3>${featured.title}</h3>
                    <p class="${featured.price}">$20.55
                    </p>
                    <a href="product-page.html?id=${featured.id}" class="btn btn-primary stretched-link mt-3 shadow-none">View product</a>
                </div>
            </div>`;
        });

    }catch(error){
        displayMessage("error", "Something went wrong when loading the products", ".message__container");
    };

};