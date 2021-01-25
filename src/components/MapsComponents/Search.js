
import React, { useContext } from "react"

import { LocationContext } from '../../context/LocationContext';

// places autocomplete when search
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

//search location input
const Search = () => {
    const { panTo } = useContext(LocationContext);
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


export default Search;