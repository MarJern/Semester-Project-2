import createMenu from "./components/createMenu.js";
import displayMessage from "./components/displayMessage.js";
import { getToken } from "./utils/storage.js";
import { baseUrl } from "./constants/api.js";

const token = getToken();
if(!token) {
    document.location.href ="./index.html";
}

createMenu();

const form = document.querySelector(".add__form");
const name = document.querySelector("#productname");
const price = document.querySelector("#productprice");
const description = document.querySelector("#productdescription");
const featured = document.querySelector(".toggleFeaturedProduct").value;
const image = document.querySelector("#addImage");
const message = document.querySelector(".message__container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const nameValue = name.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const featuredValue = featured === "Yes" ? true : false;
    const imageValue = image.value.trim();

    console.log(featured);
    console.log(image);

    if (nameValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
        return displayMessage("warning", "Please prove proper values", ".message__container");
    }

    addProduct(nameValue, priceValue, descriptionValue, featuredValue, imageValue);
}

async function addProduct(nameValue, priceValue, descriptionValue, featuredValue, imageValue) {
    const url = baseUrl + "/products";
    const data = JSON.stringify({ title: nameValue, price: priceValue, description: descriptionValue, image: imageValue, featured: featuredValue });

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if(json.created_at) {
            displayMessage("success", "Product created", ".message__container");
            form.reset();
        }

        if(json.error) {
            displayMessage("error", json.message, ".message__container");
        }

        console.log(json);
    }
    catch(error) {
        console.log(error);
        displayMessage("error", "An error occurred", ".message__container");
    }
}
