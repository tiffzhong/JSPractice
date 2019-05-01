class Forecast {
  constructor() {
    this.key = "FrvvCYGgYuUDUpuJ9xmOFo6I9Qkugtsj";
  }
  getCity = async city => {
    const base =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
  };

  getWeather = async id => {
    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${this.key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
  };
}

getCity("san francisco")
  .then(data => {
    return getWeather(data.Key);
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => console.log(err));
