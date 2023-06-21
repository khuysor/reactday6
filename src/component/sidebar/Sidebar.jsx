import React from 'react'
import './sidebar.scss'
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FeedIcon from '@mui/icons-material/Feed';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { Flag } from '@mui/icons-material';
import user from '../../assets/user.jpeg'
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="container">
        <div className="item">
          <ul>
            <li>
              <a href="">
                <img src={user} alt="" />
                <span>User name</span>
              </a>
            </li>
            <li>
              <a href="">
                <GroupIcon/>
                <span>Friends</span>
              </a>
              </li>
            <li>
              <a href="">
              <BookmarkIcon/>
              <span>Save</span>
              </a>
              </li>
            <li>
              <a href="">
                <FeedIcon/>
                <span>Feeds</span>
              </a>
              </li>
            <li>
              <a href="">
                <Diversity3Icon/>
                <span>Groups</span>
              </a>
              </li>
            <li>
              <a href="">
                <StorefrontIcon/>
                <span>Marketplace</span>
              </a>
              </li>
              <li>
                <a href="">
                  <VideoLibraryIcon/>
                  <span>Watch</span>
                </a>
                </li>
              <li>
                <a href="">
                  <HistoryToggleOffIcon/>
                  <span>Memorie</span>
                </a>
                </li>
              <li>
                <a href="">
                  <Flag/>
                  <span>Pages</span>
                </a>
                </li>
              <li>
                <a href="">
                  <CalendarMonthIcon/>
                  <span>Events</span>
                </a>
                </li>
              <li>
                <a href="">
                  <EqualizerIcon/>
                  <span>Ads Manager</span>
                </a>
                </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar