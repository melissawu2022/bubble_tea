import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Shop.css';


class Shop extends Component {
    render() {
        const {id, title, userId} = this.props.shop;
        return (
            <div className="container ShopContainer">
                <ul>
                    <li>user id: {userId}</li>
                    <li>id: {id}</li>
                    <li>title: {title}</li>
                </ul>
            </div>
        )
    }
}


Shop.propTypes = {
    shop: PropTypes.object.isRequired
}

export default Shop
