import React from "react"

import LocationSearch from './LocationSearch';
import LocationContextProvider from '../context/LocationContext';
import CurrentAir from "./CurrentAir";
import ForecastAir from "./ForecastAir";


const locationPicker = () => {
    return ( 
   <LocationContextProvider>
            <LocationSearch />
            <ForecastAir />
            <CurrentAir />
          </LocationContextProvider> 
    )    
}


    export default locationPicker;