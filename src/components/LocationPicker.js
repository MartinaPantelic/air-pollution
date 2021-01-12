import React from "react"

import LocationList from './LocationList';
import LocationContextProvider from '../context/LocationContext';
import CurrentAir from "./CurrentAir";
const locationPicker = () => {
    return ( 
   <LocationContextProvider>
            <LocationList />
            <CurrentAir />
          </LocationContextProvider> 
    )    
}


    export default locationPicker;