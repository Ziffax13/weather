function getWeather() {
    const apiKey = 'd77e8a80bfcc7551c3135a39d716ce92';
    const cityInput = document.getElementById('cityInput').value || 'Odessa'; 
    const weatherElement = document.getElementById('weather');
    const iconw = document.getElementById('img');
    const cityName = document.getElementById('cityName');
    const temperatureDiv = document.getElementById('temperature');
    const descriptionDiv = document.getElementById('description');
    const countryDiv = document.getElementById('country');
    const humidityDiv = document.getElementById('humidity');
    const windDiv = document.getElementById('wind');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            cityName.innerText = data.name;
            iconw.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

            temperatureDiv.innerText = `Температура: ${data.main.temp}°C`;
            descriptionDiv.innerText = `Описание: ${data.weather[0].description}`;
            countryDiv.innerText = `Страна: ${data.sys.country}`;
            humidityDiv.innerText = `Влажность: ${data.main.humidity}%`;
            windDiv.innerText = `Скорость ветра: ${data.wind.speed} м/с`;
        })
        .catch((error) => {
            console.error('Произошла ошибка:', error);
        });
}

window.addEventListener('DOMContentLoaded', getWeather);
