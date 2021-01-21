import React, { useState } from "react"


import LocationContextProvider from '../context/LocationContext';
import CurrentAir from "./CurrentAir"
import ForecastAir from "./ForecastAir";
import AddLocation from "./AddLocation";
import { Button } from "react-bootstrap"
import VisibilityHandler from "./VisibilityHandler"



const DisplayForecastAir = () => {

    const [showForecast, toggleVisibility] = VisibilityHandler(<ForecastAir />, false)
    const [buttonText, SetButtonText] = useState(false)


    return (
        <LocationContextProvider>
            <CurrentAir />

            {showForecast}
            <Button variant="outline-primary" className="btn-lg mb-5 mx-auto" onClick={() => { toggleVisibility(); SetButtonText(!buttonText) }}>{buttonText ? "Hide Forecast" : "Show Forecast"}</Button>
            <AddLocation />
          
        </LocationContextProvider>
    )
}

export default DisplayForecastAir;