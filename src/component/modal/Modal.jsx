import React from 'react'
import './modal.scss'
function Modal() {
    return (
        <div className='modal'>
            <div className="container">
                <div className="tittle">
                    <h1>Create post</h1>
                </div>
                <hr />
                <div className="useInfo">
                    <div className="user">
                        <img src="" alt="" />
                        1
                        </div>
                    <div className="boxPost">
                        <input type="file" name="" id="" />
                        <label >Choose file</label>
                    </div>
                    <div className="feel">
                        1
                    </div>
                    <button>Post</button>
                </div>
            </div>
        </div>
    )
}

export default Modal