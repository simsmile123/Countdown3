import React, { useEffect, useState } from 'react';
import { fetchLocation } from './services/locationService';
import GetWeather from './components/GetWeather';

function App() {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        async function getLocation() {
            try {
                const locationData = await fetchLocation();
                setLocation(locationData);
            } catch (error) {
                console.error('Error fetching location:', error);
            }
        }
        getLocation();
    }, []);

    return (
        <div>
            {location ? (
                <GetWeather latitude={location.latitude} longitude={location.longitude} />
            ) : (
                <p>Loading location...</p>
            )}
        </div>
    );
}

export default App;
