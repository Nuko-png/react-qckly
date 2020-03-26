import ReactDOM from 'react-dom';
import React from 'react';

import Users from './users';
var dataUrl = require ("./real_user_data.json");

ReactDOM.render(
  <div>
    <Users data_url={dataUrl}/>
  </div>,
  document.getElementById('content')
);