import React from 'react';


const LocationList = props => {
  return (
    <section className="location-list list-group mb-3">
      <h3 className="locations-title mb-3">My Locations</h3>
      <ul>
        {props.location.map(locationItem => (
          <li key={locationItem.id} className="d-flex list-group-item list-group-item-action"> 
          <a className="custom-tooltip">{locationItem.place}
          <span class="tooltiptext">Click to see Air Data for {locationItem.place}</span>
          </a>
            <span className="d-none">{locationItem.lon}</span>
            <span className="d-none">{locationItem.lat}</span>
            <span onClick={props.onRemoveItem.bind(this, locationItem.id)} className="delete-icon"></span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LocationList;
