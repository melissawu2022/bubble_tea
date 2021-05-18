import React from "react";
import "./SpacingGrid.css";
import Shop from "./Shop";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SpacingGrid(prop) {
    const [shopList, setShoplist] = useState([]);

    useEffect(() => {
        getRestaurantsFromApi("bubble tea", prop.formValue, 500);
    }, []);

    const getRestaurantsFromApi = (searchTerm, location, rad) => {
        axios
            .get(
                //`${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}`,
                `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?location${location}`,
                {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
                    },
                    params: {
                        term: searchTerm,
                        radius: rad
                    }
                }
            )
            .then((res) => {
                console.log(res.data.businesses);
                //this.setState({ shopList: res.data.businesses });
                setShoplist(res.data.businesses);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="grid-container">
            {shopList.map((shop, idx) => (
                <div key={idx}>
                    <Shop shop={shop} key={idx + 1} />
                </div>
            ))}
        </div>
    );
}
