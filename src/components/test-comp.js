import React from "react"

import LocationList from './LocationList';
import LocationContextProvider from '../context/LocationContext';
const testComp = () => {
    return ( 
   <LocationContextProvider>
            <LocationList />
          </LocationContextProvider> 
    )    
}

    export default testComp;