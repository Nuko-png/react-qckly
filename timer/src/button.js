"use strict";

import React from "react";

export default function Button (props) {
   function startTimer(event) {
        return props.startTimer(props.time)
    }
        return (
            <button type="button" className={props.view}
            onClick={() => startTimer()}>
                {props.time} seconds
            </button>
        )
}