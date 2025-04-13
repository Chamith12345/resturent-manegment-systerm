import { useState } from 'react'; // Fixed typo
import './rightbar.css';

export default function BillSection({ selectedItems }) {
  return (
    <div className="bill-container">
      <h2>Bill Summary</h2>
      <table className='rightbartable'>
         <tr>
           <th className='rightbaritemtable'>No.</th>
           <th className='rightbaritemtable'>Description</th> 
           <th className='rightbaritemtable'>Qty</th>
           <th className='rightbaritemtable'>Price</th>
           
         </tr>
         <tr>
           <td>Jill</td>
           <td>Smith</td>
           <td>50</td>
           <td>sgs</td>
         </tr>
         <tr>
           <td>Eve</td>
           <td>Jackson</td>
           <td>94</td>
         </tr>
         <tr>
           <td>John</td>
           <td>Doe</td>
           <td>80</td>
         </tr>
         <tr>
           <td>John</td>
           <td>Doe</td>
           <td>80</td>
         </tr>
      </table>

      <table className='rightbartotaltable'>
         <tr>
           <th className='rightbartotalname'>Total</th>
           <th className='rightbartotalprice'>100</th>
          </tr>
      </table>
      <table className='rightbarorder'>
         <tr>
           <td><button className='orderbutton'>Order</button></td>
         </tr>
      </table>

      

  </div>
  );
}
