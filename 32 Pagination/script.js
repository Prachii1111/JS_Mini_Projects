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
    "https://images.pexels.com/photos/29515090/pexels-photo-29515090.jpeg"
]

const container = document.querySelector(".container");

const itemsPerPage = 5;
let currentPage = 1;

function renderPage() {
    container.innerHTML = "";

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginatedImages = images.slice(startIndex, endIndex);

    paginatedImages.forEach(image => {
        const card = document.createElement("div");
        card.className = "card";
        const img = document.createElement("img");
        img.src = image;
        img.alt = "nature images";

        card.appendChild(img);
        container.appendChild(card);
    })
}

renderPage();

// nexpage

function nextPage() {
    if (currentPage < Math.ceil(images.length / itemsPerPage)) {
        currentPage++;
        renderPage();
    }
}

// prevpage
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderPage();
    }
}