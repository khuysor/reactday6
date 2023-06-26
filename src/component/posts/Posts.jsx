import React from 'react'
import './posts.scss'
import img from '../../assets/user.jpeg'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

function Posts() {
    return (
        <>
            <div className='userPost' >
                <div className="userInfo">
                    <div className="info">
                        <img src={img} alt="" />
                        <span>UserName</span>
                    </div>
                    <div className="btn">
                        <button>
                            <MoreHorizOutlinedIcon />

                        </button>
                        <button>
                            <CloseOutlinedIcon />
                        </button>
                    </div>
                </div>
                <div className="content">
                    <img src={img} alt="" />
                </div>
                <div className="audience">
                    <button>
                        <ThumbUpOffAltOutlinedIcon />
                        <span>  Like</span>
                    </button>
                    <button>
                        <CommentOutlinedIcon />
                        <span>Comment</span>
                    </button>
                    <button>
                        <ShareOutlinedIcon />
                        <span>Share</span>
                    </button>
                </div>
            </div>
           
        </>

    )
}

export default Posts