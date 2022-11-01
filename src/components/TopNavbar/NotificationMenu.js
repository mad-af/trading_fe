import React from 'react';

const NotificationMenu = ({ display }) => {
  return (
    <div className={display + ' notification-menu'}>
      <p className='header'>Notifications</p>
      <p className='subheader'>You have 1 unread messages</p>
    </div>
  );
};

export default NotificationMenu;
