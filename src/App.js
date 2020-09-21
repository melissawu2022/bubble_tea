import React, {Component} from "react";
import Shops from "./components/Shops";
import "./App.css";
import Header from "./components/Header";
import LocationSearch from ".components/LocationSearch";

class App extends Component {
	state = {
		shops: [
			{
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
		],
	};

	render() {
		return (
			<div className="App">
				<div className="container">
					<Header />
					<LocationSearch />
					<Shops shops={this.state.shops} />
				</div>
			</div>
		);
	}
}

export default App;
