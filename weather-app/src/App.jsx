import { useState } from 'react'
import './App.css'
import LocationInput from './components/LocationInput'
import GetWeather from './components/GetWeather';

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  return (
    <>
    <LocationInput 
  
    setLatitude={setLatitude}
    setLongitude={setLongitude}
    /> 


  {latitude && longitude && (
    <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
          
          <GetWeather latitude={latitude} longitude={longitude}/>
        </div>
      )}
    </>
  )
}

export default App