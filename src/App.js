import React, {Component} from "react";
import "./App.css";
import Header from "./components/Header";
import SpacingGrid from "./components/SpacingGrid";
import SearchBar from "./components/SearchBar";
import axios from "axios";


class App extends Component {
	state = {
		shopList: []
	};

	componentDidMount () {
		console.log("componentDidMount");
        this.getRestaurantsFromApi('boba','Ottawa');
	}
	
	 getRestaurantsFromApi = (searchTerm,locationSearched) => {
        //UI feedback to tell the user when we are retrieving infromation from the API 
        this.setState({ loading: true })

        //using a proxy server cors-anywhere to get rid of the CROS probblem 
        //SUPER HOT TIP: passing the location variable, which equals to the user's input (see below). Instead of grabbbing the entire API, it will only retrieve the restaurants that are closed to the lcoation information we entered. This makes the lodading wayyyyyyy faster.
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${locationSearched}`, {
        //required authorization format from API 
        headers: {
            //to get the API from the .env file use process.env.{variable name}
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        },
        //option params passed to API call to retrieve only breakfast and lunch spots 
        params: {
			//categories: 'breakfast_brunch',
			term: searchTerm,
        }
        })
        .then((res) => {
            console.log(res.data.businesses)
            //change the state of App to reflect on the result we are given from the API
            //at the same time, setting the loading state to false 
            this.setState({ shopList: res.data.businesses })
        })
        .catch((err) => {
            //fire the errorState message if there is no information return from the API
            this.setState({ errorState: `Sorry we coudln't find information related to the location you search, do you want to try something else?`, loading: false })
        })
    }


	/*
	componentDidMount() {
	  //.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
	  //const proxyurl = "https://cors-anywhere.herokuapp.com/";
	  const url = 'https://api.yelp.com/v3/businesses/search?term=bubbletea&latitude=37.786882&longitude=-122.399972';
	  const config = {
		  //withCredentials: false,
		  headers: {
		  "Authorization": "Bearer XZRFvIgI1ifKg9sNL5MALDwA2RI2-3wMO8DdxVvIDHiliZuMrEuTIEpNeAfLh_1zKpRwqWBTsnSBLlgIHsnYgepPcD_OMJGo6CZA6L3q0v4saVQgj__oJPfxSmRWX3Yx",
		  "Content-Type": "application/json",
		  'Access-Control-Allow-Origin' : '*',
		  'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
		  'Access-Control-Allow-Headers': 'append,delete,entries,foreach,get,has,keys,set,values,Authorization'
		  }
		}
	  axios.get( url,config)
      .then(json => this.setState({ shopList: json.data })).catch(err => {
		  console.log(err)
	  })
	}
	*/
	/*componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(json => {
			this.setState({
				isLoaded: true,
				shops: json
			})
		})
	}*/


	render() {
		console.log("render");
		return (
			<div className="App">
				<div className="container">
					<Header />
					<SearchBar />
					<SpacingGrid shopList={this.state.shopList}/>
				</div>
			</div>
		);
		/*var {isLoaded, shops} = this.state;
		if(!isLoaded) {
			return <div>Loading...</div>
		} else {
			return (
				<div className="App">
					<ul>
						{shops.map(item => (
							<li key={item.id}>
								Name: {item.name} | {item.email}
							</li>
						))}
					</ul>
				</div>
			)
		}
		*/
	}
}

export default App;
