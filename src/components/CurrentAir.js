import React, { useState, useEffect, useContext } from "react"
import { LocationContext } from '../context/LocationContext';
import axios from "axios"

function CurrentAir() {
  const [airData, setAirData] = useState(null)

  const { markers } = useContext(LocationContext);
  let marker = {lng: 50, lat: 55};
  console.log(markers.length)
  console.log(marker.lng)

let longitudeList =  markers.map(marker => {
  return (
marker.lng
  );
})

let latitudeList =  markers.map(marker => {
  return (
marker.lat
  );
})

  let longitude = (markers.length !== 0) ? longitudeList[longitudeList.length - 1] : marker.lng;
  let latitude = (markers.length !== 0) ? latitudeList[latitudeList.length - 1] : marker.lat;



  useEffect(() => {
    async function getData() {
     
      const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${longitude}&lon=${latitude}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`

      console.log(url);
      try {
        const response = await axios.get(url)
        setAirData(response.data)
      } catch (err) {
       
      }
     
    }
    getData()
  }, [longitude, latitude])

  console.log(
   
    markers.map(marker => {
          
    return (
  marker.lng
    );
  }));


  if (!airData) {
    return <div>Loading indicator</div>
  }

  console.log(airData)
  return (
    <div>
 
      <div>{airData.coord.lon}</div>
      <div>{marker.lon}</div>
      <div>{longitude}</div>
      <div>{airData.list[0].components.co}</div>

    </div>

    
  )
}




export default CurrentAir