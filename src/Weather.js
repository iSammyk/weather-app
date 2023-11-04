import React from 'react';

const Weather = ({ weatherData }) => {
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { main, name, weather, dt } = weatherData;
  const date = new Date(dt * 1000);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
  const formattedDate = date.toLocaleDateString(undefined, options);

  return (
    <div className='man text-center'>
        <div className='bg-light mas mx-auto mt-3 p-3 rounded-5 shadow-lg'>
        <h2>Weather in {name}</h2>
      <p> {formattedDate}</p>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}</p>
      <p>Weather: {weather[0].description}</p>
        </div>
      
    </div>
  );
};

export default Weather;
