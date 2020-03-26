"use strict";
import React, {useState} from 'react';
import ReactDOM, { unstable_batchedUpdates } from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.launchClock()
    this.state = {
      currentTime : (new Date()).toLocaleString() 
    }
  }

  launchClock() {
    setInterval(() =>  {
                  this.setState({
                    currentTime: (new Date().toLocaleTimeString())
                  }) 
                }, 1000) }
              
  render(){

  return <div>{this.state.currentTime}</div>
  }
}

function Clock2 () {

  const [time, setTime] = useState(new Date().toLocaleString());
 
  setInterval(() =>setTime(new Date().toLocaleTimeString()),1000 )

return  <div>
    {time}</div>

}







  ReactDOM.render(
    <Clock2 />,
    document.getElementById('content')
  );
  