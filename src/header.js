import React from "react";
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import linked from "./Images/linkedin.png";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Profile from "./Images/profile.jpg";


function header()
{

return (
    <div className="header">
        <div className="header__left">
            <img src= {linked} alt="" />

            <div className="headerSearch">
                <SearchIcon />
                <input placeholder="Search" type="text" />
            </div>
        </div>

        <div className="header__right">
            <HeaderOptions Icon={HomeIcon} title='Home'/>
            <HeaderOptions Icon={SupervisorAccountIcon} title='Connections' />
            <HeaderOptions Icon={WorkIcon} title='Jobs' />
            <HeaderOptions Icon={MessageIcon} title='Messages' />
            <HeaderOptions Icon={NotificationsActiveIcon} title='Notification' />
            <HeaderOptions avatar={Profile} title='me'/>


        </div>
    </div>
    );

}
export default header;
