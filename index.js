
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Karachi';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f82c9a4deamsh982798bb77ee0f6p196c14jsncca4183de3ee',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const cities = [
  { name: 'Quetta', id: 'Quetta' },
  { name: 'Islamabad', id: 'Islamabad' },
  { name: 'Larkana', id: 'Larkana' },
  { name: 'Karachi', id: 'Karachi' }
];

const getWeather = (city) => {
  cityName.innerHTML = city;

  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
      console.log(response);


	  /*--- Weather By Search ----*/
	  temp.innerHTML = response.temp
	  temp2.innerHTML = response.temp
      feels_like.innerHTML = response.feels_like
      humidity.innerHTML = response.humidity
	  humidity2.innerHTML = response.humidity
      min_temp.innerHTML = response.min_temp
      max_temp.innerHTML = response.max_temp
      wind_speed.innerHTML =  response.wind_speed
	  wind_speed2.innerHTML =  response.wind_speed
      wind_degrees.innerHTML = response.wind_degrees
      sunrise.innerHTML = response.sunrise
      sunset.innerHTML = response.sunset
     

	  /*--- Weather By Table Deatils ----*/
      document.getElementById('temp-' + city).innerHTML = response.temp;
      document.getElementById('feels_like-' + city).innerHTML = response.feels_like;
      document.getElementById('humidity-' + city).innerHTML = response.humidity;
      document.getElementById('min_temp-' + city).innerHTML = response.min_temp;
      document.getElementById('max_temp-' + city).innerHTML = response.max_temp;
      document.getElementById('wind_speed-' + city).innerHTML = response.wind_speed;
      document.getElementById('wind_degrees-' + city).innerHTML = response.wind_degrees;
      document.getElementById('sunrise-' + city).innerHTML = response.sunrise;
      document.getElementById('sunset-' + city).innerHTML = response.sunset;
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const selectedCity = city.value;
  getWeather(selectedCity);
});

cities.forEach(cityObj => getWeather(cityObj.name));










