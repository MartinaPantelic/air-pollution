import React from 'react';


const LocationList = props => {
  return (
    <section className="Location-list">
      <h2>Loaded Locations</h2>
      <ul>
        {props.location.map(ig => (
          <li key={ig.id} onClick={props.onRemoveItem.bind(this, ig.id)}>
            <span>{ig.title}</span>
            <span>{ig.amount}x</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LocationList;
