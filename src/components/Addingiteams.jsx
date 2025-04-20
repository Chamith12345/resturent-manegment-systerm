import React from 'react'
import './addingiteams.css'
export default function Addingiteams() {
  return (
    <div className='background'>
      <div className="middlebox">
        <h2 className='headline'>Adding Items</h2>
    
            <p className='name'>Name <input type='text' className='componentsname'></input></p>
            <p className='cost'>Cost <input type='text' className='componentscost'></input></p>
            <p className='type'>Type <select name="cars" id="cars" className='typeselector'>
                            <option value="pitzza">  Pitzza</option>
                            <option value="rice">  Rice</option>
                            <option value="kottu">  kottu</option>
                            <option value="new">  New Iteam  </option>
                            </select> </p>
                        
                     <button className='addingbutton'> Add  </button>  
               
  
    </div>
  </div>
  )

}
