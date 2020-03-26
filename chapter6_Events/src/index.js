"use strict";
import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import ClickCounterButton from "./ClickCounterButton";
import Counter from "./Counter";
import css from './bootstrap.min.css';

function Content()  {
  const [counter, handleClick] = useState(0);

    return (
        <div>
          <ClickCounterButton handler={() => handleClick(counter + 1)}/>
          <br/>
          <Counter value={counter}/>
      </div>
    )
  }

ReactDOM.render(
  <div>
    <Content />
  </div>,
  document.getElementById('content')

)
