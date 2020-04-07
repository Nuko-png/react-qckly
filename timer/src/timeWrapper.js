"use strict";
import React from "react";
import Timer from "./timer";
import Button from "./button";

export default class TimeWrapper extends React.Component{
    constructor(props) {
    super(props)
    this.state = {timeLeft: null, timer: null};
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    }

    startTimer(timeLeft){
    clearInterval(this.state.timer);
    let timer = setInterval(() => {
    var timeLeft = this.state.timeLeft -1;
    if(timeLeft ==0) clearInterval(timer);
    this.setState({timeLeft: timeLeft})
    },1000)
    return this.setState({timeLeft: timeLeft, timer: timer});
    }

    pauseTimer(){
        console.log("Paused");
        let timeLeft = this.state.timeLeft;
        this.setState({timeLeft: timeLeft})
        clearInterval(this.state.timer);
        
    }

    resetTimer(){
        clearInterval(this.state.timer);
        return this.setState({timeLeft: null, timer: null})
    }



    render(){
        return (
            <div className="row-fluid">
                <h2>Timer</h2>
                <div className="btn-group" role="group">
                    <Button view = "btn btn-secondary" time="5" startTimer={this.startTimer}/>
                    <Button view = "btn btn-secondary" time="10" startTimer={this.startTimer}/>
                    <Button view = "btn btn-secondary" time="15" startTimer={this.startTimer}/>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="btn-group2" role="group">
                   
                        
                    <button type="button" className='btn btn-info'
                        onClick={() => this.startTimer(this.state.timeLeft)}> Resume </button>
                        
                    <button type="button" className='btn btn-info'
                        onClick={() => this.pauseTimer()}>Pause </button>
               
                   <button type="button" className='btn btn-danger'
                        onClick={() => this.resetTimer()} > Clear Timer </button>

                </div>

                <Timer timeLeft={this.state.timeLeft}/>
                <audio id="end-of-time" src="https://nuko.cf/test.wav"
                preload="auto"></audio>
            </div>
        )
    }
}