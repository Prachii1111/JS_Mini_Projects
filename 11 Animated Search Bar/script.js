const search_icon = document.getElementById("search-icon");
console.log(search_icon);
const searchContainer = document.querySelector(".search-container");

search_icon.addEventListener("click", () => {
    searchContainer.classList.toggle("active");
});