import { baseUrl } from "../../constants/api.js";
import { getToken } from "../../utils/storage.js";

export default function deleteButton() {
    const container = document.querySelector(".delete__container");

    container.innerHTML = `<button type="submit" class="btn btn-primary delete__button my-3">Delete product <i class="fas fa-trash-alt"></i></button>`;

    const button = document.querySelector(".delete__button");
    
    button.onclick = async function () {

        const doDelete = confirm("Are you sure that you want to delete til product?");

        if (doDelete) {
            const url = baseUrl + "/products/" + this.id;
        
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

            }

        };
    };
};