import React from "react"

import LocationContextProvider from '../../context/LocationContext';
import AddLocation from "./AddLocation";

const DisaplayMyLocations = () => {

    return (
        <LocationContextProvider>
            <AddLocation />
        </LocationContextProvider>
    )
}

export default DisaplayMyLocations;