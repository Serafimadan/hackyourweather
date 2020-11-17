import React, { useState } from 'react';
import SearchForm from './SearchingForm';
import CityWeatherInformation from './CityWeatherInformation';

const CityInfoList = () => {
    let [city, setCity] = useState('');
    let [weatherInfo, setWeatherInfo] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    
    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    
    function getWeatherInfo(e) {
        e.preventDefault();
        if (city.length === 0) {
            return setError(true);
        }
        // clear state in preparation for new data
        setError(false);
        setWeatherInfo({});
        setLoading(true);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(response => {
            if (response.cod !== 200) {
                throw new Error()
            }
            setWeatherInfo(response);
            setLoading(false);
        })
        .catch(error => {
            setError(true);
            setLoading(false);
            console.log(error.message);
        });
    }
    
    return (
        <div className = 'container'>
            <h1>Weather</h1>
            <SearchForm getWeatherInfo = {getWeatherInfo} setCity = {setCity} city={city}/>
            <div className = 'weather-list'>
                <CityWeatherInformation 
                    weatherInfo={weatherInfo}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    )
}
export default CityInfoList;
    