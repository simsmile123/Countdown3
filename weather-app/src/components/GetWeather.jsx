import React, { useEffect, useState } from "react";
import { fetchWeatherData } from '../services/weatherService';

const GetWeather = ({ latitude, longitude }) => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [hourlyWeather, setHourlyWeather] = useState(null);
    const [dailyForecast, setDailyForecast] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const { currentWeather, hourlyWeather, dailyForecast } = await fetchWeatherData(latitude, longitude);
                setCurrentWeather(currentWeather);
                setHourlyWeather(hourlyWeather);
                setDailyForecast(dailyForecast);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }
        getData();
    }, [latitude, longitude]);

    return (
        <div>
            {currentWeather && <div>Current Weather: {JSON.stringify(currentWeather)}</div>}
            {hourlyWeather && <div>Hourly Weather: {JSON.stringify(hourlyWeather)}</div>}
            {dailyForecast && <div>Daily Forecast: {JSON.stringify(dailyForecast)}</div>}
        </div>
    );
}

export default GetWeather;