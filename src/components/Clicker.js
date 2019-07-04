import React, { Component } from 'react'
import "../Clicker.css";

export default class Clicker extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div className="clicker">
                    <div id="result">0</div>
                    <button id="left"><i className="fa fa-plus fa-2x"></i></button>
                    <button id="mid"><i className="fa fa-refresh fa-2x"></i></button>
                    <button id="right"><i className="fa fa-minus fa-2x"></i></button>
                </div>
            </div>

        )
    }
}
