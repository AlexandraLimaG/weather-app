const apiKey = '9505fd1df737e20152fbd78cdb289b6a';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + apiKey;

const searchForm = document.querySelector('.search-form');
const cityInput = document.getElementById('name');
const cityName = document.getElementById('city-name');
const currentDate = document.getElementById('current-date');
const temperature = document.getElementById('temperature');
const weatherDesc = document.getElementById('weather-desc');
const windSpeed = document.getElementById('wind-speed');
const humidity = document.getElementById('humidity');


function formatDate() {
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    return new Date().toLocaleDateString('en-US', options);
}


async function fetchWeather(city) {
    try {
        const response = await fetch(apiUrl + '&q=' + city);
        const data = await response.json();
        console.log(data);
        console.log(apiUrl);
        if (data.cod === 200) {

            cityName.textContent = data.name;
            currentDate.textContent = formatDate();
            temperature.textContent = Math.round(data.main.temp);
            weatherDesc.textContent = data.weather[0].description;
            windSpeed.textContent = Math.round(data.wind.speed * 3.6);
            humidity.textContent = data.main.humidity;
        } else {
            alert('Cidade não encontrada. Por favor, tente novamente.');
        }
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        alert('Ocorreu um erro ao buscar os dados. Tente novamente mais tarde.');
    }
}


searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
        cityInput.value = '';
    }
});


window.addEventListener('load', () => {
    fetchWeather('São Paulo');
});