import React, { useState, useEffect, useCallback } from 'react';

import LocationForm from './LocationForm';
import LocationList from './LocationList';
import Search from './Search';

const AddLocation = () => {
  const [userLocation, setUserLocation] = useState([]);


  useEffect(() => {
  console.log('RENDER Location', userLocation);
  }, [userLocation]);

  const filteredLocationHandler = useCallback(filteredLocation => {
    setUserLocation(filteredLocation);
  }, []);

  const addLocationHandler = Location => {
    fetch('https://auth-hooks-dev-3ac29-default-rtdb.firebaseio.com/locations.json', {
      method: 'POST',
      body: JSON.stringify(Location),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        setUserLocation(prevLocation => [
          ...prevLocation,
          { id: responseData.name, ...Location }
        ]);
      });
  };

  const removeLocationHandler = locationId => {
    setUserLocation(prevLocation =>
      prevLocation.filter(location => location.id !== locationId)
    );
  };

  return (
    <div className="App">
      <LocationForm onAddLocation={addLocationHandler} />


      <section>
        <Search onLoadLocations={filteredLocationHandler}/>
        <LocationList
          location={userLocation}
          onRemoveItem={removeLocationHandler}
        />
      </section>
    </div>
  );
};

export default AddLocation;
