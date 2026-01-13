
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector("nav");
const overlay = document.querySelector(".overlay");

openBtn.addEventListener("click", () => {
    sidebar.classList.add("show-sidebar");
    overlay.classList.add("show-overlay");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
    overlay.classList.remove("show-overlay");
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
    overlay.classList.remove("show-overlay");
});
