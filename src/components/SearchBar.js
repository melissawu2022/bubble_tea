import "./SearchBar.css";
import "./Slider.css";
import React from "react";
import Slider from "./Slider";
import { useState, useEffect } from "react";
import SpacingGrid from "./SpacingGrid";

export default function SearchBar() {
    const [formValue, setFormvalue] = useState("");
    const [latFromSearch, setLatFromSearch] = useState(0.0);
    const [longFromSearch, setLongFromSearch] = useState(0.0);

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLatFromSearch(position.coords.latitude);
                setLongFromSearch(position.coords.longitude);
                console.log("lat:" + latFromSearch);
                console.log("long:" + longFromSearch);
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    };

    useEffect(() => {
        console.log(formValue);
    }, [formValue]);

    const getPostalCode = (event) => {
        setFormvalue(event.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        //getLocation();
        console.log("onSubmit");
    };

    const onClick = () => {
        <SpacingGrid formValue={formValue} />;
    };

    return (
        <div>
            <form>
                <input
                    className="input-box"
                    onChange={getPostalCode}
                    type="text"
                    placeholder="Enter postal code of current location"
                />
            </form>
            <button className="search-button" onClick={onClick}>
                Search
            </button>
            <h4 className="or-text">or</h4>
            <button className="getCurrentLocation-button" onClick={getLocation}>
                Use Current Location
            </button>
            <Slider />
        </div>
    );
}
