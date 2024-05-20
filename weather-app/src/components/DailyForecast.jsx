import React from 'react';

const DailyForecast = ({ data }) => {
    return (
        <div>
            <h2>Daily Forecast</h2>
            {data.map((day, index) => (
                <div key={index}>
                    <p>Date: {day.date}</p>
                    <p>Temperature: {day.temp.day}°C</p>
                </div>
            ))}
        </div>
    );
}

export default DailyForecast;
