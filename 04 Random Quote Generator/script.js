const button = document.getElementById('btn');
const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');

const apiURL = "https://api.quotable.io/random";

async function getQuote() {
    try {
        button.innerText = "Loading...";
        button.disabled = true;
        quoteEl.innerText = "Updating...";
        authorEl.innerText = "Updating...";

        const response = await fetch(apiURL);
        const data = await response.json();

        const quoteContent = data.content;
        const quoteAuthor = data.author;

        quoteEl.innerText = quoteContent;
        authorEl.innerText = "~ " + quoteAuthor;

        button.innerText = "Get a quote";
        button.disabled = false;

        console.log(data);
    } catch (error) {
        console.log(error);
        quoteEl.innerText = "An error happened, try again later";
        authorEl.innerText = "An error happened";
        button.innerText = "Get a quote";
        button.disabled = false;
    }
}

getQuote();

button.addEventListener("click", getQuote);