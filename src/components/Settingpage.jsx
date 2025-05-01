import './settingspage.css';
import React from 'react'
import Mainnavigation from './settingscomponents/Mainnavigation'
import Siteam from './settingscomponents/Siteam'

export default function Settingpage() {
  return (
    

     <div className="itemandnavigation"> 
     <Mainnavigation/>
     <Siteam/>
     </div>
   


  )
}
