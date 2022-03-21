const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=51.547&lon=-0.1094&appid=4f6eb20d2bbb64f3a7d904bceab37bba";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    displayWeather(jsObject);
  });

function displayWeather(jsObject) {
  document.querySelector('#temperature').textContent = jsObject.main.temp;
  document.querySelector('#condition').textContent = jsObject.weather.description;
  document.querySelector('#weatherIcon').textContent = jsObject.main.temp;
  document.querySelector('#windSpeed').textContent = jsObject.main.temp;
  document.querySelector('#windChill').textContent = jsObject.main.feels_like;

}
