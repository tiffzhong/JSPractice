class Forecast {
  constructor() {
    this.key = "FrvvCYGgYuUDUpuJ9xmOFo6I9Qkugtsj";
    this.weatherURI =
      "http://dataservice.accuweather.com/currentconditions/v1/";
    this.cityURI =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
  }
  async updateCity(city) {
    const cityDetails = await this.getCity(city);
    const weatherCondition = await this.getWeatherCondition(cityDetails.Key); //this is "id" in getWeatherCondition()
    return { cityDetails, weatherCondition };
  }
  async getCity(city) {
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.cityURI + query);
    const data = await response.json();
    return data[0];
  }
  async getWeatherCondition(id) {
    const query = `${id}?apikey=${this.key}`;
    const response = await fetch(this.weatherURI + query);
    const data = await response.json();
    return data[0];
  }
}

// const key = "FrvvCYGgYuUDUpuJ9xmOFo6I9Qkugtsj";

// const getCity = async searchedCity => {
//   const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
//   const query = `?apikey=${key}&q=${searchedCity}`;
//   const response = await fetch(base + query);
//   const data = await response.json();
//   return data[0];
// };

// const getWeatherCondition = async id => {
//   const weatherCondition = `http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${key}`;
//   const response = await fetch(weatherCondition);
//   const data = await response.json();
//   return data[0];
// };

// getCity("manchester")
//   .then(data => {
//     return getWeatherCondition(data.Key);
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => console.log(error));
