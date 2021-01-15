import React from 'react';


const LocationList = props => {
  return (
    <section className="Location-list">
      <h2>Loaded Locations</h2>
      <ul>
        {props.location.map(locationItem => (
          <li key={locationItem.id} onClick={props.onRemoveItem.bind(this, locationItem.id)}>
            <span>{locationItem.title}</span>
            <span>{locationItem.amount}x</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LocationList;
