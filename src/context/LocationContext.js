import React, { createContext, useState } from 'react';
//
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
import { Container } from "react-bootstrap"

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
  lat: 43.6532,
  lng: -79.3832,
};




const LocationContextProvider = (props) => {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);
  let [finalLng, setFinalLng] = React.useState(null);
  let [finalLat, setFinalLat] = React.useState(null);
  // let [latitude, setLatitude] = React.useState(-33.7560119)
  // let [longitude, setLongitude] = React.useState(150.6038367)

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
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;


  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });

    mapRef.current.setZoom(14);
    console.log(lat, lng)
    setFinalLng(lng)
    setFinalLat(lat)

  }, []);



  console.log(finalLng, "ovo je finalLng")
  console.log(finalLat, "ovo je finalLat")

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";


  //

  return (
    <LocationContext.Provider value={{ markers, finalLat, finalLng, finalLat }}>
      <Container>
        {props.children}

        {/* google map */}
        <div className="container">
          {}
          <h1>
            Bears{" "}
            <span role="img" aria-label="tent">
              ⛺️
        </span>


          </h1>

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
                    <span role="img" aria-label="bear">
                      🐻
                </span>{" "}
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

      </Container>
    </LocationContext.Provider>
  )
}


function Locate({ panTo }) {

  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });

          },
          () => null
        );
      }}
    >
      <img src="/compass.svg" alt="compass" />
    </button>

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
      radius: 100 * 1000,
    },
  });



  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });



    } catch (error) {
      console.log("😱 Error: ", error);
    }


  };




  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
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