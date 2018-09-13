import React, { Component } from "react";
import "./DexBot.css";

class DexBot extends Component {
    render() {
        return (
            <div className={`pokedex pokedex-btm ${this.props.closed}`}>
                <div className="halfCircle" id="halfCircleBottom">
                    <input className="blueCircle" id="blueCircle" type="button"></input>
                </div>
            </div>
        )
    }
}

export default DexBot;