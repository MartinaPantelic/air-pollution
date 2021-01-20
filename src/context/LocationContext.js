import React, { createContext } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { formatRelative } from "date-fns";
import { Container, Button } from "react-bootstrap"
import AddLocation from '../components/AddLocation';

import "@reach/combobox/styles.css";
export const LocationContext = createContext();
const libraries = ["places"];
const mapContainerStyle = {
  height: "50vh",
  width: "100%",
};
const options = {
  //   styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 35.9940329,
  lng: -78.898619,
};
const LocationContextProvider = (props) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const onMapClick = React.useCallback((e) => {
  
    setMarkers((current) => [
      ...current,
      {
       
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
    console.log(e.latLng.lat())
    
    
    
  }, []);
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
    //console.log(map)
  }, []);
  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
   
    setMarkers((current) => [
      ...current,
      {
        lat: lat,
        lng: lng,
        time: new Date(),
      },
    ]);
  }, []);
  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";
  let longitudeList = markers.map(marker => {
    return (
      marker.lng
    );
  })
  let latitudeList = markers.map(marker => {
    return (
      marker.lat
    );
  })
  let longitude = longitudeList[longitudeList.length - 1];
  let latitude = latitudeList[latitudeList.length - 1];
  return (
    <LocationContext.Provider value={{ markers, longitude, latitude }}>
      
      <Container>
      
        {/* google map */}
        <div className="container">
          { }
        
          <Locate panTo={panTo} />
          <Search panTo={panTo} />
          <GoogleMap
            id="map"
            mapContainerStyle={mapContainerStyle}
            zoom={8}
            center={center}
            options={options}
            onClick={onMapClick}
            onLoad={onMapLoad}
            render={({
            })}
          >
            {markers.map((marker) => (
              <Marker
                key={`${marker.lat}-${marker.lng}`}
                position={{ lat: marker.lat, lng: marker.lng }}
                onClick={() => {
                  setSelected(marker);
                  
                  
                }}
                icon={{
                  url: `/bear.svg`,
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(15, 15),
                  scaledSize: new window.google.maps.Size(30, 30),
                }}
              />
            ))}
            {selected ? (
             <InfoWindow
             position={{ lat: selected.lat, lng: selected.lng }}
             onCloseClick={() => {
               setSelected(null);
             }}
           >
             <div>
               {selected.lat}
               {selected.lng}
               <h2>
                
                 <div><span>AQI: </span>
                   {/* {airData.list[0].main.aqi} */}
                 </div>
               </h2>
               <p>Spotted {formatRelative(selected.time, new Date())}</p>
             </div>
           </InfoWindow>
            ) : null}
          </GoogleMap>
        </div>
        {props.children}
        {/* <AddLocation longitude={longitude} latitude={latitude} /> */}
      </Container>
    </LocationContext.Provider>
  )
}
function Locate({ panTo }) {
  return (
    <Button
      className="locate-btn mb-3"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: (position.coords.latitude),
              lng: (position.coords.longitude),
            });
          },
          () => null
        );
      }}
    >
      <span className="compass-icon"></span>
      Locate me
    </Button>
  );
}

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 1000 * 1000,
    },
  });
  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest
  const handleInput = (e) => {
    setValue(e.target.value);
  };
  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    console.log(address)
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      console.log(results[0].address_components[0].long_name)
      panTo({ lat, lng });
    } catch (error) {
      console.log(":scream: Error: ", error);
    }
  };
  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          className="form-control mb-3 float-left"
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

export default LocationContextProvider;