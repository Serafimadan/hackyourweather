import React, { useState } from 'react';
import SearchForm from './SearchingForm';
import CityWeatherInformation from './CityWeatherInformation';

const CityInfoList = () => {
    let [city, setCity] = useState('');
    let [weatherInfo, setWeatherInfo] = useState([]);
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    
    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    
    function getWeatherInfo(e) {
        e.preventDefault();
        // clear state in preparation for new data
        setError(false);
        setWeatherInfo([]);
        setLoading(true);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(response => {
            if (response.cod !== 200) {
                throw new Error()
            }
            setWeatherInfo([...weatherInfo, response]);
            setLoading(false);
        })
        .catch(error => {
            setError(true);
            setLoading(false);
            console.log(error.message);
        });
    }
    // delete weather card by id
    const deleteCard = (id) => {
        //console.log(id)
        setWeatherInfo(weatherInfo.filter((cityWeatherForcast, index) => index !== id ));
    }
    return (
        <div className = 'container'>
            <h1>Weather</h1>
            <SearchForm getWeatherInfo = {getWeatherInfo} setCity = {setCity} city={city}/>
            <div className = 'weather-list'>
            {!error && 
                    <div>{weatherInfo.map((cityForcast, id) => 
                        <CityWeatherInformation 
                            key = {id} 
                            weatherInfo={cityForcast}
                            error={error}
                            loading={loading}
                            index={id}
                            deleteCard={deleteCard}    
                        />) }    
                        </div>
            }
            </div>
        </div>
    )
}
export default CityInfoList;
    