import './login.css';
// import logo from '..assets/loingbackground.jpeg';

import React, { Component } from 'react'

export class login extends Component {
  render() {
    return (
      <div className="mainbackground">
        
          <div className="middlebox">
          <ul className='logingul'>
           <li><p className="headline">Smart Track</p></li>
          
           <li> <input type="text" className='username' placeholder='username'></input></li>
           <li> <input type="text" className='password' placeholder='password'></input></li>
           <button className='loginbutton'> Sign in  </button>
           </ul>
          
           
        </div>



      </div>
    )
  }
}

export default login
