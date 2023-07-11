import React, { useState } from 'react';
import axios from 'axios';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm } from 'react-icons/wi';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      method: 'GET',
      url: `https://open-weather13.p.rapidapi.com/city/${city}`,
      headers: {
        'X-RapidAPI-Key': 'a746aae03fmsh3032d06a23b246ep1a27a7jsne0260fa6f52b',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      const weatherData = response.data;
      setWeatherData(weatherData);
      setError(null);
    } catch (error) {
      console.error(error);
      setWeatherData(null);
      setError('Error fetching weather data. Please try again.');
    }
  };

  const convertToFahrenheit = (celsius) => {
    const fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit.toFixed(2); // Round to 2 decimal places
  };

  const convertToCelsius = (fahrenheit) => {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return celsius.toFixed(2); // Round to 2 decimal places
  };

  const getWeatherIcon = (weatherCode) => {
    switch (weatherCode) {
      case 800:
        return <WiDaySunny size={64} />;
      case 801:
      case 802:
      case 803:
      case 804:
        return <WiCloudy size={64} />;
      case 500:
      case 501:
      case 502:
      case 503:
      case 504:
      case 511:
      case 520:
      case 521:
      case 522:
      case 531:
        return <WiRain size={64} />;
      case 600:
      case 601:
      case 602:
      case 611:
      case 612:
      case 613:
      case 615:
      case 616:
      case 620:
      case 621:
      case 622:
        return <WiSnow size={64} />;
      case 200:
      case 201:
      case 202:
      case 210:
      case 211:
      case 212:
      case 221:
      case 230:
      case 231:
      case 232:
        return <WiThunderstorm size={64} />;
      default:
        return <WiDaySunny size={64} />;
    }
  };

  return (
    <div className="App">
      <h1 className="app-title">Weather Tv</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city name"
          className="city-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {weatherData && (
        <div className="weather-container">
          <div className="weather-info">
            <div className="weather-icon">{getWeatherIcon(weatherData.weather[0].id)}</div>
            <div className="weather-details">
              <h2 className="city-name">{weatherData.name}</h2>
              <p className="temperature">
                 Temperature : {convertToFahrenheit(weatherData.main.temp)}°F / {convertToCelsius(weatherData.main.temp)}°C
              </p>
              <p className="description">{weatherData.weather[0].description}</p>
              <p className="max-temp">
                Max Temperature: {convertToFahrenheit(weatherData.main.temp_max)}°F /{' '}
                {convertToCelsius(weatherData.main.temp_max)}°C
              </p>
              <p className="min-temp">
                Min Temperature: {convertToFahrenheit(weatherData.main.temp_min)}°F /{' '}
                {convertToCelsius(weatherData.main.temp_min)}°C
              </p>
              <p className="feels-like">
                Feels Like: {convertToFahrenheit(weatherData.main.feels_like)}°F /{' '}
                {convertToCelsius(weatherData.main.feels_like)}°C
              </p>
              <p className="humidity">Humidity: {weatherData.main.humidity}%</p>
              <p className="wind-speed">Wind Speed: {weatherData.wind.speed} mph</p>
              <p className="pressure">Pressure: {weatherData.main.pressure} hPa</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
