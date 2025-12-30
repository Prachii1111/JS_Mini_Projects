const accessKey = "wybMHz5nRK_GfnKihaaFJ5a-FwXapoT3r-7bjnmJvlM";

const searchContainer = document.querySelector(".search-container");
const searchInpt = document.getElementById("search-input");
const searchBtn = document.querySelector(".search-btn");
const searchResult = document.querySelector(".search-results");
const showMoreBtn = document.getElementById("show-more-btn");

var inputData = "";
let page = 1;


async function fetchImages() {
    inputData = searchInpt.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    console.log(response);

    if (!response.ok) {
        console.error("API Error:", response.status);
        return;
    } 
    const data = await response.json();
    // console.log(data);

    if (page === 1) {
        searchResult.innerHTML = "";
    }

    const results = data.results;
    
    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");

        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description || "View Image";

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResult.appendChild(imageWrapper);
    });

    page++;

    if (page > 1) {
        showMoreBtn.style.display = "block";
    }
}

searchBtn.addEventListener("click", () => {
    inputData = searchInpt.value.trim();
    page = 1;
    fetchImages();
})

showMoreBtn.addEventListener("click", () => {
    fetchImages();
});


// 1] input in input bar  2] click btn (eventL)
// 2] api call with inputdata word in api  
// 3] store response 
// 4] how to insert in html and display images dynamically on UI
// create img element
// 5] show more --> 