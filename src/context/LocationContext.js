import React, { createContext } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";

import { formatRelative } from "date-fns";
import { Container, Button } from "react-bootstrap"

import ShowPlace from '../components/ShowPlace';
import DisplayMyLocations from '../components/DisplayMyLocations';


import Search from '../components/MapsComponents/Search'
import Locate from '../components/MapsComponents/Locate';
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
  const [showResults, setShowResults] = React.useState(false);
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

  const ShowGoogleMap = () => setShowResults(!showResults)

  return (
    <LocationContext.Provider value={{ markers, longitude, latitude, panTo }}>

      <Container>
        {/* <ShowPlace /> */}

        {/* google map */}
        {/* <CurrentAir /> */}
        {props.children}
        {/* <DisplayMyLocations /> */}
        <div style={{ display: showResults ? 'block' : 'none' }}>
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
                  <ShowPlace className="infowindow h6"/>
                    <div>
                      {/* {airData.list[0].main.aqi} */}
                    </div>
                  
                  <p>{formatRelative(selected.time, new Date())}</p>
                </div>
              </InfoWindow>
            ) : null}
          </GoogleMap>
        </div>
        <div>
        <Button className="btn-lg mb-3 btn-outline-primary mt-3 white-override" onClick={ShowGoogleMap}>{showResults ? "Hide Map" : "Pick Location"}</Button>
        {/* <AddLocation longitude={longitude} latitude={latitude} /> */}

        </div>
       
      </Container>
      {/* <img src={citizens_masks} alt="citizens_masks" className="w-100"/> */}
    </LocationContext.Provider>
  )
}







export default LocationContextProvider;

