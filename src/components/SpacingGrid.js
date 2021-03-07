import React from "react";
import "./SpacingGrid.css";
import Shop from "./Shop";

export default function SpacingGrid(props) {
    return (
        <div className="grid-container">
            {props.shopList.map((shop, idx) => (
                <div key={idx}>
                    <Shop shop={shop} key={idx + 1} />
                </div>
            ))}
        </div>
    );
}
