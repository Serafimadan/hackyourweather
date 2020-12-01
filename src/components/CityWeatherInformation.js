import React from 'react';
import { Link } from "react-router-dom";


const CityWeatherInformation = ({weatherInfo, deleteCard, index, loading, id}) => {
    const {cod, name, sys, weather, main, coord } = weatherInfo;
    
    function converterTemperature(valNum) {
        let Celsius = valNum -273.15;
        return Math.round(Celsius);
    }
    return (
        <div >
            {loading && <div>Loadoing...</div>}
            {cod === 200 ?           
                <div className={
                    typeof weather[0].main !== "undefined"
                    ? converterTemperature(main.temp) >= 15
                        ? "city-element hot"
                        : "city-element cold"
                    : "city-element"
                }> 
                    <button className = 'removeButton' onClick = {() => deleteCard(index)}>X</button>
                    {/* go to city card to look forcast chart */}
                    <Link  to={`/${id}`}>
                    <div className = 'information-container'>
                        <h2>{name}, {sys.country}</h2>
                        <div className = 'weather-inform'> 
                            <p className = 'weather-name'>{weather[0].main}</p>
                            <p className = 'weather-descript'>{weather[0].description}</p>
                            
                        </div>
                        
                        <p>min temp: {converterTemperature(main.temp_min)} °C</p>
                        <p>max temp: {converterTemperature(main.temp_max)} °C</p>
                        <p>Location: {coord.lat}, {coord.lon}</p>
                    </div>
                    </Link>
                </div>
            : null} 
        </div>
    )
}
    
export default CityWeatherInformation;