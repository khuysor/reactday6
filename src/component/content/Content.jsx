import React from 'react'
import './content.scss'
import Sidebar from '../sidebar/Sidebar'
import Rightbar from '../rightbar/Rightbar'
import Centerbar from '../centerbar/Centerbar'
function Content() {
  return (
    <div className='content'>
       <Sidebar/>
       <Centerbar/>
       <Rightbar/>
    </div>
  )
}

export default Content