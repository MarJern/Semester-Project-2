import { baseUrl } from "../../constants/api.js";
import displayMessage from "../displayMessage.js";

const message = document.querySelector(".message_container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get ("id");

if(!id) {
    document.location.href ="/index.html";
}

const productUrl = baseUrl + "/products/" + id;

export async function productName() {

    try {
        const response = await fetch(productUrl);
        const name = await response.json();
        const titleContainer = document.querySelector(".product__header");

        titleContainer.innerHTML +=`<h1>${name.title}</h1>`;
    
    }catch(error) {
        displayMessage("error", error, ".product__container");
    }
};

export async function breadcrumbName() {

    try {
        const response = await fetch(productUrl);
        const name = await response.json();
        const breadcrumbContainer = document.querySelector(".breadcrumb__list");

        breadcrumbContainer.innerHTML +=`<li class="breadcrumb-item active" aria-current="page">${name.title}</li>`;
    
    }catch(error) {
        displayMessage("error", error, ".message_container");
    }
};