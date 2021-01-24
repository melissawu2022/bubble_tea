import React, {Component} from "react";
import Shop from "./Shop";
import PropTypes from "prop-types";
import SpacingGrid from "./SpacingGrid";

class ShopList extends Component {
	render() {
		//console.log(this.props.shops)
		//return this.props.shopList.map((shop) => <Shop shop={shop} />);
		//{this.state.shops.map(shop => <h2 key={shop.id}>{shop.title}</h2>)}

		//return this.props.shopList.map(shop =>  <Shop shop={shop} />);
		return this.props.shopList.map(shop => <SpacingGrid spacingGrid={shop} />);
	}
}

ShopList.propTypes = {
	shops: PropTypes.array.isRequired,
};

export default ShopList;
