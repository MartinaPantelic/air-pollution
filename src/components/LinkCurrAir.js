import React from 'react';
import DisplayAir from "./DisplayAir"
import { Link } from "react-router-dom"

export default function LinkCurrAir() {
 
 

  return (
    <>
    <div>
    <DisplayAir/>
    <Link className="nav-link" exact="true" to="/location">Forecast</Link>
    </div>
      
    
    </>
  )
}
