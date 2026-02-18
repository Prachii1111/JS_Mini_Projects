console.log("loaded");
const productContainer = document.querySelector(".product-container");
const productList = document.createElement("div");
productList.classList.add("product-list");

let cart = [];

async function fetchProducts() {
    try {
        const response = await fetch('./Data.json');
        const products = await response.json();

        console.log(products);

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
                    <button class="addToCart">Add to Cart</button>
                </div>
            `

            productList.appendChild(productCard);
            productContainer.appendChild(productList);
        })

    } catch(error) {
        console.log("Error Fetching data", error);
    }
}

fetchProducts();

productList.addEventListener("click", () => {
    
})
