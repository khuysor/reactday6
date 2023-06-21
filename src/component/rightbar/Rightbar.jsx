import React from 'react'
import './rightbar.scss'
import img from '../../assets/user.jpeg'
import EmergencyRecordingIcon from '@mui/icons-material/EmergencyRecording';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import SearchIcon from '@mui/icons-material/Search';
function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="container">
        <a href="https://web.facebook.com">
          <div className="item">
            <div className="boximg">
              <img src={img} alt="" />
            </div>
            <div className="info">
              <span>Zinvo Blade Spirit</span>
              <p>https://web.facebook.com/</p>
            </div>
          </div>
        </a>
        <a href="https://web.facebook.com">
          <div className="item">
            <div className="boximg">
              <img src={img} alt="" />
            </div>
            <div className="info">
              <span>Zinvo Blade Spirit</span>
              <p>https://web.facebook.com/</p>
            </div>
          </div>
        </a>
        <hr />
        <div className="contact">
          <div className="head">
            <h4>Contacts</h4>
            <div>
              <EmergencyRecordingIcon />
              <MoreHorizOutlinedIcon />
              <SearchIcon />
            </div>
          </div>
          <div className="info">
            <div className="item">
              <img src={img} alt="" />
              <span>Username</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Rightbar