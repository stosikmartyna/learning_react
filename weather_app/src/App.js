import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = {
  key: 'a0cfb4380cff4455bda83f46832638b2',
  base: 'https://api.openweathermap.org/data/2.5/'
}

export const App = () => {
  const [weather, setWeather] = useState(undefined);
  const [city, setCity] = useState('');

  const getWeather = async() => {
    try {
        const response = await axios.get(`${API.base}weather?q=Warsaw&appid=${API.key}`);
        console.log(response.data)
        setWeather(response.data)
    } catch (err) {
        console.warn(err);
    }
}

  useEffect(() => {
    getWeather()
  }, []);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  }

  return (
    <>
      <h1>Weather App</h1> 
      <input placeholder={'City'} value={city} onChange={handleInputChange} />

      <p>{weather.name}</p>
    </>
  );
}