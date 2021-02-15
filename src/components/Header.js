import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
    render() {
        return (
            <div className="bbt-header">
                <h1>BobaTime</h1>
                <h6>The perfect solution for those of us who want to get bubble tea but don't want to travel far.</h6>
            </div>
        )
    }
}

export default Header
