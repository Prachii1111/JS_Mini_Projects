const btn = document.getElementById("weather-btn");
const input = document.getElementById("text-input");
const weatherDataEl = document.getElementById("weather-data");

const API_KEY = "";

btn.addEventListener("click", (e) => {
    e.preventDefault();
    fetchWeather();
})

async function fetchWeather() {

    try {
        const city = input.value.trim();
        console.log("City:", city);

        if(!city) {
            console.log("Please enter a city name");
            return;
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        const icon = data.weather[0].icon;
        console.log(icon);

        const temperature = Math.round(data.main.temp);
        console.log(temperature);

        const description = data.weather[0].description;
        console.log(description);

        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind Speed: ${data.wind.speed}m/s`
        ];

        weatherDataEl.querySelector(".icon")
        .innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather Icon">`;

        weatherDataEl.querySelector(".temperature")
        .textContent = `${temperature}°C`;

        weatherDataEl.querySelector(".description")
        .textContent = `${description}`;

        weatherDataEl.querySelector(".details")
        .innerHTML = details.map((detail) => `<div>${detail}</div>`).join("");

    } catch (error) {
        weatherDataEl.querySelector(".icon")
        .innerHTMl = "";
        weatherDataEl.querySelector(".temperature")
        .textContent = "";
        weatherDataEl.querySelector(".description")
        .textContent = "An error happened, please try again later";
        weatherDataEl.querySelector(".details").innerHTML = "";
    }
}

