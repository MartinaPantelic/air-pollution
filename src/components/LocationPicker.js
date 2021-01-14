import React from "react"

import LocationContextProvider from '../context/LocationContext';
import CurrentAir from "./CurrentAir";
import ForecastAir from "./ForecastAir";


const locationPicker = () => {
    return ( 
   <LocationContextProvider>
            <ForecastAir />
            <CurrentAir />
          </LocationContextProvider> 
    )    
}


    export default locationPicker;