import React, { Component } from 'react';
import "../Header.css";


export default class Header extends Component {
    render() {
        return (
            <nav className = "container-fluid">
                <div className = "row">
                    <div className = "content">
                        <i className = "far fa-hand-pointer fa-4x text-white"></i>
                        <h2 className = "text-white">{this.props.title}</h2>
                    </div>
                    
                </div>
            </nav>
        )
    }
}
