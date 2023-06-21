import React from 'react'
import './post.scss'
import img from '../../assets/user.jpeg'
import EmergencyRecordingIcon from '@mui/icons-material/EmergencyRecording';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import Modal from '../modal/Modal';

function Post() {
  return (
       <>
        <div className="post">
            <div className="userInfo">
                <img src={img} alt="" />
              <button>What on your mind, Zain?</button>
            </div>
            <hr />
            <div className="createpost">
                <button> <EmergencyRecordingIcon sx={{color:'red'}}/>
                Live video
                </button>
               <button>
                <BrokenImageOutlinedIcon sx={{color:'green'}}/>
                Photo/video</button>
                <button>
                    <EmojiEmotionsOutlinedIcon sx={{color:'yellow'}}/>
                    Feeling
                    </button>
            </div>
        </div>
        <Modal/>
       </>

  )
}

export default Post