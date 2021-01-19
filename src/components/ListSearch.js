import React, { useState, useEffect, useRef } from 'react';
import { Card } from "react-bootstrap";

const ListSearch = React.memo(props => {
  const { onLoadLocations } = props;
  //const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef();

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
    <section className="search search-input-filter">
      <Card>
        <div className="search-input-filter">
          {/* <label>Filter by Title</label>
          <input
            ref={inputRef}
            type="text"
            value={enteredFilter}
            /> */}
        </div>
      </Card>
    </section>
  );
});

export default ListSearch;