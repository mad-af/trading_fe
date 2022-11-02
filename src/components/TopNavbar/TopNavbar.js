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

  const onNotAvatarClick = (e) => {
    if (isAvatarMenuOn) return;
    if (!e.target.matches('.top-navbar__avatar')) {
      setAvatarMenu('none');
    }
  };

  const isNotificationMenuHasNone = () => {
    const el = document.querySelector('#top-navbar__notification-menu');
    return el.classList.contains('none');
  };

  const notNotificationClick = (e) => {
    if (isNotificationMenuHasNone()) {
      return;
    }
    if (!e.target.matches('.top-navbar__notification')) {
      setNotificationMenu('none');
    }
  };

  window.addEventListener('click', (e) => {
    onNotAvatarClick(e);
    notNotificationClick(e);
  });

  /**TODO
   * Create custom event when notification not cliked or avatar not clicked
   */

  return (
    <div className='top-navbar'>
      <div>
        <Badge className='top-navbar__notification hover' color='secondary' badgeContent={1} onClick={onNotificationClick}>
          <NotificationsRounded className='top-navbar__notification' font-color='secondary' />
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
