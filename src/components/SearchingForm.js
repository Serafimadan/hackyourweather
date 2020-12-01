import React from "react";
import { TextField } from '@material-ui/core';

const SearchForm = ({ getWeatherInfo, setCity, city }) => {
    function changeCity(e) {
        // condition if input is empty
        if (e.target.value === ''){
            document.querySelector('.buttonSearch').disabled = true;
        } else {
            document.querySelector('.buttonSearch').disabled = false;
        }
        setCity(e.target.value)
    }

    return (
        <form onSubmit = {getWeatherInfo} className = 'form' >
            
            <TextField
                variant="outlined" 
                type = 'text'
                placeholder = 'Search City'
                maxLength = '50'
                value = {city}
                onChange = {(e) => changeCity(e)}
            /> 
            <button className = 'buttonSearch' type = 'submit' disabled>Search</button>
        </form>
    );
};

export default SearchForm;