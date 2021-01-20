import React from "react"


import LocationContextProvider from '../context/LocationContext';

import ForecastAir from "./ForecastAir";
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

//import LocationPicker from "./LocationPicker";



const DisplayForecastAir = () => {
    return ( 
   <LocationContextProvider>
           
            <ForecastAir />
            <Button variant="outline-primary" className="btn-lg mb-5">  <Link className="button-link" exact="true" to="/current-air">Current Air</Link></Button>
          </LocationContextProvider> 
    )    
}


    export default DisplayForecastAir;