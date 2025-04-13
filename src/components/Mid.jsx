import './mid.css';
import { FaSearch } from "react-icons/fa";



export default function MiddleSection() {
  return (
    <div className="middle-container">
     <dvi className="searchfullset">
       
       <input type="text" className="searchbarmid" placeholder="Search" /> 
       <FaSearch className='searchicon' />
       </dvi>
    <table className='midbartable'>
       <tr>
         <td><div className="box">Component 1</div></td>
         <td><div className="box">Component 1</div></td> 
         <td><div className="box">Component 2</div></td>
         <td><div className="box">Component 2</div></td>
         <td><div className="box">Component 2</div></td>
       </tr>
       <tr>
         <td><div className="box">Component 2</div></td>
         <td><div className="box">Component 2</div></td>
         <td><div className="box">Component 2</div></td>
         <td><div className="box">Component 2</div></td>
         <td><div className="box">Component 2</div></td>
       </tr>
       <tr>
         <td><div className="box">Component 2</div></td>
         <td><div className="box">Component 2</div></td>
         <td><div className="box">Component 2</div></td>
         <td><div className="box">Component 2</div></td>
         <td><div className="box">Component 2</div></td>
       </tr>
       <tr>
         <td><div className="box">Component 2</div></td>
         <td><div className="box">Component 2</div></td>
         <td><div className="box">Component 2</div></td>
         <td><div className="box">Component 2</div></td>
         <td><div className="box">Component 2</div></td>
       </tr>
     </table>
    </div>
  
  );
}
