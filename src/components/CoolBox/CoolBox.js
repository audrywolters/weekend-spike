import React, { Component } from "react";
import './CoolBox.css';

class CoolBox extends Component {

    render() {
        return (
            <div className={ this.props.class }>
                { this.props.text } 
            </div>
        );
    }
}

export default CoolBox;
