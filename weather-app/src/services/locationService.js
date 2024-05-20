import { getCurrentLocation } from '../apis/locationApi';

export async function fetchLocation() {
    try {
        const locationData = await getCurrentLocation();
        return locationData;
    } catch (error) {
        console.error('Location service error:', error);
        throw error;
    }
}