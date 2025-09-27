const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');

// create a span element
const span = document.createElement('span');

let count = 0;
span.textContent = count;  // initial value
span.style.display = "block";
span.style.fontSize = "20px";   // styling for visibility 
span.style.margin = "10px 0";

increase.addEventListener('click', () => {
    count++;
    span.textContent = count;
});

decrease.addEventListener('click', () => {
    count--;
    span.textContent = count;
});

reset.addEventListener('click', () => {
    count = 0;
    span.textContent = count;
});

// 
const container = document.querySelector('.container');
const buttonDiv = document.getElementById('buttons');
container.insertBefore(span, buttonDiv);


