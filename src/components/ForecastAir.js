import React, { useState, useEffect, useContext } from "react"
import { LocationContext } from '../context/LocationContext';
import { Table } from "react-bootstrap"
import axios from "axios"

function ForecastAir() {
  const [airData, setAirData] = useState(null)

  const { markers } = useContext(LocationContext);

  let marker = { lng: 50, lat: 55 };

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

      const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1); //filter methed to get every nth element in array
      const url = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`

      console.log(url);
      try {
        const response = await axios.get(url)
        const listOfObjects = response.data.list //here we have 168 objects, for each hour in period of 7 days, starting two days ago
        setAirData(((every_nth(listOfObjects, 24)).splice(2,))) //filtered list to get every 24th(one per each day), and then call splice method to get array of five days, starting today
        // console.log(airData)
      } catch (err) {

      }

    }
    getData()
  }, [longitude, latitude])


  if (!airData) {
    return <div>Loading indicator</div>
  }

  return (
    <div>

      <Table responsive>
        <thead>
          <tr>
            <th>Day</th>
            <th>CO</th>
            <th>NO</th>
            <th>NO<span>2</span></th>
            <th>O<span>3</span></th>
            <th>SO<span>2</span></th>
            <th>PM<span>2.5</span></th>
            <th>PM<span>10</span></th>
            <th>NH<span>3</span></th>
          </tr>
        </thead>
        <tbody>

          {airData.map((daily, index) => {
            return (
              <tr>
                {/* new Date(daily.dt * 1000) - get you a day, date, month year....
              new Date(daily.dt * 1000).getDay() - get you a number(example(if it's Friday, you'll get 5))
              days[5] - Friday */}
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

      {/* <div>{airData.coord.lon}</div>
      <div>{airData.list[0].main.aqi}</div>
      <div>{longitude}</div>
      <div>{airData.list[0].components.co}</div> */}

    </div>


  )
}




export default ForecastAir