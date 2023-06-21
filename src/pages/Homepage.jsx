import { useContext } from 'react'
import Appbar from '../component/appbar/Appbar'
import Content from '../component/content/Content'
import { ContextDarkmode } from '../context/darkmode'
import './home.scss'
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