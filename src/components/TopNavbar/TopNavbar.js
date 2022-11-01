import React, { useContext, useState } from 'react';
import './top-navbar.css';
import { Badge } from '@mui/material';
import UserAvatar from './UserAvatar';
import { NotificationsRounded } from '@mui/icons-material';
import UserContext from '../../context/UserContext';
import UserMenu from './UserMenu';
import NotificationMenu from './NotificationMenu';

const TopNavbar = () => {
  const userName = useContext(UserContext);
  const [isAvatarMenuOn, setAvatarMenu] = useState('none');
  const [isNotificationMenuOn, setNotificationMenu] = useState('none');

  const onAvatarClick = () => {
    isAvatarMenuOn ? setAvatarMenu('') : setAvatarMenu('none');
  };

  const onNotificationClick = () => {
    isNotificationMenuOn ? setNotificationMenu('') : setNotificationMenu('none');
  };

  window.addEventListener('click', (e) => {
    if (!e.target.matches('.top-navbar__notification')) {
      setAvatarMenu('none');
    }
    /**TODO
     * Create window click then close notification menu
     */
  });

  return (
    <div className='top-navbar'>
      <div>
        <Badge onClick={onNotificationClick} color='secondary' badgeContent={1}>
          <NotificationsRounded font-color='secondary' className='top-navbar__notification hover' />
        </Badge>
        <NotificationMenu display={isNotificationMenuOn} />
      </div>
      <div id='user-avatar'>
        <UserAvatar onClick={onAvatarClick} userName={userName} />
        <UserMenu noneClass={isAvatarMenuOn} userName={userName} />
      </div>
    </div>
  );
};

export default TopNavbar;
