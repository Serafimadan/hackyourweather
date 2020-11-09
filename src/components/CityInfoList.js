import React from 'react';
import CityInformation from './CityInformation';
const cityWeather = require('../sources/city-weather.json');


const CityInfoList = () => {
    const newArray = cityWeather.map((item, i) => {
        // Kelvin to Celsius
        function converterTemperature(valNum) {
            let Celsius = valNum -273.15;
            return Math.round(Celsius);
        }
        return (
            <CityInformation  
                key = {i} 
                cityName = {item.name} 
                countryName = {item.sys.country} 
                weatherType = {item.weather.map((weatherName) => { return (weatherName.main)})} 
                weatherDescription = {item.weather.map((weatherDescrip) => { return (weatherDescrip.description)}) } 
                tempMin = {converterTemperature(item.main.temp_min)} 
                tempMax = {converterTemperature(item.main.temp_max)} 
                locationLat = {item.coord.lat} 
                locationLon = {item.coord.lon}/>)
    })
        return (
            <div className = 'container'>
                <h2>Weather</h2>
                <div className = 'blocks-container'> 
                    <ul className = 'weather-list'>{newArray}</ul>
                </div>
            </div>
        )
    }
    export default CityInfoList;
    