import { baseUrl } from "../../constants/api.js";
import displayMessage from "../displayMessage.js";

const productsURL = baseUrl + "/products";

export async function editProducts() {
    const editContainer = document.querySelector(".edit__container");
    const message = document.querySelector(".message_container");
    

    try {
        const results = await fetch(productsURL);
        const json = await results.json();
        console.log(json);

        editContainer.innerHTML = "";

        json.forEach(function (edit) {
            editContainer.innerHTML += 
            `<div class="col-md shadow-sm p-3 mb-5 rounded home__featured__card">
                <div class="card-body">
                    <h3>${products.title}</h3>
                    <p class="card-text">$${products.price}</p>
                    <a href="product-page.html?id=${products.id}" class="btn btn-primary stretched-link">View product</a>
                </div>
            </div>
            
            <div class="row no-gutters">
                        <div class="col-xs-4">
                            <a href="#"><img src="${baseUrl + edit.image.url}" alt="..."></a>
                        </div>
                        <div class="col-xs-8">
                            <div class="card-body">
                                <a href="#"><h5 class="card-title">Card title</h5></a>
                                <p class="card-text">$20.55</p>
                                <div class="row edit__amount">
                                    <i class="fas fa-minus-circle"></i>
                                    <div class=""></div>
                                    <i class="fas fa-plus-circle"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <i class="fas fa-trash-alt"></i>
                        </div>
                    </div>`;
        
        });

    }catch(error) {
        displayMessage("error", error, ".message__container");
    };

};