import React, { Component } from 'react';
import { BsFillBrightnessHighFill } from "react-icons/bs";



import Todo from './COMPONENT/Todo'

import './App.css';

class App extends Component {



  render() {
    return (
      <div className="container mt-4 shadow-lg p-3 mb-5 bg-white rounded">
        <div className='icons'>
          <h6 className='text-center shadow-sm p-3 mb-5 bg-body rounded'>TO DO LIST</h6>
          <BsFillBrightnessHighFill className='ico '></BsFillBrightnessHighFill>
        </div>

        <Todo />
      </div>
    );
  }
}

export default App;
