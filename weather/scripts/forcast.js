const key = "FrvvCYGgYuUDUpuJ9xmOFo6I9Qkugtsj";

const getCity = async searchedCity => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${searchedCity}`;
  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

const getWeatherCondition = async id => {
  const weatherCondition = `http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${key}`;
  const response = await fetch(weatherCondition);
  const data = await response.json();
  return data[0];
};

getCity("manchester")
  .then(data => {
    return getWeatherCondition(data.Key);
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => console.log(error));
