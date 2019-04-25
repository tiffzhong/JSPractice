const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");
const forecast = new Forecast();
console.log(forecast);

const updateUI = data => {
  const { cityDetails, weatherCondition } = data;

  //update weather details
  details.innerHTML = `
  <h5 class="my-3">${cityDetails.EnglishName}</h5>
  <div class="my-3">${weatherCondition.WeatherText}</div>

  <div class="display-4 my-4">
    <span>${weatherCondition.Temperature.Imperial.Value}</span>
    <span>&deg;F</span>
  </div>`;

  //update night and day background icon
  let iconSrc = `img/icons/${weatherCondition.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);

  //update night and day background image
  let timeSrc = weatherCondition.IsDayTime ? "img/day.svg" : "img/night.svg";
  time.setAttribute("src", timeSrc);

  //remove display: none if present
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

cityForm.addEventListener("submit", e => {
  e.preventDefault();
  //get city search query
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //show the city
  forecast
    .updateCity(city)
    .then(data => updateUI(data))
    .catch(error => console.log(error));

  localStorage.setItem("city", city);
});

if (localStorage.getItem("city")) {
  forecast
    .updateCity(localStorage.getItem("city"))
    .then(data => updateUI(data))
    .catch(error => console.log(error));
}
