const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const time = document.getElementById('timer');

let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    time.textContent = `${h}:${m}:${s}`;
}

function stopWatch() {
    seconds++;
    if(seconds === 60) {
        seconds = 0;
        minutes++;
        if(minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

start.addEventListener('click', () => {
    if (timer !== null) return; 
    timer = setInterval(stopWatch, 1000);
});

stop.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
});

reset.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    [hours, minutes, seconds] = [0, 0, 0];
    updateDisplay();
});