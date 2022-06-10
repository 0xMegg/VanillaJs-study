import "dotenv/config";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = data.weather[0].main;
      city.innerText = `${data.name} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("can't find a gps data");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
