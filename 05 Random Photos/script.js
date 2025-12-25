const btn = document.getElementById('btn');
const imageContainer = document.querySelector('.image-container');

btn.addEventListener("click", () => {
    limit = 10;
    addNewImages();
});

function addNewImages() {
    for( let index = 0; index < limit; index++) {
        const newImg = document.createElement('img');
        newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000
        )}`;
        imageContainer.appendChild(newImg);
    }
}