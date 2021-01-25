import React, { useState, useEffect, useContext } from "react"
import { LocationContext } from '../../context/LocationContext';
import { Table } from "react-bootstrap"
import axios from "axios"
import ReactLoading from "react-loading";

function ForecastAir() {
  const [airData, setAirData] = useState(null)

  const { markers } = useContext(LocationContext);

  let marker = { lng: -78.898619, lat: 35.9940329 };

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wendesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const generateKey = (pre) => {
    return `${pre}_${Math.random() * 1000}`;
  }

  let longitudeList = markers.map(marker => {
    return (
      marker.lng
    );
  })

  let latitudeList = markers.map(marker => {
    return (
      marker.lat
    );
  })

  let longitude = (markers.length !== 0) ? longitudeList[longitudeList.length - 1] : marker.lng;
  let latitude = (markers.length !== 0) ? latitudeList[latitudeList.length - 1] : marker.lat;



  useEffect(() => {
    async function getData() {

      const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1); //filter method to get every nth element in array
      const url = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`

      console.log(url);
      try {
        const response = await axios.get(url)
        const listOfObjects = response.data.list // 168 objects, for each hour in period of 7 days, starting two days ago
        setAirData(((every_nth(listOfObjects, 24)).splice(2,))) //filtered list to get every 24th(one per each day), and then call splice method to get array of five days, starting today
        // console.log(airData)
      } catch (err) {

      }

    }
    getData()
  }, [longitude, latitude])


  if (!airData) {
    return <ReactLoading type="spin" color="#59A9FF" className="mx-auto" />
  }

  return (
    <div className="mb-5">
    <h3 className="mb-3">5 Day Forecast</h3>
      <Table responsive>
        <thead>
          <tr>
            <th>Day</th>
            <th>CO</th>
            <th>NO</th>
            <th>NO<sub>2</sub></th>
            <th>O<sub>3</sub></th>
            <th>SO<sub>2</sub></th>
            <th>PM<sub>2.5</sub></th>
            <th>PM<sub>10</sub></th>
            <th>NH<sub>3</sub></th>
          </tr>
        </thead>
        <tbody>

          {airData.map((daily, index) => {
            return (
              <tr key={generateKey(daily.components.dt)}>

                <td key={generateKey(index)}>{days[new Date(daily.dt * 1000).getDay()]}</td>
                <td key={generateKey(daily.components.co)}>{daily.components.co}</td>
                <td key={generateKey(daily.components.no)}>{daily.components.no}</td>
                <td key={generateKey(daily.components.no2)}>{daily.components.no2}</td>
                <td key={generateKey(daily.components.o3)}>{daily.components.o3}</td>
                <td key={generateKey(daily.components.so2)}>{daily.components.so2}</td>
                <td key={generateKey(daily.components.pm2_5)}>{daily.components.pm2_5}</td>
                <td key={generateKey(daily.components.pm10)}>{daily.components.pm10}</td>
                <td key={generateKey(daily.components.nh3)}>{daily.components.nh3}</td>
              </tr>
            )
          })}

        </tbody>
      </Table>

    </div>


  )
}




export default ForecastAir