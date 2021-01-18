import React, {Component} from "react";
import Shop from "./Shop";
import PropTypes from "prop-types";

class ShopList extends Component {
	render() {
		//console.log(this.props.shops)
		return this.props.shops.map((shop) => <Shop shop={shop} />);
	}
}

ShopList.propTypes = {
	shops: PropTypes.array.isRequired,
};

export default ShopList;
