import { useContext } from 'react'
import Appbar from '../component/appbar/Appbar'
import Content from '../component/content/Content'
import { ContextDarkmode } from '../context/darkmode'
import './home.scss'
import Rightbar from '../component/rightbar/Rightbar'
import Sidebar from '../component/sidebar/Sidebar'
function Homepage() {
const {mode}=useContext(ContextDarkmode);
  return (
    <div
     className={`theme-${mode?'dark':'light'}`} 
    // className='theme-dark'
      >
        <Appbar/>
        
        <Content/>
      
        
    </div>
  )
}

export default Homepage