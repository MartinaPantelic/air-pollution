

import React, { useState, useEffect, useContext } from "react"
import { LocationContext } from '../context/LocationContext';
import axios from "axios"

function CurrentAir() {
  const [airData, setAirData] = useState(null)
  const { markers } = useContext(LocationContext);
  let marker = {lng: 50, lat: 55};
  console.log(markers)
  useEffect(() => {
    async function getData() {
     
      const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${marker.lng}&lon=${marker.lat}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
      try {
        const response = await axios.get(url)
        setAirData(response.data)
      } catch (err) {
       
      }
      console.log(markers.map(marker => {
          
        return (
        marker.lng
        );
      }))
    }
    getData()
  }, [])



  if (!airData) {
    return <div>Loading indicator</div>
  }

  // const { list, coord, airData } = props.api
  console.log(airData)
  return (
    <div>
 
      <div>{airData.coord.lon}</div>
      <div>{marker.lon}</div>
      <div>{marker.lng}</div>
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