import React, {Component} from "react";
//import Shop from "./Shop";
import Grid from '@material-ui/core/Grid';
import PropTypes from "prop-types";
//import SpacingGrid from "./SpacingGrid";

class ShopList extends Component {
	render() {
		//console.log(this.props.shops)
		//return this.props.shopList.map((shop) => <Shop shop={shop} />);
		//{this.state.shops.map(shop => <h2 key={shop.id}>{shop.title}</h2>)}

		return this.props.shopList.map(shop =>  <Grid shop={shop} />);
		//return <SpacingGrid spacingGrid={this.props.shopList}/>
		//return this.props.shopList.map((shop) => <SpacingGrid shop = {shop}/>);
	}
}

ShopList.propTypes = {
	shops: PropTypes.array.isRequired,
};

export default ShopList;
