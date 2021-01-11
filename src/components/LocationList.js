import React, { useContext } from 'react';
import { LocationContext } from '../context/LocationContext';

const LocationList = () => {
 
  const { locations, markers } = useContext(LocationContext);
  
 
  return ( 
    <div className="book-list">
      <ul>
        {locations.map(location => {
          return (
          <li key={location.id}>{location.title}<span>{location.log}</span></li>
          );
        })}
      </ul>
      <ul>
        {markers.map(marker => {
          return (
          <li><span>{marker.lng}</span></li>
          );
        })}
      </ul>
{/* <div>{marker.current.lng}</div> */}
    
    </div>
  );
}
 
export default LocationList;