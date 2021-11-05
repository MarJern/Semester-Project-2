import { CART_KEY } from "./cartSettings.js";

export default function getCart() {
    const cart = localStorage.getItem(CART_KEY);

    if (cart === null) {
        return [];
    } else {
        return JSON.parse(cart);
    }
}