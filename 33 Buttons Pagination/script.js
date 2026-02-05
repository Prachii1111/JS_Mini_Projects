console.log("JS loaded");

const images = [
    "https://images.pexels.com/photos/145685/pexels-photo-145685.jpeg",
    "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg",
    "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg",
    "https://images.pexels.com/photos/29973777/pexels-photo-29973777.jpeg",
    "https://images.pexels.com/photos/29288699/pexels-photo-29288699.jpeg",
    "https://images.pexels.com/photos/18996821/pexels-photo-18996821.jpeg",
    "https://images.pexels.com/photos/50594/sea-bay-waterfront-beach-50594.jpeg",
    "https://images.pexels.com/photos/29973789/pexels-photo-29973789.jpeg",
    "https://images.pexels.com/photos/35888/amazing-beautiful-breathtaking-clouds.jpg",
    "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg",
    "https://images.pexels.com/photos/29922300/pexels-photo-29922300.jpeg",
    "https://images.pexels.com/photos/2090645/pexels-photo-2090645.jpeg",
    "https://images.pexels.com/photos/4338020/pexels-photo-4338020.jpeg",
    "https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg",
    "https://images.pexels.com/photos/29515090/pexels-photo-29515090.jpeg",
    "https://images.unsplash.com/photo-1769112112632-26be33f821b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1768409234914-96f61529b7e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1768662473131-b80660c4e03b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1767997877898-59c8f409e45e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExNXw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1764957080687-9569e738a238?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3M3w2c01WalRMU2tlUXx8ZW58MHx8fHx8"
];

const itemsPerPage = 5;
let currentPage = 1;

const totalPages = Math.ceil(images.length / itemsPerPage);

const container = document.querySelector(".container");

function renderItems() {
    container.innerHTML = "";

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const pageItems = images.slice(startIndex, endIndex);

    pageItems.forEach(image => {
        const card = document.createElement("div");
        card.className = "card";
        const img = document.createElement("img");
        img.src = image;
        img.alt = "nature images"; 

        card.appendChild(img);
        container.appendChild(card);
    });
}

// renderItems();
// Render page numbers
const pageNumbersDiv = document.getElementById("pageNumbers");

function renderPageNumbers() {
    pageNumbers.innerHTML= "";

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.classList = "btns";
        btn.textContent = i;

        // highlight active page
        if (i === currentPage) {
            btn.classList.add("active");
        }

        btn.addEventListener("click", () => {
            currentPage = i;
            updateUI();
        });

        pageNumbersDiv.appendChild(btn);
    }
}

document.getElementById("prev").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        updateUI();
    }
});

document.getElementById("next").addEventListener("click", () => {
    if (currentPage < totalPages) {
        currentPage++;
        updateUI();
    }
});

function updateUI() {
    renderItems();
    renderPageNumbers();
}

updateUI();
