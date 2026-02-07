const giveawayEnd = new Date(2026, 4, 15, 11, 30, 0);   // 15 May 2026 11:30:00 AM

console.log(days, hours, minutes, seconds);
    const daysEl = document.querySelector(".days span");
    const hoursEl = document.querySelector(".hours span");
    const minsEl = document.querySelector(".minutes span");
    const secEl = document.querySelector(".seconds span");


// hours are the leftover hours after days are removed

const timer = setInterval(() => {
    const now = new Date();
    const diff = giveawayEnd - now;

    if(diff <= 0) {
        clearInterval(timer);
        console.log("Giveaway ended!");
        return;
    }

    const totalSeconds = Math.floor(diff / 1000);

    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor ((totalSeconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor ((totalSeconds % 3600) / 60);
    const seconds = Math.floor (totalSeconds % 60);
    
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minsEl.textContent = minutes;
    secEl.textContent = seconds;
    
}, 1000);

