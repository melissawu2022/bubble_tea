import React, {Component} from "react";
import ShopList from "./components/ShopList";
import "./App.css";
import Header from "./components/Header";
import SpacingGrid from "./components/SpacingGrid";
import SearchBar from "./components/SearchBar";
import axios from "axios";


class App extends Component {
	state = {
		shops: []
		/*shops: [
			{
				isLoaded: false,
				name: "Gary Danko",
				rating: 4.5,
				"review count": 5296,
				price: "$$$$",
				coordinates: {
					latitude: 37.80587,
					longitude: -122.42058,
				},
				image_url:
					"https://s3-media0.fl.yelpcdn.com/bphoto/DaexjYqrjCLaaxRLyZdO_Q/l.jpg",
				url:
					"https://www.yelp.com/biz/gary-danko-san-francisco?adjust_creative=wpr6gw4FnptTrk1CeT8POg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=wpr6gw4FnptTrk1CeT8POg",
			},
		],*/
	};

	componentDidMount() {
		axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(json => this.setState({ shops: json.data }))
	}
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
		return (
			<div className="App">
				<div className="container">
					<Header />
					<SearchBar />
					<SpacingGrid/>
					<ShopList shopList={this.state.shops} />
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
