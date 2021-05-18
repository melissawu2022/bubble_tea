import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import SpacingGrid from "./components/SpacingGrid";
import SearchBar from "./components/SearchBar";

class App extends Component {
    render() {
        console.log("render");
        return (
            <div className="App">
                <div className="container">
                    <Header />
                    <SearchBar />
                </div>
            </div>
        );
    }
}

export default App;
