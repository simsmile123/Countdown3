import React from 'react';

const HourlyWeather = ({ data }) => {
    return (
        <div>
            <h2>Hourly Weather</h2>
            {data.map((hour, index) => (
                <div key={index}>
                    <p>Time: {hour.time}</p>
                    <p>Temperature: {hour.temp}°C</p>
                </div>
            ))}
        </div>
    );
}

export default HourlyWeather;