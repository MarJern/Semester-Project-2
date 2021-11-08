import createMenu from "./components/createMenu.js";
import { getProducts } from './components/productspage/getProducts.js'

createMenu();
getProducts();

const searchInput = document.querySelector(".search__input");

searchInput.onkeyup = function() {
    console.log(event);
    const searchValue = event.target.value.trim().toLowerCase();

    const filterProducts = getProducts.filter(function (product) {
        if (product.full_name.toLowerCase().startsWith(searchValue)) {
            return true;
        };
    });
    
};


