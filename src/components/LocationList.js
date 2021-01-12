import React, { useContext } from 'react';
import { LocationContext } from '../context/LocationContext';

const LocationList = () => {
 
  const { markers } = useContext(LocationContext);
  
 
  return ( 
    <div className="book-list">
      
      <ul>
        {markers.map(marker => {
          return (
          <li><span>{marker.lng} ovo je iz location list</span></li>
          );
        })}
      </ul>
    
    </div>
  );
}


 
export default LocationList;