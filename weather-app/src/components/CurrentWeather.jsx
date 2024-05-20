import React from 'react';

const CurrentWeather = ({ data }) => {
    return (
        <div>
            <h2>Current Weather</h2>
            <p>{data.description}</p>
            <p>Temperature: {data.temp}°C</p>
        </div>
    );
}

export default CurrentWeather;