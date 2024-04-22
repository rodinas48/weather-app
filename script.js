const cityName = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const temp = document.querySelector(".temp");
const wind = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");

const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector(".btn");

const apiKey = "4613b97d66ecb3e7381b1fd43c34da64";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkWeather(city) {
  const res = await fetch(url + city + `&appid=${apiKey}`);
  let data = await res.json();
  if (data.cod === "404") {
    document.querySelector('.error').style.display = "block";
    document.querySelector('.weather').style.display = "none";
  }
  temp.innerHTML = Math.round(data.main.temp) + ` °C`;
  cityName.innerHTML = data.name;
  humidity.innerHTML = data.main.humidity + "%";
  wind.innerHTML = data.wind.speed + " Km/H";
  weatherIcon.src = `assests/${data.weather[0].main.toLowerCase()}.png`;

  document.querySelector('.weather').style.display = "block";
  document.querySelector('.error').style.display = "none";
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchInput.value);
});
