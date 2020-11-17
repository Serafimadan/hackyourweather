import React from 'react';

const CityWeatherInformation = (props) => {
    function converterTemperature(valNum) {
        let Celsius = valNum -273.15;
        return Math.round(Celsius);
    }
    return (
        <div >
            {props.error && <p >There is no such city in the world! Please enter a valid city.</p>}
            {props.loading && <div>Loadoing...</div>}
            {props.weatherInfo.cod === 200 ?           
                <div className = 'city-element'> 
                    <div className = 'information-container'>
                        <h2>{props.weatherInfo.name}, {props.weatherInfo.sys.country}</h2>
                        <div className = 'weather-inform'> 
                            <p className = 'weather-name'>{props.weatherInfo.weather[0].main}</p>
                            <p className = 'weather-descript'>{props.weatherInfo.weather[0].description}</p>
                        </div>
                        <p>min temp: {converterTemperature(props.weatherInfo.main.temp_min)}</p>
                        <p>max temp: {converterTemperature(props.weatherInfo.main.temp_max)}</p>
                        <p>Location: {props.weatherInfo.coord.lat}, {props.weatherInfo.coord.lon}</p>
                    </div>
                </div>
            : null}
        </div>
    )
}
    
export default CityWeatherInformation;