import createMenu from "./components/createMenu.js";
import { baseUrl} from "./constants/api.js";
import displayMessage from "./components/displayMessage.js";
import { saveToken, saveUser } from "./utils/storage.js";

createMenu();

const loginForm = document.querySelector(".login__form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector(".message__container");

loginForm.addEventListener("submit", submitLoginForm);

function submitLoginForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const usernameValue = username.value.trim();
    const passwordValue =  password.value.trim();

    if(usernameValue.length === 0 || passwordValue.length === 0) {
        return displayMessage("warning", "Invalid values", ".message__container");
    }

    loginFunction(usernameValue, passwordValue);
}

async function loginFunction(username, password) {
    const url = baseUrl + "/auth/local";

    const data = JSON.stringify({ identifier: username, password: password });

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json"
        }

    };

    try {
        const response = await fetch(url, options);
        console.log(response);
        const json = await response.json();

        if (json.user) {
            saveToken(json.jwt);
            saveUser(json.user);

            location.href = "profile-page.html";
        }

        if (json.error) {
            displayMessage("Error", "Invalid login details", ".message__container");
        }

    } catch(error) {
        console.log(error);
    }
};

loginFunction();