import { getCurrentWeather, getHourlyWeather, getDailyForecast } from '../apis/weatherApi';

export async function fetchWeatherData(lat, lon) {
    try {
        const currentWeather = await getCurrentWeather(lat, lon);
        const hourlyWeather = await getHourlyWeather(lat, lon);
        const dailyForecast = await getDailyForecast(lat, lon);
        return {
            currentWeather,
            hourlyWeather,
            dailyForecast
        };
    } catch (error) {
        console.error('Weather service error:', error);
        throw error;
    }
}