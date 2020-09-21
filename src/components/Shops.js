import React, {Component} from "react";
import Shop from "./Shop";
import PropTypes from "prop-types";

class Shops extends Component {
	render() {
		//console.log(this.props.shops)
		return this.props.shops.map((shop) => <Shop shop={shop} />);
	}
}

Shops.propTypes = {
	shops: PropTypes.array.isRequired,
};

export default Shops;
