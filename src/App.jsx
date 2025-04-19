import Mid from './components/Mid.jsx'
import Sidebar from './components/Sidebar.jsx'
import Rightbar from './components/Rightbar.jsx'
import Login from './components/login.jsx'
import Addingiteams from './components/Addingiteams.jsx'



export default function App() {
  return (
    <div className='appmain'>
      <>
         <div className="login">
         {/* <Login/> */}
         </div>

         <div className="homecon">
            {/* <Sidebar/>
             <Mid/>
             <Rightbar/> */}
         </div>
         
         <div className="addingiteams">
         <Addingiteams/>
         </div>
      </>
      
    </div>
  )
}

