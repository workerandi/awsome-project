// Challenge 1
function updateTime() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[now.getDay()];
  let currentHour = now.getHours();
  let currentMinute = now.getMinutes();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  if (currentMinute < 10) {
    currentMinute = `0${currentMinute}`;
  }
  let time = document.querySelector("h2");
  time.innerHTML = `${currentDay}, ${currentHour}:${currentMinute}`;
}

// Update time initially and refresh every minute
updateTime(event);
event.preventDefault();
setInterval(updateTime, 60000); // Refresh every minute

function updatedPage(response) {
  document.querySelector("#h1").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML =
    Math.round(((response.data.main.temp - 273.15) * 9) / 5 + 32) + "°F";
  document.querySelector("#currentHigh").innerHTML =
    Math.round(((response.data.main.temp_max - 273.15) * 9) / 5 + 32) + "°F";
  document.querySelector("#currentLow").innerHTML =
    Math.round(((response.data.main.temp_min - 273.15) * 9) / 5 + 32) + "°F";
}

function changeCity(event) {
  event.preventDefault();
  let citySearched = document.querySelector("#searchBar").value;
  let apiKey = "2d96d64425dca1d6eda00d942a281c0d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearched}&appid=${apiKey}`;
  axios.get(apiUrl).then(updatedPage);
}

let searchCity = document.querySelector("#inputForm");
searchCity.addEventListener("submit", changeCity);
