import React, { useContext } from 'react';
import { LocationContext } from '../context/LocationContext';

const LocationList = () => {
 
  const { locations } = useContext(LocationContext);
  
 
  return ( 
    <div className="book-list">
      <ul>
        {locations.map(location => {
          return (
          <li key={location.id}>{location.title}<span>{location.log}</span></li>
          );
        })}
      </ul>
    </div>
  );
}
 
export default LocationList;