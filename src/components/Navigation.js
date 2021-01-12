import React from "react";

import {
  Link
} from 'react-router-dom';



const Navigation = props => {
  console.log("menu r")
  return (

    <div className="menu-items">
      <ul>
      <li><Link className="menu-link" exact="true" to="/">home</Link></li>
        <li><Link className="menu-link" exact="true" to="/location">Location</Link></li>
        <li><Link className="menu-link" exact="true" to="/current_air">Current Air</Link></li>
        <li>
          <Link to="/update-profile" className="menu-link">
            Update Profile
          </Link>
        </li>
      </ul>
    </div>

  );
};





export default Navigation;
