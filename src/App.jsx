import Mid from './components/Mid.jsx'

import Sidebar from './components/Sidebar.jsx'
import Rightbar from './components/Rightbar.jsx'
import Login from './components/Login.jsx'



export default function App() {
  return (
    <div className='appmain'>
      <>
       {/* <Login/> */}
      <div className="homecon">
      <Sidebar/>
      <Mid/>
      <Rightbar/>
      </div>
      </>
    </div>
  )
}

