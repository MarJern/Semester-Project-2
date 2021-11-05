import getCart from "./getCart.js";
import saveCart from "./saveCart.js";

export default function handleCartClick() {
    this.classList.toggle("fa-shopping-cart");
    this.classList.toggle("fa-cart-plus");

    const id = this.dataset.id;

    const cart = getCart();

    // find item in cart
    const cartItem = cart.find(function (item) {
        return item.id === id;
    });

    // item is not in the cart
    // add it
    if (cartItem === undefined) {
        const newItem = { id: id };
        cart.push(newItem);
        saveCart(cart);
    } else {
        // item is in the cart
        // remove it
        const newCart = cart.filter((item) => item.id !== id);
        saveCart(newCart);
    }
}