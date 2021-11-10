import { baseUrl } from "./constants/api.js";
import createMenu from "./components/createMenu.js";
import displayMessage from "./components/displayMessage.js";
import { getToken } from "./utils/storage.js";
import deleteButton from "./components/edit/deleteButton.js";
import { breadcrumbName, setTitle, setMeta } from './components/edit/editLinks.js'

const token = getToken();
if(!token) {
    document.location.href ="./index.html";
}

createMenu();
breadcrumbName();
setTitle();
setMeta();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get ("id");

if(!id) {
    document.location.href ="./index.html";
}

const productUrl = baseUrl + "/products/" + id;

const form = document.querySelector(".edit__form");
const name = document.querySelector("#productname");
const price = document.querySelector("#productprice");
const description = document.querySelector("#productdescription");
const featured = document.querySelector(".toggleFeaturedProduct");
const image = document.querySelector("#addImage");
const productId = document.querySelector("#id");
const message = document.querySelector(".message__container");
const loading = document.querySelector(".loading");

(async function () {
    try{
        const response = await fetch(productUrl);
        const details = await response.json();

        name.value = details.title;
        price.value = details.price;
        description.value = details.description;
        featured.value = details.featured;
        image.value = details.image;
        productId.value = details.id;

        deleteButton(details.id);

    } catch (error) {
        console.log(error);
    } finally {
        loading.style.display = "none";
        form.style.display = "block";
    }
})();


form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const nameValue = name.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const featuredValue = JSON.parse(featured.value)
    const imageValue = image.value.trim();
    const idValue = productId.value;

    if (nameValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0 || imageValue.length === 0) {
        return displayMessage("Error", "There seems to be an error", ".message__container");
    }

    editProduct(nameValue, priceValue, descriptionValue, featuredValue, imageValue, idValue );
}


async function editProduct(nameValue, priceValue, descriptionValue, featuredValue, imageValue, idValue) {

    const url = baseUrl + "/products/" + id;
    const data = JSON.stringify({ title: nameValue, price: priceValue, description: descriptionValue, image: imageValue, featured: featuredValue, id: idValue});

    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if(json.updated_at) {
            displayMessage("success", "The product has been successfully edited", ".message__container");
        }

        if(json.error) {
            displayMessage("error", json.message, ".message__container");
        }

        console.log(json);
    } catch(error) {
        console.log(error);
        displayMessage("error", "An error occurred when editing the product.", ".message__container");
    }
}