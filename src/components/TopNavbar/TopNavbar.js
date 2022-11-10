import React, {useState} from 'react';
import './top-navbar.css';
import {Badge} from '@mui/material';
import UserAvatar from './UserAvatar';
import {NotificationsRounded} from '@mui/icons-material';
import UserMenu from './UserMenu';
import NotificationMenu from './NotificationMenu';
import {getUserLoginData} from '../../utils/network-data';

const TopNavbar = ({onLogout}) => {
  const {token} = getUserLoginData();
  const name = 'Admin';
  const [isAvatarMenuOn, setAvatarMenu] = useState('none');
  const [isNotificationMenuOn, setNotificationMenu] = useState('none');
  if (!token) {
    return;
  }
  const onAvatarClick = (e) => {
    isAvatarMenuOn ? setAvatarMenu('') : setAvatarMenu('none');
    notNotificationClick();
    e.stopPropagation();
  };

  const onNotificationClick = (e) => {
    isNotificationMenuOn ? setNotificationMenu('') : setNotificationMenu('none');
    onNotAvatarClick();
    e.stopPropagation();
  };

  const isAvatarMenuHasNone = () => {
    const el = document.querySelector('#top-navbar__avatar-menu');
    return el.classList.contains('none');
  };

  const isNotificationMenuHasNone = () => {
    const el = document.querySelector('#top-navbar__notification-menu');
    return el.classList.contains('none');
  };

  const onNotAvatarClick = (e) => {
    if (isAvatarMenuHasNone()) return;
    setAvatarMenu('none');
  };

  const notNotificationClick = (e) => {
    if (isNotificationMenuHasNone()) {
      return;
    }
    setNotificationMenu('none');
  };

  window.addEventListener('click', (e) => {
    onNotAvatarClick(e);
    notNotificationClick(e);
  });

  return (
    <div className='top-navbar'>
      <div>
        <Badge
          className='top-navbar__notification hover'
          color='secondary'
          badgeContent={0}
          onClick={onNotificationClick}
        >
          <NotificationsRounded className='top-navbar__notification' font-color='secondary' />
        </Badge>
        <NotificationMenu display={isNotificationMenuOn} />
      </div>
      <div id='user-avatar'>
        <UserAvatar onClick={onAvatarClick} userName={name} />
        <UserMenu onLogout={onLogout} noneClass={isAvatarMenuOn} userName={name} />
      </div>
    </div>
  );
};

export default TopNavbar;
