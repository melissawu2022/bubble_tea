import React, { Component } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import "./Shop.css";

class Shop extends Component {
    render() {
        const { name, rating, image_url } = this.props.shop;
        return (
            <Paper className="paper-style">
                <h1 className="spacing-grid-paper-h1"> {name} </h1>
                <h2 className="spacing-grid-paper-h2">Rating: {rating}</h2>
                <img className="bbt-image" src={image_url} />
            </Paper>
        );
    }
}

Shop.propTypes = {
    shop: PropTypes.object.isRequired
};

export default Shop;
