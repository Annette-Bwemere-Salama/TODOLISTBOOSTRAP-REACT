import React, { Component } from 'react';
import Todo from './COMPONENT/Todo'

import './App.css';

class App extends Component {



  render() {
    return (
      <div className="">
        <h1 className='text-center'>TO DO LIST</h1>
        <hr />
        <Todo />
        <hr />
      </div>
    );
  }
}

export default App;
