"use strict";
import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
  function nice(){
    return <p>nice</p>
  }
  let age = prompt('How old are you', props.default)
    return <div {...props}>
      { age > 50 ? <h1> WOW {age} </h1> : <h1> nice {age} </h1> }
        </div> 
    }

  class Welcome2 extends React.Component {
    nice(){
      return <p>nice</p>
    }
    render(){
      return <h1 {...this.properties}>
      Hello {this.props.frName} world
      {this.nice()}
      </h1>
      
    
    }
  }
  //const element = <Welcome name="Алиса" />;
  ReactDOM.render(
    /*
    <div>
      <Welcome2 
      id="ember"
      frName = "ember.js"
      title="Oh my..."/>
      <Welcome2 
      id="backbone"
      frName = "backbone.js"
      title="Oh shi ..."/>
      <Welcome2 
      id="angular"
      frName = "Angular.js"
      title="Oh etit'..."/>
    </div>,
    */
    <Welcome default = '55' id="test" />,
    document.getElementById('content')
  );
  