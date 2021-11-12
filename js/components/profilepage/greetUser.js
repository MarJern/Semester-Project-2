import { getUsername } from "../../utils/storage.js";

export function greetUser() {
    const greetUserContainer = document.querySelector(".username");

    const username = getUsername();

    if(username) {
        greetUserContainer.innerHTML = `<h1>Hello ${username}</h1>`;
    }
};