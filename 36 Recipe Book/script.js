
// key - e6d17e75e43143faae754c60737c8f7b
// https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}
console.log("js loaded");

const recipeContainer = document.querySelector(".recipes-container");

const API_KEY = 'e6d17e75e43143faae754c60737c8f7b';

async function fetchReceipe() {
    // try {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
        const data = await response.json();
        console.log(data);

    // } catch {
        // const error = new Error("Error fetching data");
        // console.log("Error");
    // }

    let recipes = data.recipes;
    // return data.recipes;

    for(let i=0; i<=10; i++) {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        console.log(data.recipes[i].image);
        img.src = data.recipes[i].image;

        figure.appendChild(img);
    }
} 

fetchReceipe();

