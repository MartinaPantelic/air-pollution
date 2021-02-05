import React, { useState, useEffect, useContext } from "react"
import { LocationContext } from '../context/LocationContext';

import axios from "axios"

function ShowPlace() {
  const [placeData, setPlaceData] = useState("Durham")

  const { markers } = useContext(LocationContext);

 
  let marker = {lng: -78.898619, lat:  35.9940329};


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
     
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`

      console.log(url);
       
      try {
        
        const response = await axios.get(url)
       
        setPlaceData(response.data.results[0].address_components[3].long_name)

      } catch (err) {
       
      }
     
    }
    getData()
  }, [longitude, latitude])


  if (!placeData) {
    return <div>Loading indicator</div>
  }

  return (
    <div className="mb-5">
        <h1>{placeData}</h1>
    </div>

    
  )
}


export default ShowPlace