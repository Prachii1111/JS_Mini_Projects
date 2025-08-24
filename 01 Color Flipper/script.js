document.getElementById('btn').addEventListener("click", function() {
    let colors = ["red", "blue", "yellow", "green", "pink"];

    let randomIndex = Math.floor(Math.random() * colors.length);
    document.querySelector('.container').style.backgroundColor = colors[randomIndex] ;

    let randomColor = colors[randomIndex];
    document.getElementById('text').innerText = `Background color : ${randomColor}`;
    document.getElementById('text').style.color = randomColor;
});

// Random Hex Flipper 
// document.getElementById('btn').addEventListener("click", function() {

//     let hex = [0, 1, 2, 3, 4 , 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//     let color = '#';

//     for(let i=0; i < 6; i++) {
//         let randomIndex = Math.floor(Math.random()* hex.length);
//         color += hex[randomIndex];
//     }

//     document.querySelector("main").style.backgroundColor = color;

//     console.log(color);
// })