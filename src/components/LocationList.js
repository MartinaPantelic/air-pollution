import React, { createContext } from 'react';
export const LocationListContext = createContext();


const LocationListContextProvider = (props) => {
  let locationListCoord = props.location.map(locationItem => {
    return (
      locationItem.place
    );
  })
  let locationListPlace = locationListCoord[locationListCoord.length - 1]

  // latitudeList[latitudeList.length - 1];  console.log(locationListPlace)

  return (
    <LocationListContext.Provider value={{ locationListPlace }}>
    <section className="location-list list-group mb-3">
      <h4 className="locations-title mb-3">My Locations</h4>
      <ul>
        {props.location.map(locationItem => (
          <li key={locationItem.id} className="d-flex list-group-item list-group-item-action"> 
          <a className="custom-tooltip" onClick={() => console.log(locationItem)}>{locationItem.place}
          <span className="tooltiptext">Click to see Air Data for {locationItem.place}</span>
          </a>
            <span className="d-none">{locationItem.lon}</span>
            <span className="d-none">{locationItem.lat}</span>
            <span onClick={props.onRemoveItem.bind(this, locationItem.id)} className="delete-icon"></span>
          </li>
        ))}
      </ul>
      {/* <div>{locationListPlace}</div> */}
    </section>
    </LocationListContext.Provider>
  );
};

export default LocationListContextProvider;
