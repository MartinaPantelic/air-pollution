import React from "react"
import LocationContextProvider from '../context/LocationContext';

export default function Dashboard() {
  

  return (
    <>
    <h2 className="text-center mb-5">Choose your location</h2>
      <LocationContextProvider />
     
    </>
  )
}
