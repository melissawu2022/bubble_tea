import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Shop.css';


class Shop extends Component {
    render() {
        const {name, rating, price, image_url} = this.props.shop;
        return (
            <div className="container ShopContainer">
                <ul>
                    <img src={image_url} alt="Chatime" style={{width: "200px"}}/>
                    <li>{name}</li>
                    <li>{rating}</li>
                    <li>{price}</li>
                   
                </ul>
            </div>
        )
    }
}


Shop.propTypes = {
    shop: PropTypes.object.isRequired
}

export default Shop
