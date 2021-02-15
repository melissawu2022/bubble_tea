import "./SearchBar.css";
import React from "react";

class SearchBar extends React.Component {
    onSubmit = (e) => {
        e.preventDefault();
        console.log("boop");
    };

    

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        className="input-box"
                        type="text"
                        placeholder="Enter current address..."
                    />
                    <button className="search-button" >
                        Search
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchBar;
