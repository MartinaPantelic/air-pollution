import React from "react"

import LocationContextProvider from '../context/LocationContext';
import CurrentAir from "./CurrentAir";




const DisplayAir = () => {
    return ( 
        <div>
   <LocationContextProvider>
        <CurrentAir />
        </LocationContextProvider> 
        </div>

    )    
}


    export default DisplayAir;