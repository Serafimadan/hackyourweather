import React from 'react';

const CityInformation = (props) => {
    
    return  ( 
        <li className = 'city-element'> 
            <div className = 'information-container'>
                <h2>{props.cityName}, {props.countryName}</h2>
                    <div className = 'weather-inform'> 
                        <p className = 'weather-name'>{props.weatherType}</p>
                        <p className = 'weather-descript'>{props.weatherDescription}</p>
                    </div>
                <p>min temp: {props.tempMin}</p>
                <p>max temp: {props.tempMax}</p>
                <p>Location: {props.locationLat}, {props.locationLon}</p>
            </div>
        </li>
    );
}
export default CityInformation;