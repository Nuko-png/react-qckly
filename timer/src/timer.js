"use strict";

import React from "react";

 export default function Timer (props) {
    
        if(props.timeLeft ==0){
            document.getElementById('end-of-time').play()
        }
        if(props.timeLeft == null || props.timeLeft == 0 || props.timeLeft < 0){
            return <div/>
        }
        return <h1>Time Left: {props.timeLeft}</h1>
    }
