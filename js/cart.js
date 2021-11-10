import createMenu from "./components/createMenu.js";
import displayMessage from "./components/displayMessage.js";
import { productDetails } from "./components/productsdetailpage/productDetails.js";

createMenu();

const cart = getCart();

const itemContainer = document.querySelector(".item-container");
const messageContainer = document.querySelector(".message__container");

if (cart.length === 0) {
    itemContainer.innerHTML = displayMessage("error", 'Cart is empty', ".message__container");;
}

cart.forEach((item) => {
    itemContainer.innerHTML += `<div class="row no-gutters">
                                    <div class="col-xs-4">
                                        <a href="#"><img src="" class="card-img cart__product__image" alt="..."></a>
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
                                </div>
    
                                <div class="item">                                    
                                    <i class="fa fa-cart-plus"></i>
                                    ${item.id}
                                </div>`;
});

const deleteCartButton = document.getElementsByClassName