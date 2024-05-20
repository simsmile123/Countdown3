import { fetchWrapper } from '../utils/fetchWrapper';
import { API_CONFIG } from '../config/apiConfig';

export async function getCurrentLocation() {
    const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${latitude}&lon=${longitude}&appid=${API_CONFIG.locationApiKey}`;
    return await fetchWrapper(url);
}