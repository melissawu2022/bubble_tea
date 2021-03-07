import "./SearchBar.css";
import React from "react";

class SearchBar extends React.Component {
    state = {
        formValue: ""
    };

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const pos = {
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                };
                console.log("lat:" + pos.lat);
                console.log("long:" + pos.long);
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    handleChange = (event) => {
        this.setState({ formValue: event.target.value });
    }

    onClick = () => {
        console.log("beep beep");
    };

    onSubmit = (e) => {
        e.preventDefault();
        //this.getLocation();
        console.log("boop");
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        value={this.state.formValue}
                        onChange={this.handleChange}
                        className="input-box"
                        type="text"
                        placeholder="Enter current address..."
                    />
                    <button className="search-button">Search</button>
                </form>
                <button className="search-button" onClick={this.getLocation}>
                    Get Current Location
                </button>
            </div>
        );
    }
}

export default SearchBar;
