import React, { useState } from "react"


import LocationContextProvider from '../context/LocationContext';
import LocationListContextProvider from './LocationList';
import CurrentAir from "./CurrentAir"
import ForecastAir from "./ForecastAir";
import AddLocation from "./AddLocation";
import { Button } from "react-bootstrap"
import VisibilityHandler from "./VisibilityHandler"



const DisaplayMyLocations = () => {

    const [showForecast, toggleVisibility] = VisibilityHandler(<ForecastAir />, false)
    const [buttonText, SetButtonText] = useState(false)


    return (
        <LocationContextProvider>
          
            <AddLocation />
            {/* </LocationListContextProvider> */}
        </LocationContextProvider>
    )
}

export default DisaplayMyLocations;