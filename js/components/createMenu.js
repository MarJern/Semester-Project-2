import { getUsername } from "../utils/storage.js";
// import logoutButton from "./logout";

export default function createMenu() {

    const { pathname } = document.location;

    const menuContainer = document.querySelector(".navbar__container");

    const username = getUsername();

    let loggedInIcon = `<a href"/login.html"><i class="fas fa-user navbar-link p-3 fa-lg"></i></a>`;

    if(username) {
        loggedInIcon = `<a href"/profilepage.html"><i class="fas fa-user navbar-link"></i></a>`;
    }

    let loggedInLink = `<a class="nav-link ${pathname === "/login.html" ? "active" : ""}" href="/login.html">Profile page</a>`;

    if (username) {
        loggedInLink = `<a class="nav-link ${pathname === "/login.html" ? "active" : ""}" href="/login.html">Profile page</a>`;    
    }

    menuContainer.innerHTML = `<a class="navbar-brand order-2" href="/index.html">Sneaks</a>
                                <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="nav__icons order-3">
                                    ${loggedInIcon}
                                    <a href""><i class="fas fa-shopping-bag navbar-link p-3 fa-lg"></i></a>
                                </div>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                        <li class="nav-item active">
                                            <a class="nav-link ${pathname === "/" || pathname === "/index.html" ? "active" : ""}" href="/index.html">Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link ${pathname === "/products.html" ? "active" : ""}" href="/products.html">Products</a>
                                        </li>
                                        <li class="nav-item">
                                            ${loggedInLink}
                                        </li>
                                    </ul>
                                </div`;


    // logoutButton();
};

