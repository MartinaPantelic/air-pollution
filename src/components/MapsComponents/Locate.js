import React, { useContext } from "react"
import { LocationContext } from '../../context/LocationContext';
import { Button } from "react-bootstrap"

// users geolocation trigger
function Locate() {

  const { panTo } = useContext(LocationContext);

  return (

    <Button
      className="locate-btn mb-3 mt-5"
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

export default Locate