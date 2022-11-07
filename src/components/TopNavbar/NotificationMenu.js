import React from 'react';

const NotificationMenu = ({ display }) => {
  return (
    <div onClick={(e) => e.stopPropagation()} id='top-navbar__notification-menu' className={display + ' notification-menu top-navbar__notification'}>
      <p className='header'>Notifications</p>
      <p className='subheader'>You have 1 unread messages</p>
    </div>
  );
};

export default NotificationMenu;
