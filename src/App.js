import React, { Component } from 'react';
import { BsFillBrightnessHighFill } from "react-icons/bs";



import Todo from './COMPONENT/Todo'

import './App.css';





if (localStorage.getItem('them') == 'dark') {
  setDarkMood();

  if (document.getElementById('checkbox').checked) {
    localStorage.setItem('checkbox', true)
  }
}

function setDarkMood() {
  let isDark = document.body.classList.toggle('darkmode');


  if (isDark) {
    setDarkMood.checked = true;
    localStorage.setItem('theme', 'dark');
    document.getElementById('checkbox').setAttribute('checked', 'checked');
  } else {
    setDarkMood.checked = true;
    localStorage.removeItem('theme', 'dark')
  }
}

class App extends Component {



  render() {
    return (
      <div className="container mt-4 shadow-lg p-3 mb-5 bg-white rounded">
        <div className='icons'>
          <div className='form-check form-switch'>
            <input type="checkbox" className="form-check-input" id="checkbox" onClick={setDarkMood} />
            <label className='form-check-label' for="checkbox">Dark Mood</label>
          </div>
          <h6 className='text-center shadow-sm p-3 mb-5 bg-body rounded'>TO DO LIST</h6>
          <BsFillBrightnessHighFill className='ico '></BsFillBrightnessHighFill>
        </div>

        <Todo />
      </div>
    );
  }
}

export default App;
