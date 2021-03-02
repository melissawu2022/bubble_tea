import React from "react";
import "./SpacingGrid.css";
import Shop from "./Shop";

export default function SpacingGrid(props) {
    return (
        <div class="grid-container">
            {props.shopList.map((shop, idx2) => (
                <Shop shop={shop} key={idx2} />
            ))}
        </div>
    );
}
