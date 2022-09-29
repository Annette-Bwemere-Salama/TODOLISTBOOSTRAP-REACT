import React, { Component } from 'react';
import { BsFillBrightnessHighFill } from "react-icons/bs";



import Todo from './COMPONENT/Todo'

import './App.css';

class App extends Component {



  render() {
    return (
      <div className="container">
        <div className='icons'>
          <h6 className='text-center'>TO DO LIST</h6>
          <BsFillBrightnessHighFill className='ico'></BsFillBrightnessHighFill>
        </div>

        <Todo />
      </div>
    );
  }
}

export default App;
