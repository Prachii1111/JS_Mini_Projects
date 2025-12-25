const monthEl = document.querySelector(".date h1");
const fullDateEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const monthIndx = new Date().getMonth();
console.log(monthIndx);
const lastDay = new Date(new Date().getFullYear(), monthIndx + 1, 0).getDate();
console.log(lastDay);
const firstDay = (new Date(new Date().getFullYear(), monthIndx, 1).getDay() + 6) % 7;
console.log(firstDay);

monthEl.innerText = months[monthIndx];
fullDateEl.innerText = new Date().toDateString();

let days = "";
for (let i = firstDay; i > 0; i--) {
    days += `<div class="empty"></div>`;
}
for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate()) {
        days += `<div class="today">${i}</div>`;
    } else {
        days += `<div>${i}</div>`;
    }
}
daysEl.innerHTML = days;
