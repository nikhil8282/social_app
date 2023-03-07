import React, { useState } from 'react'
import './post.scss'
import Comment from '../comments/Comment';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
function Post({ userPic, postImg, postDes, userName }) {
  const [comment, setComment] = useState(false);


  return (
    <div className='post'>
      <div className='container'>
        <div className='user'>
          <div className='user-info'>
            <img src={userPic} />
            <div className='detail'>
              <span className='name'>{userName}</span>
              <span className='time'>1 min ago</span>
            </div>
          </div>
          <MoreHorizOutlinedIcon />
        </div>
        <div className='content'>
          <p>{postDes}</p>
          <img src={postImg} />
        </div>
        <div className='info'>
          <div className='items'>
            <ThumbUpOutlinedIcon />
            16 likes
          </div>
          <div className='items'>
            <CommentOutlinedIcon onClick={() => setComment(!comment)} />
            <span>4 comments</span>
          </div>
          <div className='items'>
            <SendOutlinedIcon />
            <span>share</span>
          </div>
        </div>
        {comment && <Comment />}
      </div>
    </div>
  )
}

export default Post