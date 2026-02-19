console.log("loaded");
const productContainer = document.querySelector(".product-container");
const productList = document.createElement("div");
productList.classList.add("product-list");

let allProducts = [];
let cart = [];

async function fetchProducts() {
    try {
        const response = await fetch('./Data.json');
        const products = await response.json();

        console.log(products);
        allProducts = products;

        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            productCard.innerHTML = `
                <figure>
                    <img src="${product.image}">
                </figure>
                <div class="product-content">
                    <h2>${product.name}</h2>
                    <p>₹${product.price}</p>
                    <button class="addToCart" data-id="${product.id}">
                    Add to Cart</button>
                </div>
            `

            productList.appendChild(productCard);
        })

        productContainer.appendChild(productList);

    } catch(error) {
        console.log("Error Fetching data", error);
    }
}

fetchProducts();

const cartModal = document.createElement("div");
cartModal.classList.add("cart-modal");


productList.addEventListener("click", (e) => {
    console.log("Product List:", e.target);

    if(e.target.classList.contains("addToCart")) {
        
        const productId = Number(e.target.dataset.id);

        // Find product from original list 
        const selectedProduct = allProducts.find(
            p => p.id === productId
        );

        // check if already in cart 
        const existingItem = cart.find(
            item => item.id === productId
        );

        if(existingItem) {
            existingItem.quantity += 1; 
        } else {
            cart.push({
                ...selectedProduct, 
                quantity: 1 
            });
        }
        console.log(cart);

        renderCart();
    }
});


// ----------- DELETE ITEM 
cartModal.addEventListener("click", (e) => {
    console.log("Target:", e.target);

    if(e.target.classList.contains("delete-btn")) {
        let id = Number(e.target.dataset.id);

        cart = cart.filter(item => item.id !== id);

        renderCart();
    }
});


// ---------- RENDER CART UI
function renderCart() {
    const CartTotal = updateTotal();
        console.log("CartTotal:", CartTotal);

        // rendering selected items 
        cartModal.innerHTML = "";   // cleart first
        cartModal.innerHTML = `
        <h2 class="total-items">Your Cart  (${cart.length})</h2>`;

        cart.forEach(item => {
            cartModal.innerHTML += `
                <div class="cart-items">
                    <div class="left">
                        <h2>${item.name}</h2>
                        <div class="cart-nos">
                            <strong>${item.quantity}x</strong>
                            <span>₹${item.price}</span>
                        </div>
                    </div>

                    <div class="right">
                        <img class="delete-btn" src="./Images/remove.png" 
                        data-id="${item.id}">
                    </div>
                </div>
        `
        })

        cartModal.innerHTML += `
            <div class="final-total">
                <span>Order Total</span>
                <strong>₹${CartTotal}</strong
            </div>
        `
        productContainer.appendChild(cartModal);
}

function updateTotal() {
    const total = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    return total;
}

