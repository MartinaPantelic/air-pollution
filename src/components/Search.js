import React, { useState, useEffect, useRef } from 'react';
import { Card } from "react-bootstrap";

const Search = React.memo(props => {
  const { onLoadLocations } = props;
  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query = enteredFilter.length === 0
        ? ''
        : `?orderBy="title"&equalTo="${enteredFilter}"`;
      fetch('https://react-hooks-update-c8ad3-default-rtdb.firebaseio.com/ingredients.json' + query)
        .then(response => response.json())
        .then(responseData => {
          const loadedLocations = [];
          for (const key in responseData) {
            loadedLocations.push({
              id: key,
              title: responseData[key].title,
              amount: responseData[key].amount
            });
          }
          onLoadLocations(loadedLocations);
        });
      }
 
    }, 500);
    return () => {
      clearTimeout(timer);
    };

  }, [enteredFilter, onLoadLocations, inputRef]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
          ref = {inputRef} 
          type="text" 
          value={enteredFilter}
          onChange={event => setEnteredFilter(event.target.value)} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
