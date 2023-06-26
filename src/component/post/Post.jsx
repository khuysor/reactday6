import React, {  useState } from 'react'
import './post.scss'
import img from '../../assets/user.jpeg'
import EmergencyRecordingIcon from '@mui/icons-material/EmergencyRecording';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import Modal from '../modal/Modal';
import useBodyscroll from '../../helper/useBodyscroll';

function Post() {
  localStorage.setItem('die',false)
  const [Mopen, setMopen] = useState(false);
  const [toggle]=useBodyscroll()
  const handle = () => {
    setMopen(true)
    toggle(true)

  }
  const Modalactive=()=>{
     setMopen(false)
     toggle(false)
  }
  return (
    <>
      <div className="post" >
        <div className="userInfo">
          <img src={img} alt="" />
          <button onClick={handle} >What on your mind, Zain?</button>
        </div>
        <hr />
        <div className="emotion">
          <button> 
            <EmergencyRecordingIcon onClick={handle} sx={{ color: 'red' }} />
          <span>Live video</span>
          </button>
          <button onClick={handle}>
            <BrokenImageOutlinedIcon sx={{ color: 'green' }}  />
           <span> Photo/video</span>
            </button>
          <button>
            <EmojiEmotionsOutlinedIcon sx={{ color: 'yellow' }} />
           <span> Feeling</span>
          </button>
        </div>
      </div>
      {Mopen &&
       <>
       <div className='active' onClick={Modalactive}>
        
       </div>
        <Modal ModalHandle={setMopen} close={toggle}  />
       </>
      }
    </>

  )
}

export default Post