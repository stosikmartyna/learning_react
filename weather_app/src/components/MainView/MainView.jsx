import React, { useState } from 'react';
import axios from 'axios';
import { container, input } from './MainView.styles';

const API = {
    key: 'a0cfb4380cff4455bda83f46832638b2',
    base: 'https://api.openweathermap.org/data/2.5/'
  }

export const MainView = () => {
    const [weather, setWeather] = useState(undefined);
    const [city, setCity] = useState('');

    const handleInputChange = (event) => {
      setCity(event.target.value);
    }  
    
    const searchCity = async(event) => {
        if(event.key === 'Enter') {
            try {
                const response = await axios.get(`${API.base}weather?q=${city}&appid=${API.key}&units=metric`);
                setWeather(response.data)
            } catch (err) {
                console.warn(err);
            }
        }
    }

    return (
        <div className={container}>
            <h1>Weather App</h1> 
            <input className={input} placeholder={'City'} value={city} onChange={handleInputChange} onKeyPress={searchCity} />
            {weather && (
                <>
                    <p>{weather.name}, {weather.sys.country}</p>
                    <p>{Math.round(weather.main.temp)}°C</p>
                    <p>{weather.weather[0].main}</p>
                </>
            )}
        </div>
    )
}