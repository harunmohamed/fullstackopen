import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Country = ({ country }) => {
  const [weather, setWeather] = useState({});
  const API_KEY = "31bab9e43bd84a33519dbe0417218c24";
  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${country.capital}`
      )
      .then(({ data }) => {
        const current = data.current;
        setWeather({
          temperature: current.temperature,
          feelslike: current.feelslike,
          image: current.weather_icons[0],
          wind: `${current.wind_speed} kph direction ${current.wind_dir}`
        });
      });
  });
  
  return (
    <div>
      <h1>{country.name}</h1>
      <div>capital: {country.capital}</div>
      <div>population: {country.population}</div>
      <h2>Languages</h2>
      <ul>
        {country.languages.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <img src={country.flag} width="150" height="100" alt="country-flag" />
      <h2>Weather in {country.capital}</h2>
      <b>{weather.temperature}</b> degrees, feels like <b>{weather.feelslike}</b> degrees celsius<br/>
      <img src={weather.image} alt="weather"/><br/>
      <b>wind:</b> {weather.wind}
    </div>
  );
};

export default Country;