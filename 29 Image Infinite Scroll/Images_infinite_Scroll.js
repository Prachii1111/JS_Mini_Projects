const container = document.querySelector(".container");
const loading = document.querySelector(".loading");

let allPhotos = [];
const LIMIT = 10;
// let visibleCount = 0;
let isLoading = false;
let page = 1;

async function fetchPhotos() {
    if(isLoading) return;
    isLoading = true;

    loading.style.display = "block";

    const ACCESS_KEY = "wybMHz5nRK_GfnKihaaFJ5a-FwXapoT3r-7bjnmJvlM";
    const url = `https://api.unsplash.com/photos?page=${page}&per_page=${LIMIT}&client_id=${ACCESS_KEY}`;
    
    const res = await fetch(url);
    allPhotos = await res.json();

    loading.style.display = "none";
    isLoading = false;

    showMorePhotos();
    page++;
}

const renderdIds = new Set();

function showMorePhotos() {

    allPhotos.forEach(photo => {
        if (renderdIds.has(photo.id)) return;

        renderdIds.add(photo.id);

        const card = document.createElement("div");
        card.classList.add("photo-card");
        
        const img = document.createElement("img");
        img.src = photo.urls.small;
        img.alt = photo.alt_description || "Unsplash image";

        card.appendChild(img);
        container.appendChild(card);
    });
}

// scroll detection

window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
        fetchPhotos();
    }
});

// Initial load
fetchPhotos();