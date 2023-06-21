import React from 'react'
import './centerbar.scss'
import Story from '../story/Story'
import Post from '../post/Post'
import Posts from '../posts/Posts'
function Centerbar() {
  return (
    <div className='centerbar'>
      <div className="container">
            <Story/>   
            <Post/> 
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>
      </div>
      </div>
  )
}

export default Centerbar