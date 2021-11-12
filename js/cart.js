import createMenu from "./components/createMenu.js";
// import displayMessage from "./components/displayMessage.js";
import { productDetails } from "./components/productsdetailpage/productDetails.js";
import { showCart } from "./components/productsdetailpage/productDetails.js";

createMenu();

const cartItems = JSON.parse(localStorage.getItem("cartList"));
const cartContainer = document.querySelector(".cart__container");
const totalContainer = document.querySelector(".total__container");

let total = "";
cartItems.array.forEach(function(cartElement) {
    total += cartElement.price;
    cartContainer.innerHTML += `
        <div class="row no-gutters">
            <div class="loading"></div>
                <div class="col-xs-4">
                    <a href="#"><img src="${baseUrl + cartElement.image.url}" class="card-img cart__product__image" alt="${cartElement.image.name}"></a>
                </div>
                <div class="col-xs-8">
                    <div class="card-body">
                        <a href="${cartElement.id}"><h5 class="card-title">${cartElement.title}</h5></a>
                        <p class="card-text">$${cartElement.price}</p>
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
        </div>`;
});

totalContainer.innerHTML = 
    `<h2>Order Summary</h2>
    <p>You order:</p>
    <div class="table-responsive table-sm">
        <table class="table">
            <tr>
                <td>Subtotal:</td>
                <td>$${total}</td>
            </tr>
            <tr>
                <td>Shipping:</td>
                <td>Free Shipping</td>
            </tr>
        </table>
    </div>
    <hr/>
    <div class="table-responsive table-sm">
        <table class="table">
            <tr>
                <td>Total:</td>
                <td>$${total}</td>
            </tr>
        </table>
    </div>
    <a href="#" class="btn btn-primary">To Checkout</a>`;


// export function showCart(cartItems) {
//     const cartContainer = document.querySelector(".cart__container");

//     cartItems.forEach(function (cartElement) {
//         cartContainer.innerHTML += `
//         <div class="row no-gutters">
//                     <div class="loading"></div>
//                     <div class="col-xs-4">
//                         <a href="#"><img src="" class="card-img cart__product__image" alt="..."></a>
//                     </div>
//                     <div class="col-xs-8">
//                         <div class="card-body">
//                             <a href="#"><h5 class="card-title">Card title</h5></a>
//                             <p class="card-text">$20.55</p>
//                             <div class="row edit__amount">
//                                 <i class="fas fa-minus-circle"></i>
//                                 <div class=""></div>
//                                 <i class="fas fa-plus-circle"></i>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-xs-4">
//                         <i class="fas fa-trash-alt"></i>
//                     </div>
//                 </div>`;
//     })
// };

// const cart = getCart();

// const itemContainer = document.querySelector(".item-container");
// const messageContainer = document.querySelector(".message__container");

// if (cart.length === 0) {
//     itemContainer.innerHTML = displayMessage("error", 'Cart is empty', ".message__container");;
// }

// cart.forEach((item) => {
//     itemContainer.innerHTML += `<div class="row no-gutters">
//                                     <div class="col-xs-4">
//                                         <a href="#"><img src="" class="card-img cart__product__image" alt="..."></a>
//                                     </div>
//                                     <div class="col-xs-8">
//                                         <div class="card-body">
//                                             <a href="#"><h5 class="card-title">Card title</h5></a>
//                                             <p class="card-text">$20.55</p>
//                                             <div class="row edit__amount">
//                                                 <i class="fas fa-minus-circle"></i>
//                                                 <div class=""></div>
//                                                 <i class="fas fa-plus-circle"></i>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="col-xs-4">
//                                         <i class="fas fa-trash-alt"></i>
//                                     </div>
//                                 </div>
    
//                                 <div class="item">                                    
//                                     <i class="fa fa-cart-plus"></i>
//                                     ${item.id}
//                                 </div>`;
// });

// const deleteCartButton = document.getElementsByClassName