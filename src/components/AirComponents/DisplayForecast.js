import React, { useState } from "react"


import LocationContextProvider from '../../context/LocationContext';
import CurrentAir from "./CurrentAir"
import ForecastAir from "./ForecastAir"
import { Button } from "react-bootstrap"
import VisibilityHandler from "./VisibilityHandler"
import ShowPlace from "./ShowPlace";



const DisplayForecastAir = () => {

    const [showForecast, toggleVisibility] = VisibilityHandler(<ForecastAir />, false)
    const [buttonText, SetButtonText] = useState(false)


    return (
        <LocationContextProvider>
            {/* displays selected location name */}
            <ShowPlace />

             {/* current ait data for selected location */}
            <CurrentAir />

            {/* expands forecast on click */}
            {showForecast}
            <Button variant="outline-primary" className="btn-lg mb-5 mx-auto" onClick={() => { toggleVisibility(); SetButtonText(!buttonText) }}>{buttonText ? "Hide Forecast" : "Show Forecast"}</Button>
         
        </LocationContextProvider>
    )
}

export default DisplayForecastAir;