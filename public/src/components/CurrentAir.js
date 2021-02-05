import React, { useState, useEffect, useContext } from "react"
import { LocationContext } from '../context/LocationContext';
import { LocationListContext } from './LocationList';
import { Table } from "react-bootstrap"
import axios from "axios"

function CurrentAir() {
  const [airData, setAirData] = useState(null)

  const { markers } = useContext(LocationContext);
  // const { locationListLon } = useContext(LocationListContext);


  let marker = { lng: 50, lat: 55 };

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

      const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`

      console.log(url);
      try {
        const response = await axios.get(url)
        setAirData(response.data)
      } catch (err) {

      }

    }
    getData()
  }, [longitude, latitude])



  if (!airData) {
    return <div>Loading indicator</div>
  }

  return (
    <div className="mb-3">
      {/* <div>{locationListLat}</div> */}
      <h2 className="mb-4">Current Air Data <strong className="float-right aqi">AQI: {airData.list[0].main.aqi} <small></small></strong></h2>
      <Table responsive>
        <thead>
          <tr>
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
          <tr>
            <td>{airData.list[0].components.co}</td>
            <td>{airData.list[0].components.no}</td>
            <td>{airData.list[0].components.no2}</td>
            <td>{airData.list[0].components.o3}</td>
            <td>{airData.list[0].components.so2}</td>
            <td>{airData.list[0].components.pm2_5}</td>
            <td>{airData.list[0].components.pm10}</td>
            <td>{airData.list[0].components.nh3}</td>

          </tr>

        </tbody>
      </Table>
      <div className="d-flex justify-content-between">
        <small className="mr-3">Carbon Monoxide CO; Nitric oxide NO; Nitrogen Dioxide NO<sub>2</sub>; Ozone O<sub>3</sub>; Sulfur dioxide SO<sub>2</sub>; PM<sub>2.5</sub>- particles with diameter less than 2.5 micrometres; PM<sub>10</sub> - less than 10 micrones; Ammonia NH<sub>3</sub>

        </small>
        <small className="table-units text-right">
          <div>AIR QUALITY INDEX </div>
          <div>1 - very good</div><div>5 - poor</div>
          <div>mg/m<sup>3</sup></div>
        </small>

      </div>


    </div>


  )
}




export default CurrentAir