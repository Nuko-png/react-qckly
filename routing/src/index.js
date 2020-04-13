"use strict";
const ReactDOM = require ('react-dom');
const React = require ('react');
import Content from './content';
const History = require('history');
import { BrowserRouter, Route, Switch } from 'react-router-dom'
const About = require('./about')
const Home = require("./home");
import 'bootstrap/dist/css/bootstrap.min.css';

/*const mapping = {
  '#profile': <div>Profile (<a href='#'>home</a>)</div>,
  '#accounts': <div>Accounts (<a href='#'>home</a>)</div>,
  '*': <div>Dashboard <br/>
       <a href='#profile'>Profile</a>
       <br/>
       <a href='#accounts'>Accounts</a>
  </div>
}
*/

ReactDOM.render((
  <BrowserRouter>
      
    <Route path="/" component={Content} /> 
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About} />
  
  </BrowserRouter>
), document.getElementById('content'))