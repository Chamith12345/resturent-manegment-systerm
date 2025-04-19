import React from 'react'
import './addingiteams.css'
export default function Addingiteams() {
  return (
    <div className='blackground'>
    <ul>
      <li>Name <input type='text' className='componentsname'></input></li>
      <li>Cost <input type='text' className='componentscost'></input></li>
      <li>Type <select name="cars" id="cars">
                    <option value="pitzza">Pitzza</option>
                    <option value="rice">Rice</option>
                    <option value="kottu">kottu</option>
                    <option value="new">New Iteam</option>
              </select> 
              </li>
       <li>Cost <input type='text' className='newtype name'></input></li> {/* if we chose new iteam this one unlock  */}
    </ul>
  </div>
  )
}
