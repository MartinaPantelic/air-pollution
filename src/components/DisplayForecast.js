import React from "react"


import LocationContextProvider from '../context/LocationContext';

import ForecastAir from "./ForecastAir";
//import LocationPicker from "./LocationPicker";



const DisplayAir = () => {
    return ( 
   <LocationContextProvider>
           
            <ForecastAir />
         
          </LocationContextProvider> 
    )    
}


    export default DisplayAir;