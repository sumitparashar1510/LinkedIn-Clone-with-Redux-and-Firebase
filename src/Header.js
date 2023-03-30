import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className='header'>
      <div className="header__left">
          <img src="https://th.bing.com/th/id/R.d86a02cea4314ad84a6f8562d888daba?rik=7boInzS2mqO%2b%2bQ&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2016%2f05%2flinkedin-logo-icon_398944.png&ehk=1ZK%2f%2b1Td3SF2PBvK6I32niBwp4512xV0%2bdDl1POzRcA%3d&risl=&pid=ImgRaw&r=0" alt=""/>

          <div className="header__search">
            <SearchIcon />
            <input placeholder='Search' type="text" />
          </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={PeopleAltIcon} title="My Network"/>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={MessageIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsActiveIcon} title="Notifications" />
        <HeaderOption avatar={true} title="Me" onClick={logoutOfApp} />
      </div>
    </div>
  )
}

export default Header;