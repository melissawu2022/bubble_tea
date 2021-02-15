import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import SpacingGrid from "./components/SpacingGrid";
import SearchBar from "./components/SearchBar";
import axios from "axios";

class App extends Component {
    state = {
        shopList: []
    };

    componentDidMount() {
        console.log("componentDidMount");
        this.getRestaurantsFromApi("boba", "Ottawa");
    }

    getRestaurantsFromApi = (searchTerm, locationSearched) => {
        //UI feedback to tell the user when we are retrieving infromation from the API
        this.setState({ loading: true });

        axios
            .get(
                `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?location=${locationSearched}`,
                {
                    headers: {
                        //to get the API from the .env file use process.env.{variable name}
                        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
                    },
                    //option params passed to API call to retrieve only search term spots
                    params: {
                        term: searchTerm
                    }
                }
            )
            .then((res) => {
                console.log(res.data.businesses);
                this.setState({ shopList: res.data.businesses });
            })
            .catch((err) => {
                this.setState({
                    errorState: `Sorry we coudln't find information related to the location you search, do you want to try something else?`,
                    loading: false
                });
            });
    };

    render() {
        console.log("render");
        return (
            <div className="App">
                <div className="container">
                    <Header />
                    <SearchBar />
                    <SpacingGrid shopList={this.state.shopList} />
                </div>
            </div>
        );
    }
}

export default App;
