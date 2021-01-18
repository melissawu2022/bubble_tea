import "./SearchBar.css";
import React from 'react';

class SearchBar extends React.Component {
    render () {
        return (
            <div>
                <input className="input-box" type="text" placeholder="Enter current address..."/>
                <button className="search-button" onClick={this.addItem}> Search </button>
            </div>
        );
    }
}

export default SearchBar