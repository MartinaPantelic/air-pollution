
import React from "react"

import LocationContextProvider from '../context/LocationContext';
//import LocationListContextProvider from './LocationList';
import CurrentAir from "./CurrentAir";
import AddLocation from "./AddLocation";
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"




const DisplayAir = () => {
    return ( 
        <div>
           
   <LocationContextProvider>
        {/* <LocationListContextProvider> */}
        <CurrentAir />
        <AddLocation />
        <Button variant="outline-primary" className="btn-lg mb-5">  <Link className="button-link" exact="true" to="/forecast-air">Forecast Air</Link></Button>
        {/* </LocationListContextProvider> */}
        </LocationContextProvider> 
     
        </div>

    )    
}


    export default DisplayAir;