const emojisArray = [
    "fa-regular fa-face-angry",
    "fa-regular fa-face-frown",
    "fa-regular fa-face-meh",
    "fa-regular fa-face-smile",
    "fa-regular fa-face-grin"
];

const colors = [
    "emoji-red",
    "emoji-orange",
    "emoji-blue",
    "emoji-green",
    "emoji-darkgreen"
];

const emojis = document.querySelector(".emojis");
const ratings = document.querySelectorAll(".fa-star");

// remembers the previously selected star index
let currentRating = 0;

function updateEmoji(index) {
    emojis.innerHTML = ""; // remove previous emoji

    const icon = document.createElement("i");
    icon.className = `${emojisArray[index]} ${colors[index]}`;

    console.log("icon: ", icon);
    emojis.appendChild(icon);

    const em = document.querySelector(".emojis").innerHTML;
    console.log(em);
}

// default emoji
updateEmoji(0);


ratings.forEach((rating, index) => {
    rating.addEventListener("click", () => {
        
        // click on same star -> do nothing
        if (index === currentRating) return;

        currentRating = index;

        // rebuild stars (increase + decrease)
        ratings.forEach((star, i) => {
            star.classList.toggle("active", i <= currentRating);
        });

        // update emoji
        updateEmoji(index);
    });
});

