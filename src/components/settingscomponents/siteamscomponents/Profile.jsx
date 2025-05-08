import React from 'react'
import profilephoto from '../../../assets/profilephoto.jpg'
import './profile.css';
export default function Profile() {
  return (
    <div className='main'>
      <div className="profilebackgroung">
      <img className='profilephoto' src={profilephoto}  alt="error"  />
      </div>
      <div className="profledetails">   <p className='profilep1'>Name</p> <p className='profilep2'>Chamith Analanka</p> </div>
      <div className="profledetails">   <p className='profilep1'>Adderss</p> <p className='profilep2'>Chamith Analanka</p> </div>
      <div className="profledetails">   <p className='profilep1'>Number</p> <p className='profilep2'>Chamith Analanka</p> </div>
      <div className="profledetails">   <p className='profilep1'>Gender</p> <p className='profilep2'>Chamith Analanka</p> </div>
      </div>
    
  )
}
