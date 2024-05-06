import React, {useEffect, useState} from "react";


const GetWeather = ({longitude, latitude}) => {
  const [data, setData] = useState(null)
  useEffect(() => { 
     async function getData() { 
      const response = await fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${latitude}&lon=${longitude}&appid=02938805c561778f4842364a7f15109b`)
      const res_data = await response.json();
      console.log(res_data)
      setData(res_data)
    }

     getData();
  }, [])

  return <div>
    {data && <div>{JSON.stringify(data)}</div>}
  </div>


}

export default GetWeather