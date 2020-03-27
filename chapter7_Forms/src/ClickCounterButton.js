"use strict";
import React from "react";

const ClickCounterButton = (props) => {
    return( <button
                onClick={props.handler} 
                className="btn btn-info"
                >Don't click!    
            </button>
           )   
}

export default ClickCounterButton;