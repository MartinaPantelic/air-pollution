import React, {useState, useEffect, useCallback, useContext} from "react"
import LocationList from '../components/LocationList';
//import LocationListContext from '../components/LocationList';
import { LocationContext } from '../context/LocationContext';
import ListSearch from '../components/ListSearch';
import { Button } from "react-bootstrap"


const AddLocation = () => {
    
    const { longitude, latitude } = useContext(LocationContext);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [userLocation, setUserLocation] = useState([]);
    
    const submitHandler = async (event) => {
      event.preventDefault();
       await getplaceName(latitude, longitude).then( place =>{
        addLocationHandler({ lon: longitude, lat: latitude, place: place });   
       })
    };
    useEffect(() => {
      //console.log('RENDER Location', userLocation);
    }, [userLocation]);
    const filteredLocationHandler = useCallback(filteredLocation => {
      setUserLocation(filteredLocation);
    }, []);
    async function getplaceName(lat, lng) {
      try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=true&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`);
        const data = await response.json();
        console.log(data);
        if (data.results.length > 0) {
          console.log("ima nesto!!!")
          console.log(data.results[0].address_components[3].long_name)
          return data.results[0].address_components[3].long_name
          
        }
        else {
          console.log("NEMA NISTA!!!!")
          return "Unknown Location";
        }
      } catch (error) {
        console.log(error);
      }
    }
    const addLocationHandler = location => {
      fetch('https://auth-hooks-dev-3ac29-default-rtdb.firebaseio.com/locations.json', {
        method: 'POST',
        body: JSON.stringify(location),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(response => {
         
          return response.json();
        })
        .then(responseData => {
          console.log(responseData)
          setUserLocation(prevLocation => [
            ...prevLocation,
            { id: responseData.name, ...location }
          ]);
        });
    };
    const removeLocationHandler = locationId => {
      setIsLoading(true);
      fetch(
        `https://auth-hooks-dev-3ac29-default-rtdb.firebaseio.com/locations/${locationId}.json`,
        {
          method: 'DELETE'
        }
      ).then(response => {
        setIsLoading(false);
        setUserLocation(prevLocation =>
          prevLocation.filter(location => location.id !== locationId)
        );
      }).catch(error => {
        setError('Something went wrong!');
        setIsLoading(false);
      });
    };
    console.log(userLocation)
    return (
      <div className="add-location">
        <section>
          <ListSearch onLoadLocations={filteredLocationHandler} />
          <LocationList
            location={userLocation}
            onRemoveItem={removeLocationHandler}
          />
          <div className="Location-form__actions">
            <form onSubmit={submitHandler}>
            <Button type="submit" className="mb-5">Save Location</Button>
            </form>
          </div>
        </section>
      </div>
    );
  };
  export default AddLocation;