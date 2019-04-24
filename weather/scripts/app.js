const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector(".img.time");
const icon = document.querySelector(".icon.img");
const updateUI = data => {
  // const cityDetails = data.cityDetails;
  // const weatherCondition = data.weatherCondition;
  const { cityDetails, weatherCondition } = data;
  details.innerHTML = ` 
  <h5 class="my-3">${cityDetails.EnglishName}</h5>
  <div class="my-3">${weatherCondition.WeatherText}</div>

  <div class="display-4 my-4">
    <span>${weatherCondition.Temperature.Imperial.Value}</span>
    <span>&deg;F</span>
  </div>`;

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

const updateCity = async city => {
  const cityDetails = await getCity(city);
  const weatherCondition = await getWeatherCondition(cityDetails.Key);

  return {
    cityDetails: cityDetails,
    weatherCondition: weatherCondition
  };
};

cityForm.addEventListener("submit", e => {
  e.preventDefault();
  //get city search query
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //show the city
  updateCity(city)
    .then(data => updateUI(data))
    .catch(error => console.log(error));
});
