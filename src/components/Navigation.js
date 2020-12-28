import React from "react";

//IMPORT COMPONENTS
// import LocationPicker from '../components/LocationPicker';
// import Profile from './components/Profile';
// import Projects from './components/Projects';
// import Contact from './components/Contact';

// import './App.css';

import {
  Link
} from 'react-router-dom';



const Navigation = props => {
    console.log("menu r")
    return (
  
        <div className="menu-items">
          <ul>
            <li><Link className="menu-link" exact="true" to="/location">Location</Link></li>
            {/* <li><Link className="menu-link" to="/about">What do I do</Link></li>
            <li><Link className="menu-link" to="/projects">Projects</Link></li>
            <li><Link className="menu-link" to="/contact">Contact</Link></li> */}
          </ul>
        </div>
     
      );
  };
  
  



export default Navigation;
