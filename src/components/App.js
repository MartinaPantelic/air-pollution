import React, { useState, useEffect } from "react"
import axios from "axios"
import { CurrentAir } from "./CurrentAir"


export default function App() {
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

  console.log(airData)

  if (!airData) {
    return <div>Loading indicator</div>
  }

  return (
    <div className="App">
      <CurrentAir api={airData} />
     
      {/* <div>{weather.coord.lon}</div> */}
    </div>
  )
}
