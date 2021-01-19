import React from 'react';
import DisplayForecast from "./DisplayForecast"
import { Link } from "react-router-dom"

export default function LinkForecastAir() {
 
 

  return (
    <>
    <div>
    <DisplayForecast/>
    <Link className="nav-link" exact="true" to="/current-air">Current</Link>
    </div>
      
    
    </>
  )
}
