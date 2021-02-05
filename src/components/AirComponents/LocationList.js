import React, {  useEffect } from 'react';



  const LocationList = React.memo(props => {
    const { onLoadLocations } = props;
    useEffect(() => {
      const timer = setTimeout(() => {
        // if (enteredFilter === inputRef.current.value) {
          //const query = enteredFilter.length === 0
           // ? ''
           // : `?orderBy="title"&equalTo="${enteredFilter}"`;
          fetch('https://auth-hooks-dev-3ac29-default-rtdb.firebaseio.com/locations.json'
          // + query
          
          )
            .then(response => response.json())
            .then(responseData => {
              const loadedLocations = [];
              for (const key in responseData) {
                loadedLocations.push({
                  id: key,
                  lon: responseData[key].lon,
                  lat: responseData[key].lat,
                  place: responseData[key].place
                });
              }
              onLoadLocations(loadedLocations);
            });
        }
  
      , 500);
      return () => {
        clearTimeout(timer);
      };
  
    }, onLoadLocations);
    //[enteredFilter, onLoadLocations, inputRef]); const { onLoadLocations } = props;


  useEffect(() => {
    const timer = setTimeout(() => {
      // if (enteredFilter === inputRef.current.value) {
        //const query = enteredFilter.length === 0
         // ? ''
         // : `?orderBy="title"&equalTo="${enteredFilter}"`;
        fetch('https://auth-hooks-dev-3ac29-default-rtdb.firebaseio.com/locations.json'
        // + query
        
        )
          .then(response => response.json())
          .then(responseData => {
            const loadedLocations = [];
            for (const key in responseData) {
              loadedLocations.push({
                id: key,
                lon: responseData[key].lon,
                lat: responseData[key].lat,
                place: responseData[key].place
              });
            }
            onLoadLocations(loadedLocations);
          });
      }

    , 500);
    return () => {
      clearTimeout(timer);
    };

  }, onLoadLocations);
  //[enteredFilter, onLoadLocations, inputRef]);

  return (
 
    <section className="location-list list-group mb-3 mt-3">
      <h4 className="locations-title mb-3">My Locations</h4>
      <ul>
        {props.location.map(locationItem => (
          <li key={locationItem.id} className="d-flex list-group-item list-group-item-action"> 
          <a className="custom-tooltip" onClick={props.clickHandler.bind(this,locationItem.lat, locationItem.lon, locationItem.place)}>{locationItem.place}
          <span className="tooltiptext">Click to see Air Data for {locationItem.place}</span>
          </a>
            <span className="d-none">{locationItem.lon}</span>
            <span className="d-none">{locationItem.lat}</span>
            <span onClick={props.onRemoveItem.bind(this, locationItem.id)} className="delete-icon"></span>
          </li>
        ))}
      </ul>
     
    </section>
  );
});

export default LocationList;
