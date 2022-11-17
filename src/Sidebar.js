import { Avatar } from '@mui/material';
import React from 'react';
import "./Sidebar.css";
import back from './Images/back.jpg';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    );
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={back} alt="" />
                <Avatar sx={{ width:35, height: 35 }} className="Sidebar__avatar">SP</Avatar>
                <h2>Shakambhar pujari</h2>
                <h4>Shakambhar@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed You</p>
                    <p className='sidebar__statNumber'>2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>views on your post</p>
                    <p className='sidebar__statNumber'>2,448</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('Programming')}
                {recentItem('Reactjs')}
                {recentItem('Nodejs')}
                {recentItem('SoftwareEngineering')}
                {recentItem('Design')}
            </div>
        </div>
    )
}
export default Sidebar;



