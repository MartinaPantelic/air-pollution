

import React, { useState, useEffect, useContext } from "react"
import { LocationContext } from '../context/LocationContext';
import axios from "axios"

function CurrentAir() {
  const [airData, setAirData] = useState(null)

  const { markers } = useContext(LocationContext);
  let marker = {lng: 50, lat: 55};
  console.log(markers.length)
  console.log(marker.lng)

let longitude =  markers.map(marker => {
  return (
marker.lng
  );
})

let latitude =  markers.map(marker => {
  return (
marker.lat
  );
})

  let finalMarkerLng = (markers.length !== 0) ? longitude[longitude.length - 1] : marker.lng;
  let finalMarkerLat = (markers.length !== 0) ? latitude[latitude.length - 1] : marker.lat;

  console.log(finalMarkerLng)
  
  useEffect(() => {
    async function getData() {
     
      const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${finalMarkerLng}&lon=${finalMarkerLat}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`

      console.log(url);
      try {
        const response = await axios.get(url)
        setAirData(response.data)
      } catch (err) {
       
      }
     
    }
    getData()
  }, [finalMarkerLng, finalMarkerLat])

  console.log(
   
    markers.map(marker => {
          
    return (
  marker.lng
    );
  }));

  


  if (!airData) {
    return <div>Loading indicator</div>
  }

  // const { list, coord, airData } = props.api
  console.log(airData)
  return (
    <div>
 
      <div>{airData.coord.lon}</div>
      <div>{marker.lon}</div>
      <div>{finalMarkerLng}</div>
      <div>{airData.list[0].components.co}</div>

      <div className="book-list">
      
      <ul>
        {markers.map(marker => {
          
          return (
          <li><span>{marker.lng}</span></li>
          );
        })}
      </ul>
    
    </div>
    
    </div>

    
  )
}




export default CurrentAir