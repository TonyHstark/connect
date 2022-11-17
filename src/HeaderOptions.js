import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import React from 'react';
import { Avatar  } from '@mui/material';
import './HeaderOptions.css';
function HeaderOptions({avatar,Icon,title}) {
  return (
    <div className='HeaderOptions'>
        {Icon && <Icon className="HeaderOptions__icon" />}
        {avatar && <Avatar sx={{ width:25, height: 25 }} className='HeaderOptions__icon' src={avatar} />}
        <h3 className='HeaderOptions__title'>{title}</h3>
    
    </div>
  )
}

export default HeaderOptions