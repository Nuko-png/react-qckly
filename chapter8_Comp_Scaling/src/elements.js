import React from "react";

export function Button (props){
    
        return(
            <button
            className="btn btn-primary"
            onClick={props.handleClick}>
            {props.label}
           </button>
           
            )
}

export function Link(props) {
    
        return (<a onClick={props.handleClick}
                 href={props.link}> 
                {props.label}</a>
        )    
}


export function Logo (props) {
    
        return (
         <img onClick={props.handleClick} width="40"
        src="images/test.jpg" href="#"/>
        )
    }


