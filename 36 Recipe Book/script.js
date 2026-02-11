
const recipeContainer = document.querySelector(".recipes-container");

const API_KEY = 'e6d17e75e43143faae754c60737c8f7b';

async function fetchRecipe() {
    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);

        if( !response.ok) {
            throw new Error('API request failed: ', + response.status);
        }

        const data = await response.json();

        const recipes = data.results;

        console.log(recipes);
        console.log("Length:", recipes.length);

        for(let i=0; i < recipes.length; i++) {
            const figure = document.createElement("figure");
            const img = document.createElement("img");
            const title = document.createElement("figcaption");

            img.src = recipes[i].image;
            title.textContent = recipes[i].title;


            figure.appendChild(img);
            figure.appendChild(title);
            recipeContainer.appendChild(figure);
        }  

    } catch {
        const error = new Error("Error fetching data");
        console.log("Error");
    }
} 

fetchRecipe();

