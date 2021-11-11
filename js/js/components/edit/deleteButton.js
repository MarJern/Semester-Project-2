import { baseUrl } from "../../constants/api.js";
import { getToken } from "../../utils/storage.js";
import displayMessage from "../displayMessage.js"

export default function deleteButton(id) {
    const container = document.querySelector(".delete__container");

    container.innerHTML += `<button type="button" class="btn btn-primary delete__button my-3">Delete product <i class="fas fa-trash-alt"></i></button>`;

    const button = document.querySelector(".delete__button");
    const message = document.querySelector(".message__container");
    
    button.onclick = async function () {
        console.log(button);

        const doDelete = confirm("Are you sure that you want to delete this product?");

        if (doDelete) {
            const url = baseUrl + "/products/" + id;
        
            const token = getToken();

            const options = {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            try{
                const response = await fetch(url, options);
                const json = await response.json();

                location.href = "/index.html";

            } catch(error){
                displayMessage("error", "An error occurred.", ".message__container");
            }

        };
    };
};