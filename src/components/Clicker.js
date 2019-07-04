import React, { Component } from 'react'
import "../Clicker.css";

export default class Clicker extends Component {
    constructor(props) {
        super(props);

        this.state = { result: 0 }
    }

    increase = () => {
        const newValue = this.state.result + 1;
        this.setState({
            result: newValue
        });
    }

    decrease = () => {
        const newValue = this.state.result - 1;
        this.setState({
            result: newValue
        });
    }

    reset = () => {
        this.setState({
            result: 0
        });
    }

    render() {
        return (
            <div className="container">
                <div className="clicker">
                    <div id="result">{this.state.result}</div>
                    <button id="left" onClick={this.increase} > <i className="fa fa-plus fa-2x"></i></button>
                    <button id="mid" onClick={this.reset} > <i className="fa fa-refresh fa-2x"></i></button>
                    <button id="right" onClick={this.decrease}> <i className="fa fa-minus fa-2x"></i></button>
                </div>
            </div>

        )
    }
}
