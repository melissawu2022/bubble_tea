import "./BubbleTeaImage.css";
import { useState } from "react";

export default function BubbleTeaImage(props) {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div
            className="container"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <img className="bbt-image" src={props.data.bbtImage} alt="" />
            {isHovering ? (
                <div className="overlay">
                    <div className="text"> {props.data.cafeAddress1}</div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}
