import React from 'react';
import './topNavbar.css';
import { Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import UserAvatar from './UserAvatar';

const TopNavbar = () => {
  return (
    <div className='top-navbar'>
      <Badge color='secondary' badgeContent={1}>
        <NotificationsIcon font-color='secondary' className='top-navbar__notification' />
      </Badge>
      <UserAvatar />
    </div>
  );
};

export default TopNavbar;
