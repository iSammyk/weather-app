import React, { useState } from 'react';
import './App.css';

import WeatherForm from './WeatherForm';
import Weather from './Weather';

const API_KEY = "6ce74c44f1db6aa31e93aaf390a27699";
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const getWeather = async (location) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${API_URL}?q=${location}&appid=${API_KEY}&units=metric`
      );

    if (response.ok) {
        const data = await response.json();
        console.log('API Response:', data);
        setWeatherData(data);
      } else {
        alert("please type in a valid location")
        // throw new Error('Invalid location. Please type a valid location.');
      }
    } catch (error) {
      console.error('Error fetching weather data: ', error);
    } finally {
      setLoading(false); // Set loading back to false after the API request completes
    }
  };
  

  return (
    <div className="App">
      <h1 className=' text-center hed'>Weather Forecast</h1>
      <WeatherForm getWeather={getWeather} loading={loading}  />
      {weatherData && <Weather weatherData={weatherData} />}
    </div>
  );
}

export default App;
