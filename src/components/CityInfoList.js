import React, { useState, useEffect } from 'react';
import SearchForm from './SearchingForm';
import CityWeatherInformation from './CityWeatherInformation';


const CityInfoList = () => {
    const [city, setCity] = useState('');
    const fromStorage = JSON.parse(localStorage.getItem('weatherInfo'));
    const [weatherInfo, setWeatherInfo] = useState(fromStorage ? fromStorage : []);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    // save changes to local storage  
    useEffect(() => {
        localStorage.setItem('weatherInfo', JSON.stringify(weatherInfo)
        )
    }, [weatherInfo]);
    
    function getWeatherInfo(e) {
        e.preventDefault();
        if (city.length === 0) {
            return setError(true);
        }
        // clear state in preparation for new data
        setError(false);
        setWeatherInfo([]);
        setLoading(false);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(response => { console.log(response)
            if (response.cod !== 200) {
                throw new Error()
            }
            console.log(response.id);
            setWeatherInfo([...weatherInfo, response]);
            setLoading(false);
            // clear input after press the button
            setCity('');
        })
        .catch(error => {
            setError(true);
            setLoading(false);
            console.log(error.message);
        });
    }
    // delete weather card by id
    const deleteCard = (id) => {
        setWeatherInfo(weatherInfo.filter((cityWeatherForcast, index) => index !== id ));
    }
    
    return (
        <div className='container'>
            <h1>Weather</h1>
            <SearchForm getWeatherInfo = {getWeatherInfo} setCity = {setCity} city={city}/>
            <div className = 'weather-list'>
            
            <div>{error && <p >Please enter a valid city!</p>}</div>
            {!error && 
                    <div>{weatherInfo.map((cityForcast, id) => 
                        <CityWeatherInformation 
                            key={cityForcast.id} 
                            id={cityForcast.id}
                            weatherInfo={cityForcast}
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
    