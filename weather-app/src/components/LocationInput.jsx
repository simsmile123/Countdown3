const LocationInput = ({setLatitude, setLongitude}) => {
  

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      }, (error) => {
        console.error('Error getting current location:', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
   
    <div>
      <button onClick={getCurrentLocation}>Current Location</button>
     
    </div>
  );
};

export default LocationInput;
// rfce -- creates jsx file