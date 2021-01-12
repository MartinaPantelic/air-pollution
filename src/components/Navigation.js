import React from "react";

import {
  Link
} from 'react-router-dom';



const Navigation = props => {
  console.log("menu r")
  return (

    <div className="menu-items">
      <ul>
      <li><Link className="menu-link" exact="true" to="/">Dashboard</Link></li>
        <li><Link className="menu-link" exact="true" to="/location">Location</Link></li>
        <li><Link className="menu-link" exact="true" to="/current-air">Current Air</Link></li>
        <li><Link className="menu-link" exact="true" to="/update-profile">Update Profile</Link></li>
        <li><Link className="menu-link" exact="true" to="/login">Log In</Link></li>
        <li><Link className="menu-link" exact="true" to="/signup">Sign Up</Link></li>
        <li><Link className="menu-link" exact="true" to="/forgot-password">Forgot Pass</Link></li>
      </ul>
    </div>

  );
};





export default Navigation;
