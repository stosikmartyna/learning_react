import React, { useState } from 'react';
import axios from 'axios';
import { main, container, input, date, location, temperatureBox, temperatureMinMax, temperatureMain, iconContainer } from './MainView.styles';
import { format } from 'date-fns';

const API = {
    key: 'a0cfb4380cff4455bda83f46832638b2',
    base: 'https://api.openweathermap.org/data/2.5/weather'
}

export const MainView = () => {
    const [weather, setWeather] = useState(undefined);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }  
    
    const searchCity = async(event) => {
        if (event.key === 'Enter') {
            try {
                const response = await axios.get(API.base, {
                    params: {
                        q: inputValue,
                        appid: API.key,
                        units: 'metric',
                    }
                });

                setWeather(response.data);
                setInputValue('');
            } catch (err) {
                console.warn(err);
            }
        }
    }

    const currentDate = format(new Date(), 'cccc, d LLLL u');

    return (
        <div className={main}>
            <div className={container}>
                <h1>Weather App</h1> 
                <input 
                    className={input} 
                    placeholder={'City'} 
                    value={inputValue} 
                    onChange={handleInputChange} 
                    onKeyPress={searchCity} 
                />
                <p className={date}>{currentDate}</p>
                {weather && (
                    <>
                        <p className={location}>{weather.name}, {weather.sys.country}</p>
                        <div className={temperatureBox}>
                            <div>
                                <span>Min.</span>
                                <p className={temperatureMinMax}>{Math.round(weather.main.temp_min)}°C</p>
                            </div>
                            <p className={temperatureMain}>{Math.round(weather.main.temp)}°C</p>
                            <div>
                                <span>Max.</span>
                                <p className={temperatureMinMax}>{Math.round(weather.main.temp_max)}°C</p>
                            </div>
                        </div>
                        <div className={iconContainer}>
                            <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt={'icon'} />
                            <p>{weather.weather[0].main}</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}