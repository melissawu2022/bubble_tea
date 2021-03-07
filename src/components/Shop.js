import React, { Component } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import "./SpacingGrid.css";
import "./Shop.css";
import BubbleTeaImage from "./BubbleTeaImage";

class Shop extends Component {
    render() {
        //const { name, rating, image_url } = this.props.shop;
        const { name, rating, image_url, location } = this.props.shop;
        const data = {
            bbtImage: image_url,
            cafeAddress1: location.address1
        };
        //console.log("LOCATION: " + location);
        return (
            <Paper className="paper-style">
                <h1 className="first-header"> {name} </h1>
                <h2 className="second-header">Rating: {rating}</h2>
                <BubbleTeaImage data={data} />
            </Paper>
        );
    }
}

Shop.propTypes = {
    shop: PropTypes.object.isRequired
};

export default Shop;
