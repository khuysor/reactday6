import './appbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import StorefrontIcon from '@mui/icons-material/Storefront';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import logo from '../../assets/logo.png'
import msgIcon from '../../assets/messenger.png'
import MenuIcon from '@mui/icons-material/Menu';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useContext, useState } from 'react';
import { ContextDarkmode } from '../../context/darkmode';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';


function Appbar() {
    const [active,setActive]=useState(false);
    const handleInput=()=>{
        setActive(!active)
    }
const {mode,toggle}=useContext(ContextDarkmode)
  
   
    return (
        <div className='appbar'>
            <header>
                <div className="left">
                    <div className="item">
                        <img src={logo} alt="" />
                        <div className='search'>
                            {/* <form > */}
                                <input type="text" name="" className={`${active ?'active':'null'}`} placeholder='Search..' />
                                <button onClick={handleInput} >
                                    <SearchIcon />
                                </button>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div className="item">
                        <MenuIcon sx={{display:{xs:'flex',sm:'none'},marginLeft:'5px'}}/>
                        <HomeIcon sx={{display:{xs:'none',sm:'flex'}}} />
                        <GroupIcon sx={{display:{xs:'none',sm:'flex'}}}  />
                        <OndemandVideoIcon sx={{display:{xs:'none',sm:'flex'}}} />
                        <AssignmentIndIcon sx={{display:{xs:'none',sm:'flex'}}} />
                        <StorefrontIcon sx={{display:{xs:'none',sm:'flex'}}}  />
                    </div>
                </div>
                <div className="right">
                    <div className="item">
                        {
                            mode  ?(
                              
                                <LightMode onClick={toggle} sx={{cursor:'pointer'}} />
                            ):(
                                <DarkMode onClick={toggle} sx={{cursor:'pointer'}}  />
                            )
                        }
                       
                        <AppsIcon sx={{cursor:'pointer'}}  />
                       <ChatOutlinedIcon sx={{cursor:'pointer'}} />
                        <NotificationsIcon sx={{cursor:'pointer'}}  />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Appbar
