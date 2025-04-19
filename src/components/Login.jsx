import './login.css';

import React, { Component } from 'react'

export class login extends Component {
  render() {
    return (
      
      <div>
        <>
        <div className="background">
        <div className="middlebox">
          <ul className='logingul'>
           <li><p className="headline">Smart Track</p></li>
          
           <li> <input type="text" className='username' placeholder='username'></input></li>
           <li> <input type="password" className='password' placeholder='password'></input></li>
           <button className='loginbutton'> Sign in  </button>
           </ul>
           </div>  
          
        </div>
        </> 
      </div>
    )
  }
}

export default login
