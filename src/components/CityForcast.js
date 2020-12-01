import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

import Chart from './Chart';
const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

// to get parameters for routes in a component we need to refer to the match.params
const CityForcast = ({match}) => {
    const [forecast, setForecast] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    function converterTemperature(valNum) {
        let Celsius = valNum -273.15;
        return Math.round(Celsius);
    }

    useEffect(() => {
        const fetchWeatherForcast = () => {
            setError(false);
            fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${match.params.cityId}&appid=${API_KEY}`)
            .then(response => response.json())
            .then(response => { 
                // ????? works 'cod' as string not a number
                if (response.cod !== '200') {
                    throw new Error();
                } else {
                    console.log(response)
                    const dataWeather = {
                        name: response.city.name,
                        country: response.city.country,
                        list: response.list.map(item => ({
                        dateTime: item.dt_txt,
                        temp: converterTemperature(item.main.temp),
                        })),
                    };
                    setForecast(dataWeather);
                }
            }) 
            .catch(error => {
                setLoading(false);
                setError(true);
                console.log(error.message);
            });
        }
        fetchWeatherForcast();
    }, [match.params.cityId]);

    return (
        <div className = 'container-forcast'>
            <div>{error && <p >Please enter a valid city!</p>}</div>
            <Chart loading={loading} forecast={forecast}/>
            <Link  to="/">
                <Button variant="contained" color="primary">Go back</Button>
            </Link>
        </div>
    )
}

export default CityForcast;