import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Vegeta from './COMPONENT/Vegeta';
import ClassState from './COMPONENT/ClassState'
import './App.css';

class App extends Component {



  render() {
    return (
      <div className="App">
        <h1 className='text-center'>UseState Hooks</h1>
        <hr />
        <ClassState/>
      </div>
    );
  }
}

export default App;
