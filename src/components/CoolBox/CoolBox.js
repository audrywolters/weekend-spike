import React, { Component } from "react";
import './CoolBox.css';


class CoolBox extends Component {

    render() {
        return (
            <div className="coolBox">
                { this.props.coolText } 
            </div>
        );
    }
}

export default CoolBox;
