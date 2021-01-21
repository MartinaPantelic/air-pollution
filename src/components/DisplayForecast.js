import React from "react"


import LocationContextProvider from '../context/LocationContext';

import ForecastAir from "./ForecastAir";
import AddLocation from "./AddLocation";
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"




const DisplayForecastAir = () => {
    return ( 
   <LocationContextProvider>
           
            <ForecastAir />
            <AddLocation />
            <Button variant="outline-primary" className="btn-lg mb-5">  <Link className="button-link" exact="true" to="/current-air">Current Air</Link></Button>
          </LocationContextProvider> 
    )    
}


    export default DisplayForecastAir;