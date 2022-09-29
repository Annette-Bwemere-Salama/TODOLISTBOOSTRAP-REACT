import React, { Component } from 'react';
import Todo from './COMPONENT/Todo'

import './App.css';

class App extends Component {



  render() {
    return (
      <div className="container">
        <h6 className='text-center'>TO DO LIST</h6>
        <Todo />
      </div>
    );
  }
}

export default App;
