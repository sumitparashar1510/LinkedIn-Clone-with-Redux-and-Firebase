import React from 'react';
import './Sidebar.css';
import { Avatar } from "@mui/material";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function Sidebar() {

  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )

  console.log(user);
  console.log(user.profileUrl);

  return (
    <div className="sidebar">
     <div className="sidebar__top">
        <img src="https://th.bing.com/th/id/OIP.DogrtaSnduybcwoNk8lEaAHaE8?pid=ImgDet&rs=1" alt="" />
        <Avatar src={user.profileUrl} className="sidebar__avatar">{user.displayName[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
     </div>

     <div className="sidebar__stats">
       <div className="sidebar__stat">
         <p>Who viewed you</p>
         <p className="sidebar__statNumber">2,555</p>
       </div>
       <div className="sidebar__stat">
         <p>Views on post</p>
         <p className="sidebar__statNumber">2,350</p>
       </div>
     </div>

     <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
     </div>
    </div>
  )
}

export default Sidebar;