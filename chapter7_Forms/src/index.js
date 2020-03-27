"use strict";
import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import InForm from "./Inform"
import css from './bootstrap.min.css';

class Content extends React.Component  {
  constructor(props) {
    super(props)
    this.handleRadio = this.handleRadio.bind(this)


    this.state = {
      radioGroup: {
        angular: false,
        react: true,
        svetle: false
      }
    }
  }

  handleRadio(event) {
    let obj = Object.assign(this.state.radioGroup)
    for(const radio in obj) {obj[radio] = false}
    obj[event.target.value] = true
    this.setState({radioGroup: obj})
    console.log(event.target.checked, ': ', event.target.value)
  }

  render(){
    return (
    <form>
      <label>
        <input type="radio"
        name="radioGroup"
        value='angular'
        checked={this.state.radioGroup['angular']}
        onChange={this.handleRadio}/>
         angular
        </label>
        <br/>
        <label>
        <input type="radio"
        name="radioGroup"
        value='react'
        checked={this.state.radioGroup['react']}
        onChange={this.handleRadio}/>
         react
        </label>
        <br/>
        <label>
        <input type="radio"
        name="radioGroup"
        value='svetle'
        checked={this.state.radioGroup['svetle'] == true}
        onChange={this.handleRadio}/>
         svetle
        </label>
        <br/>
     
      </form>
   
  )
  }
    
  }

ReactDOM.render(
  <div>
    <Content />
    <InForm />
  </div>,
  document.getElementById('content')

)
