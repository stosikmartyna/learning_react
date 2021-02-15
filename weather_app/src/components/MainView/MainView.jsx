import React, { useState } from 'react';
import axios from 'axios';
import { container, input, date, temperature, temperatureMinMax } from './MainView.styles';

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
                setWeather(response.data);
                setCity('');
            } catch (err) {
                console.warn(err);
            }
        }
    }

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day}, ${date} ${month} ${year}`
      }

    return (
        <div className={container}>
            <h1>Weather App</h1> 
            <input className={input} placeholder={'City'} value={city} onChange={handleInputChange} onKeyPress={searchCity} />
            <p className={date}>{dateBuilder(new Date())}</p>
            
            {console.log(weather)}
            
            {weather && (
                <>
                    <p>{weather.name}, {weather.sys.country}</p>
                    <p className={temperature}>{Math.round(weather.main.temp)}°C</p>
                    <div className={temperatureMinMax}>
                        <div>
                            <span>Min.</span>
                            <p>{Math.round(weather.main.temp_min)}°C</p>
                        </div>
                        <div>
                            <span>Max.</span>
                            <p>{Math.round(weather.main.temp_max)}°C</p>
                        </div>
                    </div>
                    <p>{weather.weather[0].main}</p>
                </>
            )}
        </div>
    )
}