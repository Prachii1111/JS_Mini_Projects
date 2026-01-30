console.log("JS loaded");
const products = [
    {
        id: 1,
        name: "Macbook Pro",
        price: 250000,
        image: 'https://images.unsplash.com/photo-1651746817904-abc832733480?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
        id:2,
        name: 'I Phone 16 Pro',
        price: 144900,
        image: 'https://images.unsplash.com/photo-1738344858158-66f743afcf3d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
        id:3,
        name: 'Headphones',
        price: 5000,
        image: 'https://plus.unsplash.com/premium_photo-1761241878881-eae02c80e26c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8'
    },

    {
        id: 4,
        name: 'Watch',
        price: 75000,
        image: 'https://images.unsplash.com/photo-1620421895918-b4e8c86648fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D'
    },

    {
        id: 5,
        name: 'Speaker',
        price: 30000,
        image: 'https://images.pexels.com/photos/29617989/pexels-photo-29617989.jpeg'
    },

    {
        id: 6,
        name: 'Camera',
        price: 50000,
        image: 'https://images.pexels.com/photos/19753930/pexels-photo-19753930.jpeg'
    },
    
    
]

const container = document.getElementById("products-container");
const cartContainer = document.getElementById("cart-container");
const totalEl = document.getElementById("cart-total");

let cart = [];

function renderProducts() {
    container.innerHTML = "";   // clear first

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}"/>
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <button onClick="addToCart(${product.id})">Add to Cart</button>
        `;

        container.appendChild(card);
    });
}

renderProducts();

// Add products in cart
function addToCart(productId) {

    if (!productId) return;

    // 1. Find products from products array
    const product = products.find(p => p.id === productId);

    // 2. Check if product already exists in cart
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        // 3. Product exists => increase quantity
        cartItem.qty += 1;
    } else {
        // 3. Product not in cart -> add new item
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            qty: 1
        });
    }

    // 4. Update UI
    renderCart();
}

// render cart 
function renderCart() {
    cartContainer.innerHTML = "";

    let total = 0;

    // loop through cart 
    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;

        const row = document.createElement("div");
        row.className = "cart-row";

        row.innerHTML = `
            <span>${item.name} - ₹${item.price} * ${item.qty}</span>

            <div class="cart-actions">
                <button onClick="increaseQty(${item.id})">+</button>
                <button onClick="decreaseQty(${item.id})">-</button>
                <button onClick="removeFromCart(${item.id})">❌</button>
            </div>
        `;

        cartContainer.appendChild(row);
    });

    totalEl.textContent = `Total:  ₹${total}`;

}

// Increase qty
function increaseQty(productId) {
    const item = cart.find(item => item.id === productId);

    if(!item) return;

    item.qty += 1;
    renderCart();
}

function decreaseQty(productId) {
    const item = cart.find(item => item.id === productId);

    if (!item) return;

    if (item.qty > 1) {
        item.qty -= 1;
    } else {
        cart = cart.filter(item => item.id !== productId);
    }

    renderCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCart();
}