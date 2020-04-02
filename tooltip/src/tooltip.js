"use strict";

import propTypes from "prop-types";
import React from "react";
import ReactDOM from"react-dom";


export default class Tooltip extends React.Component {
    constructor(props){
        super(props)
        this.state = {opacity: false}
        this.handleByClick = this.handleByClick.bind(this);
        this.handleByHover = this.handleByHover.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    handleByClick(){
        if (!this.props.byClick){
            return false
        }
        else return this.toggle();

    }
    handleByHover(){
        if (!this.props.byHover){
            return false
        }
        
        else return this.toggle();

    }


    toggle(){
        const tooltipNode = ReactDOM.findDOMNode(this);
        this.setState({
            opacity: !this.state.opacity,
            top: tooltipNode.offsetTop,
            left: tooltipNode.offsetLeft
        })
        
    }

    render() {
        const style = {
          zIndex: (this.state.opacity) ? 1000 : -1000,
          opacity: +this.state.opacity,
          top: (this.state.top || 0) + 20,
          left: (this.state.left || 0) - 30
        }
        return (
          <div style={{display: 'inline'}}>
             
            
            <span style={{color: 'blue'}} onClick={this.handleByClick} onMouseEnter={this.handleByHover} onMouseOut={this.handleByHover}>
              {this.props.children}
            </span>
            <div className="tooltip bottom" style={style} role="tooltip">
              <div className="tooltip-arrow"></div>
              <div className="tooltip-inner">
                {this.props.text}
              </div>
            </div>
          </div>
        )
      }
    }

    Tooltip.propTypes = {
        byClick: propTypes.bool,
        byHover: propTypes.bool
    }

    Tooltip.defaultProps = {
        byClick: false,
        byHover: true
    }