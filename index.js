const apiKey = '7611e314d9e762d5a1168f1c2e5d92a8';

const lat = 16.871311;
const lon = 96.199379;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

function getWeatherFromServer() {
  return fetch(url)
    .then((res) => res.json())
    .catch((e) => console.log(e));
}

let weatherObj = getWeatherFromServer().then((data) => {
  weatherObj = data;
  init();
});
const weather = document.getElementById('weather');
const city = document.getElementById('city');
const unitConverterBtn = document.getElementById('unitConverterBtn');
const temp = document.getElementById('temp');

function init() {
  city.textContent = weatherObj.name;
  weather.textContent = weatherObj.weather[0].main;
  temp.textContent = weatherObj.main.temp.toFixed(2) + '°C';

  unitConverterBtn.addEventListener('input', (e) => {
    if (e.target.checked) {
      temp.textContent =
        ((parseFloat(temp.textContent) * 9) / 5 + 32).toFixed(2) + '°F';
    } else {
      temp.textContent = weatherObj.main.temp.toFixed(2) + '°C';
    }
  });
  const weatherIcons = document.querySelectorAll('.weather-icons > div');
  weatherIcons.forEach((v) => {
    if (v.className.includes(weatherObj.weather[0].main)) {
      v.style.display = 'block';
    }
  });
}
