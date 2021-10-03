const API_KEY = "45877aff211554395fa8c6a4bb95d4b1";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:nth-child(1)");
        const weather = document.querySelector("#weather span:nth-child(2)");
        const temp = document.querySelector("#weather span:nth-child(3)");
        const humidity = document.querySelector("#weather span:nth-child(4)");
        const windSpeed = document.querySelector("#weather span:nth-child(5)");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        temp.innerText = `${Math.floor(data.main.temp)}℃
        `;
        humidity.innerText = `습도 ${data.main.humidity}%`;
        windSpeed.innerText = `풍속 ${data.wind.speed}m/s`
    });

}

function onGeoError() {
    alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);