import { baseUrl } from "../../constants/api.js";
import displayMessage from "../displayMessage.js";

const productsURL = baseUrl + "/products";

export async function editProducts() {
    const editContainer = document.querySelector(".edit__container");
    const messageContainer = document.querySelector(".message_container");
    

    try {
        const results = await fetch(productsURL);
        const json = await results.json();
        console.log(json);

        editContainer.innerHTML = "";

        json.forEach(function(edit) {
            editContainer.innerHTML += 
            `<div class="col-md shadow-sm p-3 mb-5">
                <a href="#"><img src="${baseUrl + edit.image.url}" class="card__image" alt="${edit.image.alternativeText}"></a>
                <div class="card-body">
                    <h3>${edit.title}</h3>
                    <p class="card-text">$${edit.price}</p>
                    <a href="editproduct.html?id=${edit.id}" class="btn btn-primary stretched-link">Edit product</a>
                </div>
            </div>
            `;
        
        });

    }catch(error) {
        displayMessage("error", "Something went wrong when loading the products", ".message__container");
    };

};