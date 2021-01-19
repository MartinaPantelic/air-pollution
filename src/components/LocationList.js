import React from 'react';


const LocationList = props => {
  return (
    <section className="location-list list-group">
      <h3 className="locations-title mb-3">My Locations</h3>
      <ul>
        {props.location.map(locationItem => (
          <li key={locationItem.id} onClick={props.onRemoveItem.bind(this, locationItem.id)}> 
          <a className="list-group-item list-group-item-action">{locationItem.place}</a>
            <span>{locationItem.lon}</span>
            <span>{locationItem.lat}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LocationList;
