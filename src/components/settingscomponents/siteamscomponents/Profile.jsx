import React from 'react'
import profilephoto from '../../../assets/profilephoto.jpg'
import './profile.css';
export default function Profile() {
  return (
    <div className='main'>
        <div className="profilebackgroung">
        <img className='profilephoto' src={profilephoto}  alt="error"  />
        </div>
          <div className="profilealldetails">
             <div className="profledetails">   
                <p className='profilep1'>Name</p> 
                <p className='profilep2'>Chamitlanka</p> 
            </div>
             <div className="profledetails">   
                <p className='profilep1'>Adderss</p> 
                <p className='profilep2'>440, walpala road andiambalama</p> 
            </div>
             <div className="profledetails">   
                <p className='profilep1'>Number</p> 
                <p className='profilep2'>0772809408</p> 
            </div>
             <div className="profledetails">   
                <p className='profilep1'>Company Name</p> 
                <p className='profilep2'>draaa</p> 
              </div>

            <div className="settingbutton">
              <button className='b1'> Edit</button>
            </div>
          </div>
    </div>
    
  )
}

