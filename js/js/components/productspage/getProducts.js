import { baseUrl } from "../../constants/api.js";
import displayMessage from "../displayMessage.js";

const productsURL = baseUrl + "/products";

const results = await fetch(productsURL);
const products = await results.json();

export async function listProducts(data) {
    const productsContainer = document.querySelector(".products__container");
    
    try {

        productsContainer.innerHTML = "";

        data.forEach(function (products) {
            productsContainer.innerHTML += 
            `<div class="col-md-5 col-lg-3 shadow-sm p-3 mb-5 p-0 card rounded-0">
                <img src="${baseUrl + products.image.url}" class="card-img-top rounded-0 card__image" alt="${products.image.alternativeText}">
                <div class="card-body">
                    <h3>${products.title}</h3>
                    <p class="card-text">$${products.price}</p>
                    <a href="product-page.html?id=${products.id}" class="btn btn-primary stretched-link mt-3 shadow-none">View product</a>
                </div>
            </div>`;
        
        });

    }catch(error) {
        displayMessage("error", "Something went wrong when loading the products", ".products__container");
    };

};

listProducts(products);

const form = document.querySelector(".search__form");
const searchInput = document.querySelector(".search__input");

form.addEventListener("submit", submitSearch);

function submitSearch(event) {
    event.preventDefault();
    const searchValue = searchInput.value.toLowerCase().trim();
    console.log(searchValue);

    const filterProducts = json.filter(function(product) {
        if (product.title.toLowerCase().includes(searchValue) || product.description.toLowerCase().includes(searchValue)) {
            return product;
        };
    });
    console.log(filterProducts);
    

    // getProducts(filterProducts);

}