import React from "react"

import LocationContextProvider from '../context/LocationContext';
import CurrentAir from "./CurrentAir";
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"




const DisplayAir = () => {
    return ( 
        <div>
   <LocationContextProvider>
        <CurrentAir />
      
        <Button variant="outline-primary" className="btn-lg mb-5">  <Link className="button-link" exact="true" to="/forecast-air">Forecast Air</Link></Button>
        </LocationContextProvider> 
        </div>

    )    
}


    export default DisplayAir;