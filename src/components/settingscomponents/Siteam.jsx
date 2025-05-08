import React from 'react'
import './siteam.css'
import Profile from './siteamscomponents/Profile'

export default function Siteam() {
  return (
    <div className='sibackground'>
      <h2 className='siteamheadline'>Settings</h2>
      <div className="siteiteams">
            <Profile/>
      </div>
    </div>
  )
}
