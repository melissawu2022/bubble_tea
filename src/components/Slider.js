//import "./SpacingGrid.css";
import React from "react";
import "./Slider.css";

class Slider extends React.Component {
    state = {
        sliderValue: 0
    };

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({ sliderValue: event.target.value });
    };

    render() {
        return (
            <div className="sliderObject">
                <div>Set the radius: {this.state.sliderValue} km </div>
                <input
                    type="range"
                    min="1"
                    max="100"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default Slider;
