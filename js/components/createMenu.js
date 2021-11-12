import { getUsername } from "../utils/storage.js";
import logoutButton from "./logout.js";

export default function createMenu() {

    const { pathname } = document.location;

    const menuContainer = document.querySelector(".navbar__container");

    const username = getUsername();

    let loginLink = `<a class="nav-link ${pathname === "/login.html" ? "active" : ""}" href="/login.html">Admin login</a>`;

    if (username) {
        loginLink = `<a class="nav-link ${pathname === "/profile-page.html" ? "active" : ""}" href="/profile-page.html">Admin page</a>`;    
    }

    menuContainer.innerHTML = `
    <div class="logo order-2 order-lg-1">
        <a class="navbar-brand order-2" href="/index.html">Sneaks</a>
    </div>
    <button class="navbar-toggler order-1 order-lg-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="nav__icons order-3">
        <a href="/cart.html"><i class="fas fa-shopping-bag navbar-link p-3 fa-lg"></i></a>
    </div>
    <div class="collapse navbar-collapse flex-shrink order-lg-2" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
                <a class="nav-link ${pathname === "/" || pathname === "/index.html" ? "active" : ""}" href="/index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link ${pathname === "/products.html" ? "active" : ""}" href="/products.html">Products</a>
            </li>
            <li class="nav-item">
                ${loginLink}
            </li>
        </ul>
    </div`;


    logoutButton();
};

