//time//
let now = new Date();
let todaysDate = document.querySelector("#date-input");
let minutes = now.getMinutes();
let hour = now.getHours();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
todaysDate.innerHTML = `${day} ${hour}:${minutes}`;

//temp//
function showTemp(response) {
  let tempInput = document.querySelector("#temp-number");
  let temperature = Math.round(response.data.main.temp);
  tempInput.innerHTML = `${temperature}`;
}

function citySearch(city) {
  let apiKey = "73bb802b6842545f8bc067782928d7ae";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showTemp);
}
function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  let cityResult = document.querySelector("#city-entered");
  cityResult.innerHTML = city;
  citySearch(city);
}
let form = document.querySelector("#city-search");
form.addEventListener("submit", search);

//local//
function localTemp(response) {
  let tempInput = document.querySelector("#temp-number");
  let temperature = Math.round(response.data.main.temp);
  tempInput.innerHTML = `${temperature}`;
}
function showPosition(position) {
  let apiKey = "73bb802b6842545f8bc067782928d7ae";
  let longitude = position.coords.longitude;
  let latitude = position.coords.latitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(localTemp);
}
function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);
