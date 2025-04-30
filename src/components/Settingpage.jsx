import './settingspage.css';
import React from 'react'
import Headline from './settingscomponents/Headline'
import Mainnavigation from './settingscomponents/Mainnavigation'
import Siteam from './settingscomponents/Siteam'

export default function Settingpage() {
  return (
    <div className='sbackground'>
     <Headline/> 
     <Mainnavigation/>
     <Siteam/>
    </div>


  )
}
