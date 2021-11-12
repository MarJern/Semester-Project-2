import logoutButton from "../logout.js";

export function createProfileMenu() {
    const profileMenu = document.querySelector(".profile__menu");

    profileMenu.innerHTML =
        `<a href="index.html" class="list-group-item border-0 border-bottom pb-3" id="logout"><i class="fas fa-sign-out-alt profile__icon"></i>Logout </a>
        <a href="add-product.html" class="list-group-item border-0 border-bottom py-3"><i class="fas fa-plus profile__icon"></i>Add product</a>
        <a href="edit-list.html" class="list-group-item border-0"><i class="fas fa-edit profile__icon pt-3"></i>Edit product</a>
        `;

        logoutButton();
}