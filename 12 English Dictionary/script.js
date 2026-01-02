const container = document.querySelector(".container");
const infoText = document.querySelector(".info-text");
const searchInput = document.querySelector(".search-input");
const title = document.querySelector(".title");
const meaning = document.querySelector(".meaning");
const audioField = document.getElementById("audio");
const meaningContainer = document.querySelector(".meaning-container");

meaningContainer.style.display = "none";

searchInput.addEventListener("keyup", (e) => {

    if (e.key === "Enter" && searchInput.value.trim() !== "") {
        fetchMeaning(searchInput.value.trim());
    }    
});

async function fetchMeaning(word) {
    try {
        infoText.style.display = "none";
        container.classList.add("active");

        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const response = await fetch(url);
        const data = await response.json();

        if(!response.ok) {
            throw new Error("Word not found");
        }

        const wordTitle = data[0].word;
        const definition = data[0].meanings[0].definitions[0].definition;

        title.textContent = wordTitle;
        meaning.textContent = definition;

        // audio 
        const phonetics = data[0].phonetics;
        const audio = phonetics.find(p => p.audio)?.audio;

        if(audio) {
            audioField.src = audio;
            audioField.style.display = "block";
        } else {
            audioField.style.display = "none";
        }

        meaningContainer.style.display = "flex";

    } catch (error) {
        meaningContainer.style.display = "none";
        infoText.style.display = "block";
        infoText.textContent = "❌ Word not founc. Try another";
        container.classList.remove("active");
    }        
}
