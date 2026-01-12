const profiles = [
    { 
        imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "MARIA FERGUSON",
        title: "The Boss",
        description: "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami."
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "PETER SMITH",
        title: "Product Designer",
        description: "Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo."
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1658196253174-154270bcffa1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "KURSAT GUNEY",
        title: "Manager",
        description: "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache."
    }
];

const image = document.getElementById("image");
const name = document.querySelector(".heading");
const title = document.querySelector(".job-title");
const desc = document.querySelector(".description");

const prevBtn = document.querySelector(".arrow.left");
const nextBtn = document.querySelector(".arrow.right");

let currentIndex = 0;
let autoSlide;

function showProfile(index) {
    const profile = profiles[index];

    image.src = profile.imageUrl;
    name.textContent = profile.name;
    title.textContent = profile.title;
    desc.textContent = profile.description;
}

function startAutoSlide() {
    autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % profiles.length;
        showProfile(currentIndex);
    }, 3000); // 3 seconds
}

function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

showProfile(currentIndex);
startAutoSlide();

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % profiles.length;
    showProfile(currentIndex);
    resetAutoSlide();
});


prevBtn.addEventListener("click", () => {
    currentIndex =
        (currentIndex - 1 + profiles.length) % profiles.length;
    showProfile(currentIndex);
    resetAutoSlide();
});
