// addCartButton.addEventListener('click', addCartButtonHandler);

// function addCartButtonHandler(event) {
    //     const itemToAdd = products.find(item => item.id == event.target.dataset.product);
    //         cartArray.push(itemToAdd);
    //         console.log(cartArray);
    //         console.log(itemToAdd);
    //         console.log(products);
    //         console.log(event.target.dataset.product);
    // }

    
    // this function should be in the cartArray.js file

    const results = await fetch(productsURL);
const products = await results.json();