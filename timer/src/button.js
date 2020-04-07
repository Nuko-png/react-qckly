"use strict";

import React from "react";

export default class Button extends React.Component {
    startTimer(event) {
        return this.props.startTimer(this.props.time)
    }


    render(){
        return (
            <button type="button" className={this.props.view}
            onClick={this.startTimer.bind(this)}>
                {this.props.time} seconds
            </button>
        )
    }
}