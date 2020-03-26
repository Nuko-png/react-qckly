"use strict";
import ReactDOM from 'react-dom';
import React from 'react';
const dataUrl = 'https://nuko.cf/real_user_data.json';
import Users from './users';
import css from './bootstrap.min.css';

ReactDOM.render(
  <div>
    <Users data_url={dataUrl}/>
  </div>,
  document.getElementById('content')

)
