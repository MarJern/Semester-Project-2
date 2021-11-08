import { baseUrl } from "../../constants/api.js";
import displayMessage from "../displayMessage.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get ("id");

if(!id) {
    document.location.href ="/index.html";
}

const productUrl = baseUrl + "/products/" + id;

export async function breadcrumbName() {

    try {
        const response = await fetch(productUrl);
        const name = await response.json();
        const breadcrumbContainer = document.querySelector(".breadcrumb__list");

        breadcrumbContainer.innerHTML +=`<li class="breadcrumb-item active" aria-current="page">${name.title}</li>`;
    
    }catch(error) {
        displayMessage("error", "error", ".breadcrumb__list");
    }
};

export async function setTitle() {

    try {
        const response = await fetch(productUrl);
        const name = await response.json();

        document.title = `Sneaks | ${name.title}`;
    
    }catch(error) {
        displayMessage("error", "error", ".message__container");
    }
};

export async function setMeta() {

    try {
        const response = await fetch(productUrl);
        const name = await response.json();

        document.getElementsByTagName("META")[3].content = `Edit product by the name of ${name.title}.`;
    
    }catch(error) {
        displayMessage("error", "error", ".message__container");
    }
};