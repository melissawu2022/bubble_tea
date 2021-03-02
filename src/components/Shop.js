import React, { Component } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import "./SpacingGrid.css";
import "./Shop.css";

class Shop extends Component {
    render() {
        const { name, rating, image_url, location } = this.props.shop;
        return (
            <Paper className="paper-style">
                <h1 className="first-header"> {name} </h1>
                <h2 className="second-header">Rating: {rating}</h2>
                <img className="bbt-image" src={image_url} alt=" " />
            </Paper>
        );
    }
}

Shop.propTypes = {
    shop: PropTypes.object.isRequired
};

export default Shop;
