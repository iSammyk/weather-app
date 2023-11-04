import React, { useState } from 'react';
import './App.css';

const WeatherForm = ({ getWeather, loading }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(location === ""){
        alert("please type in a location")
    }else if (!getWeather(location)){
      alert("whoe plese")
    }
    else{
    getWeather(location);
    }
  };

  return (
    <div className='mop w-50 mx-auto'>
    <form className='' onSubmit={handleSubmit}>
     <div className="container">
    <div className="search-container">
    <input type="text"  name="text" className="input" placeholder="Enter city or country"  value={location}  onChange={(e) => setLocation(e.target.value)} />
    <svg viewBox="0 0 24 24" className="search__icon">
    <g>
    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
    </path>
    </g>
    </svg>
    </div>
    </div>
      <button type="submit" className="pushable mt-3 mx-5 d-flex aligni" disabled={loading}>
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className="front">
      {loading ? 'Getting weather...' : 'Get Weather'}


      </span>
    </button>
    </form>
    
    </div>
  );
};

export default WeatherForm;
