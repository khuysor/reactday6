import React from 'react'
import './story.scss';
import img from '../../assets/user.jpeg'
function Story() {
  return (
    <div className='story'>
             <div className="stories">
                <div className="image">
                    <img src={img} alt="" />
                </div>
                <div className="userInfo">
                    <h1>+</h1>
                    <button>
                        Create story
                    </button>
                </div>
            </div>
            <div className="stories">
                <div className="image">
                    <img src={img} alt="" />
                </div>
                <div className="userInfo">
                   <h2>Another Name</h2>
                </div>
            </div>
            <div className="stories">
                <div className="image">
                    <img src={img} alt="" />
                </div>
                <div className="userInfo">
                   <h2>Another Name</h2>
                </div>
            </div>
            <div className="stories">
                <div className="image">
                    <img src={img} alt="" />
                </div>
                <div className="userInfo">
                   <h2>Another Name</h2>
                </div>
            </div>
            <div className="stories">
                <div className="image">
                    <img src={img} alt="" />
                </div>
                <div className="userInfo">
                   <h2>Another Name</h2>
                </div>
            </div>
            <div className="stories">
                <div className="image">
                    <img src={img} alt="" />
                </div>
                <div className="userInfo">
                   <h2>Another Name</h2>
                </div>
            </div>
    </div>
  )
}

export default Story