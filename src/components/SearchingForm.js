import React from "react";


const SearchForm = ({ getWeatherInfo, setCity, city }) => {
    return (
        <form onSubmit = {getWeatherInfo}>
                <input
                    type = 'text'
                    placeholder = 'Search City'
                    maxLength = '50'
                    value = {city}
                    onChange = {(e) => setCity(e.target.value)}
                /> <i className ="fa fa-envelope-o fa-fw"></i>
                <button className = 'buttonSearch' type = 'submit'>Search</button>
        </form>
    );
};

export default SearchForm;