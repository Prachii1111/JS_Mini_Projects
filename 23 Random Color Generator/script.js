const colorBox = document.querySelectorAll(".color-box");
console.log(colorBox);

// # / 0-9 / a - z

function getRandomColor() {
    const chars = "0123456789abcdef";
    let combo = "#";

    for (let i=0; i< 6; i++) {
        combo += chars[Math.floor(Math.random() * chars.length)];
    }
    return combo;
}

colorBox.forEach(box => {
    const randomColor = getRandomColor();
    box.style.backgroundColor = randomColor;
    box.innerText = randomColor;
});

