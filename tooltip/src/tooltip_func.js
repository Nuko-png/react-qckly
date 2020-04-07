"use strict";

import propTypes from "prop-types";
import React, {useState, useRef} from "react";
import ReactDOM from"react-dom";


export default function Tooltip (props) {
    const tooltipNode = React.useRef(null);
    const [byClick, runToggleClick] = useState(props.Click);
    const [byHover, runToggleHover] = useState(props.Hover);
    const [opacity, setOpacity ] = useState(false);
    const [left, setLeft ] = useState();
    const [top, setTop] = useState();
    const [zIndex, setZindex] = useState();
    function handleByClick(){
        if (!byClick){
            return false
        }
        else return runToggleClick(() => toggle()); 
                         

    }
    function handleByHover(){
        if (!byHover){
            return false
        }
        
        else return runToggleHover(() => toggle());

    }


    function toggle(){
        setOpacity(!opacity);
        setTop(tooltipNode.offsetTop);
        setLeft(tooltipNode.offsetLeft);
    }

        const style = {
          zIndex: (opacity) ? 1000 : -1000,
          setOpacity(+opacity) ,
          top: (top || 0) + 20,
          left: (left || 0) - 30
        }
        return (
          <div style={{display: 'inline'}}>
             
            
            <span style={{color: 'blue'}} onClick={handleByClick} onMouseEnter={handleByHover} onMouseOut={handleByHover}>
              {props.children}
            </span>
            <div className="tooltip bottom" style={style} role="tooltip">
              <div className="tooltip-arrow"></div>
              <div className="tooltip-inner">
                {props.text}
              </div>
            </div>
          </div>
        )
      }

    Tooltip.propTypes = {
        byClick: propTypes.bool,
        byHover: propTypes.bool
    }

    Tooltip.defaultProps = {
        byClick: false,
        byHover: true
    }