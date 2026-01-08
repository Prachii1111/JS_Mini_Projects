const btnEl = document.querySelector(".btn");
const rating = document.querySelectorAll(".rating");
const feedbackContainer = document.querySelector(".feedback-container");
const heading = document.querySelector(".heading");
const feedbackEl = document.querySelector(".feedback");
const feed = document.querySelector(".feed");

let clickedEl = "";

rating.forEach(r => {
    r.addEventListener("click", (e) => {
        rating.forEach(item => item.classList.remove("active"));
        r.classList.add("active");
        clickedEl = e.currentTarget.innerText;
    });
});

btnEl.addEventListener("click", () => {
        if (!clickedEl) {
            alert("Please select a rating first");
            return;
        }

        feedbackContainer.style.display = "none";
        feedbackEl.style.display = "block";
        feed.innerText = `Feedback: ${clickedEl}`;

});