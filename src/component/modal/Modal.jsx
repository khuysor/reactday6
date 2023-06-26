import React, { useEffect, useRef } from 'react'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import PersonIcon from '@mui/icons-material/Person';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import img from '../../assets/user.jpeg'
import './modal.scss'
import useBodyscroll from '../../helper/useBodyscroll';


function Modal({ModalHandle,close}) {

const handle=()=>{
    ModalHandle(false)
   close(false)
}
    return (
        < div className='modal' style={{ zIndex: 17 }}  >
            <div className="container">
                <div className="tittle">
                    <h1>Create post</h1>
                    <button  >
                        <CloseIcon onClick={handle} />
                    </button>
                </div>
                <hr />
                <div className="useInfo">
                    <div className="user">
                        <img src={img} alt="" />
                        <span>Username</span>
                    </div>
                    <input type="text" placeholder="What's on your mind, User?" />
                    <div className="boxPost">
                        <input type="file" name="" id="" />
                        <AddAPhotoIcon />
                        <label htmlFor="">
                            Add photos/or video
                        </label>

                    </div>
                    <div className="feel">
                        <h1>Add to your post</h1>
                        <div className="icons">
                            <PhotoLibraryIcon />
                            <PersonIcon />
                            <InsertEmoticonIcon />
                            <FmdGoodIcon />
                            <MoreHorizIcon />
                        </div>
                    </div>
                    <button>Post</button>
                </div>
            </div>
        </div >
    )
}

export default Modal