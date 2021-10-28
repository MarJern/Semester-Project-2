import { baseUrl } from "../../constants/api.js";
import displayMessage from "../displayMessage.js";

const productsURL = baseUrl + "/products";

export async function getProducts() {
    const productsContainer = document.querySelector(".products__container");
    

    try {
        const results = await fetch(productsURL);
        const json = await results.json();
        console.log(json);

        productsContainer.innerHTML = "";

        json.forEach(function (products) {
            productsContainer.innerHTML += 
            `<div class="col-md shadow-sm p-3 mb-5 rounded home__featured__card">
                <img src="${baseUrl + products.image.url}" class="card-img-top home__featured__image" alt="${products.image.alternativeText}">
                <div class="card-body">
                    <h3>${products.title}</h3>
                    <p class="card-text">$${products.price}</p>
                    <a href="product-page.html?id=${products.id}" class="btn btn-primary stretched-link">View product</a>
                </div>
            </div>`;
        
        });

    }catch(error) {
        displayMessage("error", error, ".products__container");
    };

};