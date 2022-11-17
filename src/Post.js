import { Avatar } from '@mui/material';
import React from 'react'
import InputOptions from './InputOptions';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import './Post.css';
function Post({name,description,Message,phtoUrl}) {
  return (
    <div className="postContainer">
      <div className="postHeader">
        <Avatar />
        <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
            
        </div>
        </div>
        <div className="post__body">
            <p>{Message}</p>
        </div>

        <div className="post__buttons">
          <InputOptions Icon={ThumbUpOffAltIcon} title="Like" color='gray'/>
          <InputOptions Icon={CommentIcon} title="Comment" color='gray'/>
          <InputOptions Icon={ShareIcon} title="Share" color='gray'/>
          <InputOptions Icon={SendIcon} title="Send" color='gray'/>
        </div>
    </div>
  );
}

export default Post