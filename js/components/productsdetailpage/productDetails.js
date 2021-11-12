import { baseUrl } from "../../constants/api.js";
import displayMessage from "../displayMessage.js";

// const productsURL = baseUrl + "/products";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get ("id");
let cartArray = [];

if(!id) {
    document.location.href ="./index.html";
}

const productUrl = baseUrl + "/products/" + id;


export async function productDetails() {

    try {
        const response = await fetch(productUrl);
        const details = await response.json();
        document.title = details.name;

        const productContainer = document.querySelector(".product__card");

        productContainer.innerHTML = `
        <img src="${baseUrl + details.image.url}" class="card-img-top rounded-0 card__image" alt="${details.image.name}">
        <div class="card-body p-0 pt-2 details">
            <h2 class="">${details.title}</h2>
            <div class="accordion" id="accordionExample">
                <div class="card product__details">
                    <div class="details__header p-0 mt-2">
                        <p class="mb-0">
                            <button class="btn btn-link btn-block text-left p-0 m-0 text-decoration-none text-transform-none" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span class="padding__wrapper details__btn">Details</span>
                                <i class="fas fa-chevron-down"></i>
                            </button>
                        </p>
                    </div>
                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body details__text">
                            ${details.description}
                        </div>
                    </div>
                </div>
            </div>
            <p class="card-text mt-2 details__price">
                $${details.price}
            </p>
            <button class="btn btn-primary mt-3 shadow-none cart__button" data-product="${details.id}" type="button">
                <span class="padding__wrapper">Add to cart</span>
                <i class="fas fa-shopping-bag"></i>
            </button>
        </div>`;

    }catch(error) {
        displayMessage("error", "Error when loading the product", ".product__card");
    }

    const addCartButton = document.querySelectorAll("button.cart__button");
        console.log(addCartButton);

        addCartButton.forEach(function(button){
            button.onclick = function(event) {
                cartArray.push(event.target.dataset.product); 
                console.log(cartArray);
            //    this line should look inside the function that loops the html and finds the item with the correct id
                // const itemToAdd = products.find(item => item.id === event.target.dataset.product);
                // cartArray.push(itemToAdd);
                // showCart(cartArray);
                // localStorage.setItem("cartList", JSON.stringify(cartArray));
            }
        });
};

function showCart(cartItems) {
    const cartContainer = document.querySelector(".cart__container");
    const totalContainer = document.querySelector(".total__container");

    cartContainer.innerHTML = "";
    let total = 0;

    cartItems.forEach(function (cartElement) {
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
    })

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

};

