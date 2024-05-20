import { fetchWrapper } from '../utils/fetchWrapper';
import { API_CONFIG } from '../config/apiConfig';

export async function getCurrentWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_CONFIG.weatherApiKey}`;
    return await fetchWrapper(url);
}

export async function getHourlyWeather(lat, lon) {
    const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}`;
    return await fetchWrapper(url);
}

export async function getDailyForecast(lat, lon) {
    const url = `api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}`;
    return await fetchWrapper(url);
}