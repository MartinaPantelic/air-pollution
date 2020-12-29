

import React, { useState, useEffect } from "react"
import axios from "axios"

function CurrentAir() {
  const [airData, setAirData] = useState(null)

  useEffect(() => {
    async function getData() {
     
      const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
      try {
        const response = await axios.get(url)
        setAirData(response.data)
      } catch (err) {
        console.log(err)
      }
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
      <div>{airData.list[0].components.co}</div>
    
    </div>
  )
}

export default CurrentAir