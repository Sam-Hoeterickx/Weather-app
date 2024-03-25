const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const apiKey = '81008b55b627b2df0efdfec719e78c88';
const weatherIcon = document.querySelector('.image');
let weather;
let location;
let imgUrl;



init();

function init () {
    getLocation();   
}
function fetchURL (city) {
    fetch(apiUrl + city + `&appid=${apiKey}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('data is parsed', data);
        weather = data;
        renderWeather();
    })
}

function renderWeather () {

    document.querySelector('.temp').innerHTML = `<h1>${weather.main.temp}°C</h1>`;
    document.querySelector('.location').innerHTML = `<h1>${weather.name}</h1>`;
    document.querySelector('.mintemp').innerHTML = `<h2>${weather.main.temp_min}°C</h2>`;
    document.querySelector('.maxtemp').innerHTML = `<h2>${weather.main.temp_max}°C</h2>`;
    document.querySelector('.windspeed').innerHTML = `<h2>${weather.wind.speed}km/uur</h2>`;

    if (weather.weather[0].main == "Clouds"){
        weatherIcon.innerHTML = `<img class="weatherImage" src="images/clouds.png" alt="Picture" />`;
    }else if (weather.weather[0].main == "Clear"){
        weatherIcon.innerHTML = `<img class="weatherImage" src="images/clear.png" alt="Picture" />`;
    }else if (weather.weather[0].main == "Drizzle"){
        weatherIcon.innerHTML = `<img class="weatherImage" src="images/drizzle.png" alt="Picture" />`;
    }else if (weather.weather[0].main == "Mist"){
        weatherIcon.innerHTML = `<img class="weatherImage" src="images/mist.png" alt="Picture" />`;
    }else if (weather.weather[0].main == "Rain"){
        weatherIcon.innerHTML = `<img class="weatherImage" src="images/rain.png" alt="Picture" />`;
    }else if (weather.weather[0].main == "Snow"){
        weatherIcon.innerHTML = `<img class="weatherImage" src="images/snow.png" alt="Picture" />`;
    }
}

function getLocation () {
    document.querySelector('#searchbutton').addEventListener('click', function () {
        location = document.querySelector('#weatherLocation').value;
        fetchURL(location);
    })
}